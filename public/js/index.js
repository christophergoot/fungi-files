'use strict'

const MOCK_OBSERVATIONS = { "observations": [
	{
		"id": 11111111,
		"fungi": {
			"commonName": "Blue Chanterelle",
			"genus":	"Polyozellus",
			"species":	"P. multiplex"
		},
		"location": {
			"lat": 45.313,
			"lng": -122.0868
		},
		"notes": "pretty pretty mushroom",
		"photos": ["https://78.media.tumblr.com/687d01d9e4dfdf30fd58269c129b2340/tumblr_inline_ndwz8sdzdY1qldys9.jpg", "http://www.mykoweb.com/CAF/photos/large/Polyozellus_multiplex%28mgw-01%29.jpg"],
		"obsDate": "Mon Jan 08 2018",
		"pubDate": 1513809468703
	},
	{
		"id": 22222222,
		"fungi": {
			"nickname": "Bubble Stubber",
		},
		"location": {
			"lat": 45.3135,
			"lng": -122.0869
		},
		"notes": "pretty pretty mushroom",
		"photos": ["http://northernbushcraft.com.s3-website-us-west-2.amazonaws.com/mushrooms/redCrackedBolete/1.jpg"],
		"obsDate": 1501604220,
		"pubDate": 1513809546654
	},
	{
		"id": 33333333,
		"fungi": {
			"commonName": "Blue Chanterelle",
			"genus":	"Polyozellus",
			"species":	"P. multiplex"
		},
		"location": {
			"lat": 45.313,
			"lng": -122.0868
		},
		"notes": "pretty pretty mushroom",
		"photos": ["https://78.media.tumblr.com/687d01d9e4dfdf30fd58269c129b2340/tumblr_inline_ndwz8sdzdY1qldys9.jpg", "http://www.mykoweb.com/CAF/photos/large/Polyozellus_multiplex%28mgw-01%29.jpg"],
		"obsDate": "2018-01-05T22:56:03.896Z",
		"pubDate": 1513809468703
	},
	{
		"id": 22222222,
		"fungi": {
			"nickname": "Bubble Stubber",
			"commonName": "Red Cracked Bolete",
			"genus":	"Boletus",
			"species":	"Chrysenteron"
		},
		"location": {
			"lat": 45.3135,
			"lng": -122.0869
		},
		"notes": "pretty pretty mushroom",
		"photos": ["http://northernbushcraft.com.s3-website-us-west-2.amazonaws.com/mushrooms/redCrackedBolete/1.jpg"],
		"obsDate": 1501604220,
		"pubDate": 1513809546654
	},

]};

function locationOption (opt) {
	// opt.preventDefault();
	let optClass = `.${opt}`;
	$('.loc-opt').not(optClass).addClass('hidden');
	$('button').not(optClass).removeClass('selected');
	$(optClass).removeClass('hidden');
	$(`.${opt}-button`).addClass('selected');

	// $(optClass).toggle('.hidden');
}

function showNotes(type) {
	$(`.${type}-button`).addClass('selected');
	$(`.${type}-notes`).toggle('.hidden');
}


function submitImage(file) {
	console.log(file);
}

function getObservations(callback) {
	setTimeout(function(){ callback(MOCK_OBSERVATIONS)}, 100);
}

function renderObservation(obs) {
	console.log('rendering observation');
	let obsDate = new Date(obs.obsDate);
	let obsRender = `<div class="obs-list-item">`;
	obsRender += `<img class="obs-thumb" src="${obs.photos[0]}">`
	if (obs.fungi.nickname) obsRender += `<span class="title"><span class="label">nickname: </span>${obs.fungi.nickname}</span>`;
	if (obs.fungi.commonName) obsRender += `<span class="title"><span class="label">common name: </span>${obs.fungi.commonName}</span>`
	if (obs.fungi.genus) obsRender += `<span class="fungi"><span class="label">genus: </span>${obs.fungi.genus} <span class="label">species: </span>${obs.fungi.species}</span><span>`
	if (obs.obsDate) obsRender += `<span class="fungi"><span class="label">observed </span>${obsDate} <span class="label">around </span>${obs.location.lat}${obs.location.lng}</span>`
	obsRender += `</div>`
	return obsRender;
}

function displayObservations(res) {
	console.log(res.observations);
	let obsList = "<h2>Observations</h2>";
	res.observations.forEach((obs) => {
		obsList = (obsList + renderObservation(obs));
	});
	$('.obs-list').html(obsList);
}


function getAndDisplayObservations() {
    getObservations(displayObservations);
}

$( "button" ).click(function( event ) {
	event.preventDefault();
  });

$(getAndDisplayObservations)