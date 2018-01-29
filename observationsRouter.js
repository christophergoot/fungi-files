// import { read } from 'fs';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const multer = require('multer');
const storage = multer.memoryStorage(); //need to start with memoryStorage. Fix buffer
const upload = multer({ storage: storage });
const { Observation } = require('./models');
const AWS = require('aws-sdk');
const S3 = new AWS.S3({apiVersion: '2006-03-01', 
	params: {
		Bucket: 'fungi-files-observation-images'
}});
const sharp = require('sharp');


router.get('/', (req, res) => {
	Observation
	.find()
	.then(obs => {
		res.json(
			obs.map(obs => obs.serialize())
		);
	})
	.catch(err => {
		console.error(err);
	res.status(500).json({ error: 'something went wrong getting all observations' });
	});
});

router.get('/:id', (req, res) => {
	Observation
	  .findById(req.params.id)
	  .then(obs => res.json(obs.serialize()))
	  .catch(err => {
		console.error(err);
		res.status(500).json({ error: 'something went wrong getting single observation' });
	  });
});


function nestFields(req) {
	const fields = ['nickname', 'commonName', 'genus', 'species', 'confidence', 'lat', 'lng', 'address', 'mushroomNotes', 'habitatNotes', 'locationNotes', 'speciminNotes', 'obsDate', 'obsTime', 'pubDate'];
	const fungiFields = ['commonName', 'species', 'genus', 'confidence', 'nickname'];
	const notesFields = ['mushroomNotes', 'locationNotes', 'habitatNotes', 'speciminNotes'];
	const locationFields = ['lat', 'lng', 'address'];
	const observation = {'fungi':{},'notes':{},'location':{}};
	for (let field of fields) if (req.body[field]) {
		if (fungiFields.includes(field)) observation.fungi[field] = req.body[field];
		if (notesFields.includes(field)) observation.notes[field] = req.body[field];
		if (locationFields.includes(field)) observation.location[field] = req.body[field];
	};
	return observation;
}

function processImage(buffer) {
	return sharp(buffer)
		.resize(1000)
		.toBuffer() //returns a promise
		.catch( err => console.error(err));
}

async function uploadFile(file) {
	console.log(file);
	const buffer = file.buffer; // if memory storage
	const resizedBuffer = await processImage(buffer);
	let fileKey = Date.now() + file.originalname;
	return new Promise((resolve, reject) => {		
		S3.upload({Body: resizedBuffer, Key: fileKey}, (err, data) => {
			if (err) reject (err)
			console.log(err);
			console.log(data.Location);
			resolve(data.Location);
		});
	});
}

router.post('/', upload.array('photos'), async (req, res) => {
	// upload photos and then pass urls onto Observation
	const observation = nestFields(req);
	const files = req.files;
	if (files.length > 0)  {
		let fileUrls = [];
		for (let i=0; i<files.length; i++) {
			try { fileUrls.push( await uploadFile(files[i])) } 
			catch(err) { console.error(err) }
		};

		observation.photos =  fileUrls;
		console.log(fileUrls);
	};
	Observation
	.create(observation)
	.then(obs => res.status(201).json(obs.serialize()))
	.catch(err => {
		console.error(err);
		res.status(500).json({ error: 'Something went wrong posting a new observation' })
	});
})

router.delete('/:id', (req, res) => {
	Observation
	  .findByIdAndRemove(req.params.id)
	  .then(() => {
		res.status(204).json({ message: 'success' });
	  })
	  .catch(err => {
		console.error(err);
		res.status(500).json({ error: 'something went wrong deleting an observation' });
	  });
  });
  




module.exports = router;