const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { Observation } = require('./models');
const AWS = require('aws-sdk');
const S3 = new AWS.S3({
	apiVersion: '2006-03-01',
	params: {
		Bucket: 'fungi-files-observation-images'
	}
});
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
	const fields = ['nickname', 'commonName', 'genus', 'species', 'confidence', 'lat', 'lng', 'address', 'mushroomNotes', 'habitatNotes', 'locationNotes', 'speciminNotes', 'obsDate', 'obsTime', 'pubDate', 'featured'];
	const fungiFields = ['commonName', 'species', 'genus', 'confidence', 'nickname'];
	const notesFields = ['mushroomNotes', 'locationNotes', 'habitatNotes', 'speciminNotes'];
	const locationFields = ['lat', 'lng', 'address'];
	const observation = { 'fungi': {}, 'notes': {}, 'location': {}, 'featured': req.body.featured };
	for (let field of fields) if (req.body[field]) {
		if (fungiFields.includes(field)) observation.fungi[field] = req.body[field];
		if (notesFields.includes(field)) observation.notes[field] = req.body[field];
		if (locationFields.includes(field)) observation.location[field] = req.body[field];
	};
	return observation;
}

function processImage(buffer, size) {
	return sharp(buffer)
		.rotate()
		.resize(size)
		.toBuffer() //returns a promise
		.catch(err => console.error(err));
}

async function uploadFile(file, obsId, size) {
	const buffer = file.buffer;
	const resizedBuffer = await processImage(buffer, size);
	const folder = obsId + '/';
	const extention = file.originalname.substring(file.originalname.lastIndexOf('.'))
	const fileKey = folder + Date.now() + extention;
	return new Promise((resolve, reject) => {
		S3.upload({ Body: resizedBuffer, Key: fileKey }, (err, data) => {
			if (err) reject(err);
			resolve(data.Location);
		});
	});
}

async function updateObservation(req, res, id) {
	const observation = nestFields(req);
	observation.id = id;
	const files = req.files;
	if (files.length > 0) {
		// upload files
		let newFiles = [];
		for (let i = 0; i < files.length; i++) {
			const origName = files[i].originalname;
			const url = await uploadFile(files[i], id, 1200);	
			const thumbnail = await uploadFile(files[i], id, 200);
			const filename = url.substring(url.lastIndexOf('/') + 1);
			newFiles.push({ url, thumbnail, filename });
			if (observation.featured === origName ) observation.featured = filename;
		};
		// update photo.files directly in mongo
		Observation
		.findById(id, function (err, obs) {
			if (!obs.photos) obs.photos = {};
			if (!obs.photos.files) obs.photos.files = [];
			for (let file of newFiles) obs.photos.files.push(file);
			obs.save();
		});
	};
	// update the other input fields
	Observation
		.findByIdAndUpdate(id, { $set: observation })
		.then(obs => res.status(201).json(obs.serialize()), )
		.catch(err => res.status(500).json({ error: 'Something went wrong posting a new observation' }));
}

router.post('/', upload.array('newFiles'), (req, res) => {
	// create a new document, and pass on id
	Observation.create({ "published": true })
		.then((obs) => {
			const id = obs.id.toString();
			updateObservation(req, res, id);
		})
		.catch(err => {
			console.log(err);
			res.json(err);
		})
})

router.put('/:id', upload.array('newFiles'), (req, res) => {
	const id = req.params.id;
	updateObservation(req, res, id);
})

function keyFromUrl(url) {
	const arr = url.split('/');
	const filename = arr[arr.length - 1];
	const id = arr[arr.length - 2];
	const key = id + "/" + filename;
	return key;
}

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	// removes document from mongo, passes on deleted document
	Observation
		.findByIdAndRemove(id)
		.then(async (obs) => {
			const arr = obs.photos.files;
			for (let i = 0; i < arr.length; i++) {
				await deleteS3File(keyFromUrl(arr[i].url));
				await deleteS3File(keyFromUrl(arr[i].thumbnail));
			};
			//   .catch(err => {
			// 	console.error(err);
			// 	res.status(500).json({ error: 'something went wrong deleting an observation' });
			//   });
		})
	.then(obs => {
		res.status(204).json({ message: 'success' });
	})
})

function deleteS3File(key) {
	return new Promise((res, rej) => {
		S3.deleteObject({ Key: key }, (err, data) => {
			if (err) rej(err);
			else res(data);
		});
	})
}


router.delete('/delete/:id/:filename', async (req, res) => {
	const { id, filename } = req.params;
	const obs = await Observation.findById(id);
	let { files } = obs.photos;
	for (let i = 0; i < files.length; i++) {
		if (files[i].filename === filename) {
			await deleteS3File(keyFromUrl(files[i].url));
			await deleteS3File(keyFromUrl(files[i].thumbnail));
			files.splice(i, 1);
		}
	}
	await obs.save();
	res.status(204).json({ message: 'success' });
})




module.exports = router;