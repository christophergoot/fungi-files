'use strict'

const GOOGLEMAPS_API_KEY = 'AIzaSyABVyjzmdlA8yrWGI73K62cMmqo5_bw7rs';

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

function locationOption (sec) {
	// all loc-methods
	const previousDiv = document.querySelector('.loc-method:not(.grayed)');
	const previousInputs = previousDiv.querySelectorAll('inputs');
	previousDiv.classList.add('grayed');
	if (previousInputs) for (let input of previousInputs) input.setAttribute('readonly', 'readonly');

	const targetDiv = document.querySelector('#'+sec);
	const targetInputs = targetDiv.querySelectorAll("input");
	if (targetInputs) for (let input of targetInputs) input.removeAttribute('readonly');
	targetDiv.classList.remove('grayed');
	// add readonly to inputs
	// select target div
	// remove readonly
	// remove .grayed
}






// function BADlocationOption (sec) {
// 	const allDivs = document.querySelectorAll("div.loc-method");
// 	const allInputs = for(let div of allDivs.querySelector('input');
// 	allDivs.forEach((div) => div.classList.add("grayed"));
// 	for(let div of allDivs) div.classList.add("grayed");
// 	const targetDiv = document.querySelector('#'+sec);
// 	const targetInputs = targetDiv.querySelectorAll("input");
// 	// document.getElementById('location').getElementByTagName('div').forEach(function(el) { el.classList.add('grayed')});
// 	// document.getElementById('location').getElementByTagName('div').classList.add('grayed');
// 	for (let input of allInputs) input.setAttribute("readonly", "readonly");
// 	for (let input of targetInputs) input.removeAttribute("readonly");
// 	targetDiv.classList.remove('grayed');
// }



function show(event) {
	// console.log(event);
	const sec = event.target.attributes.value.value;
	// console.log(sec);
	if (['address', 'latlng', 'exif', 'geolocation']
		.includes(sec)) locationOption(sec);
	if (['.observations', '.new.observation']
		.includes(sec)) {
			$('section').not(sec).addClass('hidden');
			$(sec).removeClass('hidden');
		};
	if (['habitat', 'mushroom']
		.includes(sec)) {
			$(`.${sec}-button`).addClass('selected');
			$(`.${sec}-notes`).toggle('.hidden');
		};
}

function submitImage(file) {
	console.log('submitting image');
	console.log(file);
}

function getObservations(callback) {
	setTimeout(function(){ callback(MOCK_OBSERVATIONS)}, 100);
}

function viewObservation(id) {
	document.getElementById('#obs-list').classList.add('hidden');
	// render and display observation
}

function reverseGeocode (latlng) {
	const geocoder = new google.maps.Geocoder;
	geocoder.geocode({'location': latlng}, function(results, status) {
		return (results[0].formatted_address);
	})	
}

function submitNewObservation (event) {
	console.log (event);
}

async function renderObservation(obs) {
	const obsDate = new Date(obs.obsDate);
	const latlng = {lat: obs.location.lat, lng: obs.location.lng};
	const obsAddress = await reverseGeocode(latlng);
	let obsRender = `<div class="obs-list-item" onclick="viewObservation('${obs.id}')">`;
	obsRender += `<img class="obs-thumb" src="${obs.photos[0]}">`
	if (obs.fungi.nickname) obsRender += 
		`<span class="title"><span class="label">nickname: </span>${obs.fungi.nickname}</span>`;
	if (obs.fungi.commonName) obsRender += 
		`<span class="title"><span class="label">common name: </span>${obs.fungi.commonName}</span>`
	if (obs.fungi.genus) obsRender += 
		`<span class="fungi"><span class="label">genus: </span>${obs.fungi.genus} 
		<span class="label">species: </span>${obs.fungi.species}</span><span>`
	if (obs.obsDate) obsRender += 
		`<span class="fungi"><span class="label">observed </span>${obsDate.toDateString()} 
		<span class="label">around </span>${obsAddress}</span>`
	obsRender += `</div>`
	return obsRender;
}

function displayObservations(res) {
	let obsList = "<h2>Observations</h2>";
	res.observations.forEach((obs) => obsList += renderObservation(obs));
	document.getElementById('obs-list').innerHTML = obsList;
}


function getAndDisplayObservations() {
    getObservations(displayObservations);
}

function eventListeners () {

}

$( "button" ).click(function( event ) {
	event.preventDefault();
  });

$(getAndDisplayObservations)