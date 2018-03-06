'use strict'

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const mongoose = require('mongoose');
const {getAllObservations, getOneObservation, deleteSingleObservation} = require('../observationsRouter');

const {Observation} = require('../models');
const {runServer, app, closeServer} = require('../server');
const {DATABASE_URL, TEST_DATABASE_URL} = require('../config');
const SEED_OBSERVATION_COUNT = 20;

const faker = require('faker');

const userId = "fake.userId.for.testing";

function tearDownDb() {
	return mongoose.connection.dropDatabase();
}

function seedObservations() {
	const seedData = [];
	for(let i=0; i<SEED_OBSERVATION_COUNT; i++) seedData.push(fakeObservation());
	return Observation.insertMany(seedData);
}

function fakeObservation() {
	let obs = {};
		obs.userId = userId;
		obs.fungi = {};
		obs.fungi.nickname = faker.name.firstName();
		obs.fungi.commonName = faker.name.lastName();
		obs.fungi.genus = faker.lorem.word();
		obs.fungi.species = faker.lorem.word();
		obs.fungi.confidence = faker.random.number(5);
		obs.location = {};
		obs.location.lat = faker.address.latitude();
		obs.location.lng = faker.address.longitude();
		obs.location.address = faker.address.secondaryAddress();
		obs.obsDate = new Date(faker.date.recent());
		obs.notes = {};
		['mushroomNotes', 'habitatNotes', 'locationNotes', 'speciminNotes'].forEach((note) => {
			if (Math.random() > .75) obs.notes[note] = faker.lorem.sentence();
		});
		let obsPhotos = [];
		for(let i=0; i<=Math.floor(Math.random() * 12); i++) obsPhotos.push(faker.image.nature());
		obs.photos = obsPhotos;
	return obs;
}

describe('API Endpoint tests', () => {
	before(() => runServer(TEST_DATABASE_URL));
	beforeEach(() => seedObservations());
	after(() => closeServer());
	afterEach(() => tearDownDb());
	it('should get all observations on GET', async () => {
		const obs = await getAllObservations(userId)
		const getCount = obs.length;
		SEED_OBSERVATION_COUNT.should.equal(getCount);
	});
	it('should get a single observation on GET:id', async () => {
		const knownObs = await Observation.find().limit(1);
		const knownFungi = knownObs[0].fungi;
		const knownId = knownObs[0]._id.toString();
		const obs = await getOneObservation(userId, knownId);
		obs.id.toString().should.equal(knownId);
		obs.fungi.commonName.should.equal(knownFungi.commonName);
	})
	it('should delete a single observation on DEL:id', async () => {
		const knownRes = await Observation.find({'userId': userId}).limit(1);
		const knownId = knownRes[0]._id.toString();
		const res = await deleteSingleObservation(knownId, userId);
			// res.should.have.status(204);
			res.id.toString().should.equal(knownId);
		const endCount = await Observation.find({'userId': userId}).count();
			endCount.should.equal(SEED_OBSERVATION_COUNT - 1);
	})
	it('should update an observation on PUT', () => {
		console.log('not yet implemented');
	})
})