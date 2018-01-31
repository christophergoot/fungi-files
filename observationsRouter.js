const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage(); 
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

function processImage(buffer,size) {
	return sharp(buffer)
		.resize(size)
		.toBuffer() //returns a promise
		.catch( err => console.error(err));
}

async function uploadFile(file,obsId,size) {
	const buffer = file.buffer;
	const resizedBuffer = await processImage(buffer,size);
	const folder = obsId + '/';
	const extention = file.originalname.substring(file.originalname.lastIndexOf('.'))
	const fileKey = folder + Date.now() + extention;
	return new Promise((resolve, reject) => {
		S3.upload({Body: resizedBuffer, Key: fileKey}, (err, data) => {
			if (err) reject (err);
			resolve(data.Location);
		});
	});
}

async function updateObservation (req, res, id) {
	// if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
	// 	res.status(400).json({
	// 		error: 'Request path id and request body id values must match'
	// 	});
	// };
	const observation = nestFields(req);
	observation.id = id;
	const files = req.files;
	if (files.length > 0)  {
		// construct observation.photos.files[{filename,url}];
// function needs to 
	// upload files
	// attach new file references to observation

		// strategy

		let newFiles = [];
		// if (req.body.photos) fileUrls = req.body.photos.urls.split(',');
		for (let i=0; i<files.length; i++) {
			const url = await uploadFile(files[i], id, 1200);
			const thumbnail = await uploadFile(files[i], id, 200);
			const filename = url.substring(url.lastIndexOf('/') + 1);
			// const exif = [];
			// observation.photos.files.push
			newFiles.push({
				url,thumbnail,filename,exif
			});
			// try { fileUrls.push( await uploadFile(files[i], id)) }
			// catch(err) { console.error(err) }
		};

		observation.photos = {'files': newFiles};
		// observation.photos.
		
		// fileUrls;
	};
	Observation
	.findByIdAndUpdate(id, { $set: observation }, { new: true })
	.then(obs => res.status(201).json(obs.serialize()))
	.catch(err => {
		console.error(err);
		res.status(500).json({ error: 'Something went wrong posting a new observation' })
	});
}

router.post('/', upload.array('newPhotos'), (req, res) => {
	// upload photos and then pass urls onto Observation
	Observation.create({"published": true})
	.then((obs) => {
		const id = obs.id.toString();
		updateObservation(req, res, id);
	});
})

router.put('/:id', upload.array('newPhotos'), (req, res) => {
	const id = req.params.id;
	updateObservation(req, res, id);
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

router.delete('/:id/:filename', (req, res) => {
	const {id, filename} = req.params;
	const photos = req.body;
	Observation  //remove the url reference . . . maybe by using $pull
		.findByIdAndUpdate(id, { $set: {'photos.urls': photos} }, { new: true })
		.then(() => {
			res.status(200).json({message: 'success'});
		})

// is working		
	S3.deleteObject({Key: id + "/" + filename}, (err, res) => {
		if (err) console.error(err);
		else console.log(res);
	})
})




module.exports = router;