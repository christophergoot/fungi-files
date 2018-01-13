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
	const previousDiv = document.querySelector('.loc-method:not(.grayed)');
	const previousInputs = previousDiv.querySelectorAll('inputs');
	previousDiv.classList.add('grayed');
	if (previousInputs) for (let input of previousInputs) input.setAttribute('readonly', 'readonly');

	const targetDiv = document.querySelector('#'+sec);
	const targetInputs = targetDiv.querySelectorAll("input");
	if (targetInputs) for (let input of targetInputs) input.removeAttribute('readonly');
	targetDiv.classList.remove('grayed');
}

function show(event) {
	// console.log(event);
	const sec = event.target.attributes.value.value;
	// console.log(sec);
	if (['address', 'latlng', 'exif', 'geolocation']
		.includes(sec)) locationOption(sec);
	if (['.observations', '.new.observation']
		.includes(sec)) {
			// getAndDisplayObservations();
			$('section').not(sec).addClass('hidden');
			$(sec).removeClass('hidden');
		};
	if (['habitat', 'mushroom']
		.includes(sec)) {
			$(`.${sec}-button`).addClass('selected');
			$(`.${sec}-notes`).toggle('.hidden');
		};
}

function updateLatlng (latlng) {
	const {lat, lng} = latlng;
	document.querySelector('#lat').setAttribute('value', lat);
	document.querySelector('#lng').setAttribute('value', lng);
}

function updateAddress (addressString) {
	document.querySelector('#address-input').setAttribute('value', addressString);
}

function geolocate(event) {
	navigator.geolocation.getCurrentPosition((position) => {
		const coords = {'lat': position.coords.latitude, 'lng': position.coords.longitude};
		const obs = {'location': coords};
		getAddress(obs, function(addressString, obs) {
			updateLatlng(coords);
			updateAddress(addressString);
		});
	});
}

function submitImage(file) {
	console.log('submitting image');
	console.log(file);
}

function toDecimal (number) {
	return number[0].numerator + number[1].numerator /
		(60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};

function updateExif (string, status) {
	const exifTarget = document.querySelector('#exif-text');
	exifTarget.innerHTML = string;
	if (status) {
		if (status === "error") exifTarget.classList.add('error')
		else exifTarget.classList.remove('error');
	}

}

document.getElementById("file-input").onchange = function (event) {
	const file = event.target.files[0];
	if (file && file.name) {
		EXIF.getData(file, function () {
			if (this.exifdata.GPSLatitude) {
				let latRef = 1, lngRef = 1;
				console.log(this.exifdata);
				if (this.exifdata.GPSLatitudeRef === "S") latRef = -1
				if (this.exifdata.GPSLongitudeRef === "W") lngRef = -1
				const coords = {
					'lat': toDecimal(this.exifdata.GPSLatitude) * latRef,
					'lng': toDecimal(this.exifdata.GPSLongitude) * lngRef
				};
				const obs = {'location': coords};

				getAddress(obs, function (addressString, obs) {
					updateLatlng(coords);
					updateExif("Location extracted from image '" + file.name + "'.", "no error")
					updateAddress(addressString);
				})
			} else {
				updateExif("No EXIF data found in image '" + file.name + "'.", "error");
			}
		});
	}
}

document.querySelector('#lat').onchange = refreshAddress (event);
document.querySelector('#lng').onchange = refreshAddress (event);

function refreshAddress (event) {
console.log(document.querySelector('#lng'));
	const coords = {'lat': document.querySelector('#lat')};
}

function viewObservation(event) {
	console.log(event);
	const id = event.attributes.value;
	const startRect = event.getBoundingClientRect();
	console.log(startRect);
	const viewSection = document.querySelector('section#view-observation');
	const startContent = event.innerHTML;
	const startBox = `style="
		top:${startRect.y}px; 
		left:${startRect.x}px; 
		width:${startRect.width}px; 
		height:${startRect.height}px; 
		background-color: white;
		border: 1px solid blue;"`
	viewSection.innerHTML = `<div ${startBox}>${startContent}</div>`;
	let startDiv = document.querySelector('section#view-observation div');
	document.querySelector('#obs-list').classList.add('grayed');
	viewSection.classList.remove('hidden');
}

function getAddress (obs, callback) {
	const coords = {'lat': obs.location.lat, 'lng': obs.location.lng};
	const geocoder = new google.maps.Geocoder;
	geocoder.geocode({'location': coords}, function(results, status) {
		console.log(results);
		const addressString = results[1].formatted_address;
		callback(addressString, obs);
	});
}

function submitNewObservation (event) {
	console.log (event);
}

 function renderObservation(address, obs) {
	const obsDate = new Date(obs.obsDate);
	let obsRender = `<div class="obs-list-item" value='${obs.id}' onclick="viewObservation(this)">`;
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
			<span class="label">around </span><span id="list-address">${address}</span></span>`
		obsRender += `</div>`
		document.querySelector('#obs-list').innerHTML += obsRender;
}

function getObservations(callback) {
	setTimeout(function(){ callback(MOCK_OBSERVATIONS)}, 100);
}

function displayObservations(res) {

	// res.observations.forEach((obs) => obsList += getAddress(obs, renderObservation));
	// document.getElementById('obs-list').innerHTML = obsList;
	const observations = res.observations;
	for(let obs of observations) getAddress(obs, renderObservation);
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