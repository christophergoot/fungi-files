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
// const TEST_DATABASE_URL = DATABASE_URL;

const faker = require('faker');

function tearDownDb() {
	return mongoose.connection.dropDatabase();
}

function seedObservations() {
	const seedData = [];
	for(let i=0; i<10; i++) seedData.push(fakeObservation());
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
		// 	seed a test database
		// 	make a get request
		// 	compare values against the DB directly
		// tear down DB
		return chai.request(app)
			.get('/observations').then(res => {
				
			})
	})
})