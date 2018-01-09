'use strict'


const MOCK_OBSERVATIONS = { "observations": [
	{
		"id": 11111111,
		"fungi": {
			"nickname": "pretty blue",
			"commonName": "Blue Chanterelle",
			"genus":	"Polyozellus",
			"species":	"P. multiplex"
		},
		"location": {
			"lat": 45.313,
			"lng": -122.0868
		},
		"notes": "pretty pretty mushroom",
		"photos": ["img1.jpg", "img2.jpg", "img3.jpg"],
		"observationDate": 1501603800,
		"publishedDate": 1513809468703
	},
	{
		"id": 22222222,
		"fungi": {
			"nickname": "pretty red",
			"commonName": "Red Cracked Bolete",
			"genus":	"Boletus",
			"species":	"Chrysenteron"
		},
		"location": {
			"lat": 45.3135,
			"lng": -122.0869
		},
		"notes": "pretty pretty mushroom",
		"photos": ["img1.jpg", "img2.jpg", "img3.jpg"],
		"observationDate": 1501604220,
		"publishedDate": 1513809546654
	},
]};

module.exports = { MOCK_OBSERVATIONS };