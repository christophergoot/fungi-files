'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const observationSchema = mongoose.Schema({
	fungi: {
		nickname: String,
		commonName: String,
		genus: String,
		species: String,
		confidence: Number
	},
	photos: [],
	location: {
		lat: Number,
		lng: Number,
		address: String
	},
	notes: {
		mushroomNotes: String,
		habitatNotes: String,
		locationNotes: String,
		speciminNotes: String
	},
	obsDate: {type: Date, default: Date.now},
	pubDate: {type: Date, default: Date.now}
})

observationSchema.methods.serialize = function() {
	const obsDateObj = new Date(this.obsDate);
	const pubDateObj = new Date(this.pubDate);
	return {
		id: this._id,
		fungi: this.fungi,
		location: this.location,
		notes: this.notes,
		photos: this.photos,
		obsDate: obsDateObj,
		pubDate: pubDateObj
	};
}

const Observation = mongoose.model('Observation', observationSchema);

module.exports = {Observation};