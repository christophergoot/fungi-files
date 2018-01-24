'use strict'

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
// setting temp port for initial testing
process.env.PORT = 62256;
const {app} = require('../server');


describe('Static Files tests', () => {
    // before(() => console.log('will soon start server'));
    // after(() => console.log('will soon close server'));
// Add one test Add one test that verifies that when you hit up the root url for your client, you get a 200 status code and HTML.
    it('should serve a valid index.html', () => {
        return chai.request(app)
            .get('').then(res => {
                console.log(res.status);
                res.should.be.html;
                res.should.have.status(200);
            })
    })
})