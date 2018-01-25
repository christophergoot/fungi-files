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

router.post('/', upload.array('photos'), (req, res) => {
	const fields = [nickname, commonName, genus, species, confidence, lat, lng, address, mushroomNotes, habitatNotes, locationNotes, speciminNotes, obsDate, obsTime, pubDate];
	let newPost = "";
	for (let field in fields) if (`req.body.${field}`) newPost =+ `'${field}': req.body.${field},`;
console.log(`{${newPost}}`);
	Observation
	.create(`{${newPost}}`)
	.catch(err => {
		console.error(err);
		res.status(500).json({ error: 'Something went wrong posting a new observation' })
	.then(obs => res.status(201).json(obs.serialize()))
	;});
})






module.exports = router;