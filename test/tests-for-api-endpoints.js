'use strict'

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const {Observation} = require('../models');
const {runServer, app, closeServer} = require('../server');
const {DATABASE_URL} = require('../config');
const TEST_DATABASE_URL = DATABASE_URL;

describe('API Endpoint tests', () => {
	// before(() => console.log('will soon start server'));
	// after(() => console.log('will soon close server'));
	it('should get all observations on GET', () => {
		return chai.request(app)
			.get('/observations').then(res => {
				

			})
	})
})