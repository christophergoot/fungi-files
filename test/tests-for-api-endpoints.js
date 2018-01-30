'use strict'

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const mongoose = require('mongoose');

const {Observation} = require('../models');
const {runServer, app, closeServer} = require('../server');
const {DATABASE_URL, TEST_DATABASE_URL} = require('../config');
const SEED_OBSERVATION_COUNT = 20;

const faker = require('faker');

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
	it('should get all observations on GET', () => {
		// strategy
		// 	make a get request
		//  compare count of seeded data against GET
		// 	compare values against the DB directly
		return chai.request(app)
			.get('/observations')
				.then(res => res.body.length)
				.then(getCount => {
					SEED_OBSERVATION_COUNT.should.equal(getCount);
			})
	});
	it('should get a single observation on GET:id', () => {
		// strategy
		// 	call mongo for an example id
		// 	place GET call using that id
		// 	varify some that id
		return Observation.find().limit(1)
			.then(res => {
				const knownId = res[0]._id.toString();
				const knownFungi = res[0].fungi;
				return chai.request(app)
				.get('/observations/' + knownId)
					.then(res => {
						res.body.id.should.equal(knownId);
						res.body.fungi.commonName.should.equal(knownFungi.commonName);
					})
			})
	})
	it('should delete a single observation on DEL:id', () => {
		// strategy
		// 	call mongo for an example id
		// 	make DEL call using that id
			// verify status code
		// 	attempt to GET:id
		// 		verify error Code
		// 	make GET call
		// 		verify count = initial seed count -1
		return Observation.find().limit(1)
			.then(res => {
				const knownId = res[0]._id.toString();
				return chai.request(app)
				.delete(`/observations/${knownId}`)
					.then(res => {
						res.should.have.status(204)
						return Observation.find().count();
					})
					.then(endCount => endCount.should.equal(SEED_OBSERVATION_COUNT - 1))
			})
	})
	it('should update an observation on PUT', () => {
		
	})
})