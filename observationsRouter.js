// import { read } from 'fs';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const multer = require('multer');
const upload = multer();
const {Observation} = require('./models');

// const {MOCK_OBSERVATIONS} = require('./mock-data');

router.get('/', (req, res) => {
	Observation
	.find()
	.then(obs => {
		// console.log(obs);
		res.json(
			obs.map(obs => obs.serialize())
			// obs
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

router.post('/drafts/', upload.array('photos', 24), (req, res) => {
	// req will be a draft post
	// console.log(req);
	// console.log
	// throw 'look at log'

	Observation
	.create({
		'nickname': req.body.nickname,
		// 'commonName': req.body.commonName,
		// 'genus': req.body.genus,
		// 'species': req.body.species,
		// 'confidence': req.body.confidence,
		'lat': req.body.lat,
		'lng': req.body.lng,
		'address': req.body.address,
		// 'mushroomNotes': req.body.mushroomNotes,
		// 'habitatNotes': req.body.habitatNotes,
		// 'locationNotes': req.body.locationNotes,
		// 'speciminNotes': req.body.speciminNotes,
		// 'obsDate': new Date(req.body.obsDate + 'T' + req.body.obsTime),
		// 'pubDate': req.body.pubDate
	})
	.then(obs => res.status(201).json(obs.serialize()))
	.catch(err => {
		console.error(err);
		res.status(500).json({ error: 'Something went wrong' });
	});

})






module.exports = router;