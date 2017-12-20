const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {MOCK_OBSERVATIONS} = require('./mock-data');

router.get('/', (req, res) => {
	res.json(MOCK_OBSERVATIONS);
});








module.exports = router;