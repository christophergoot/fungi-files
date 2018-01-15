'use strict'

const COMMON_NAMES = ['Aborted Entoloma',	'Admirable Bolete',	'Alcohol Inky Cap',	'American Matsutake',	'Angels\' Wings',	'Anise-Scented',	'Apricot Jelly Mushroom',	'Aspen Scaber Stalk',	'Bare-Toothed Russula',	'Barrow\'s Bolete',	'Bay Bolete',	'Bear\'s Head',	'Belly-Button Mushroom',	'Black Chanterelle',	'Black Forest Mushroom',	'Black Fungus',	'Black Kame',	'Black Saddle Mushroom',	'Blackening Russula',	'Bleeding Agaricus',	'Bleeding Milky Cap',	'Blewit',	'Blue Milky Cap',	'Bracelet Cortinarius',	'Brown Kame',	'Butter Bolete',	'Butter Mushroom',	'Button Mushroom',	'Candy Cap',	'Cauliflower Mushroom',	'Cèpe',	'Charcoal Burner',	'Chicken Of The Woods',	'Cinnabar-Red Chanterelle',	'Cloud Ear Mushroom',	'Clustered Blue Chanterelle',	'Comb Tooth Mushroom',	'Commercial Mushroom',	'Common Store Mushroom',	'Coral Hericium',	'Crocodile Agaricus',	'Death Cap',	'Delicious Milky Cap',	'Dotted-Stalk Suillus',	'Drumstick Mushroom',	'Egg Mushroom',	'Enoki',	'Fairy-Ring Mushroom',	'Fawn Mushroom',	'Field Or Meadow Mushroom',	'Fragrant Clitocybe',	'French Black Truffle',	'Garlic Marasmius',	'Golden Chanterelle',	'Golden Needle',	'Green-Spored Parasol',	'Green-Spored Parasol Mushroom',	'Gypsy Mushroom',	'Hedgehog Mushroom',	'Hen Of The Woods',	'Honey Or Oak Mushroom',	'Horn Of Plenty',	'Horse Mushroom',	'Inky Cap',	'Italian White Truffle',	'Judas\' Ear',	'King Bolete',	'Lawyer\'S Wig',	'Man On Horseback',	'Manzanita Scaber Stalk',	'Matsutake',	'Mica Cap',	'Monkey Head',	'Morel',	'Nameko',	'Old Man Of The Woods',	'Orange-Capped Scaber Stalk',	'Oregon White Truffle',	'Oyster Mushroom',	'Paddy Straw Mushroom',	'Painted Suillus',	'Parasol Mushroom',	'Peck',	'Pig\'s Ear',	'Pine Mushroom',	'Pom-Pom',	'Porcini',	'Puffball',	'Red-Tipped Coral Mushroom',	'Regal Bolete',	'Russula Like Waxy Cap',	'Salt-Loving Mushroom',	'Scaber Stalk',	'Shaggy Mane',	'Shaggy Parasol Mushroom',	'Shellfish-Scented Russula',	'Shiitake',	'Short-Stalked Slippery Cap',	'Short-Stem Russula',	'Silver Ear Mushroom',	'Smooth Chanterelle',	'Snow Mushroom',	'Snowbank False Morel',	'Sponge',	'Spring Agaricus',	'Straw Mushroom',	'Summer Truffle',	'Sweet Tooth',	'Sweetbread Mushroom',	'Tacky Green Russula',	'Texas White Truffle',	'The Prince',	'Tree Ear',	'Tricholoma Magnivelare',	'Trumpet Chanterelle',	'Trumpet Of Death',	'Two-Colored Bolete',	'Umbrella Polypore',	'Variant Of B. Edulis',	'Velvet Foot',	'White Chanterelle',	'White Jelly Fungus',	'Wine-Cap Stropharia',	'Winter Mushroom',	'Wood Ear Mushroom',	'Zeller\'s Bolete',]

const MUSHROOMS = [{ 'commonName': 'Aborted Entoloma', 'genus': 'Entoloma', 'species': 'Abortivum'},	{ 'commonName': 'Admirable Bolete', 'genus': 'Boletus', 'species': 'Mirabilis'},	{ 'commonName': 'Alcohol Inky Cap', 'genus': 'Coprinus', 'species': 'Atramentarius'},	{ 'commonName': 'American Matsutake', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Angels\' Wings', 'genus': 'Pleurocybella', 'species': 'Porrigens'},	{ 'commonName': 'Anise-Scented', 'genus': 'Clitocybe', 'species': 'Odora'},	{ 'commonName': 'Apricot Jelly Mushroom', 'genus': 'Phlogiotis', 'species': 'Helvelloides'},	{ 'commonName': 'Aspen Scaber Stalk', 'genus': 'Leccinum', 'species': 'Insigne'},	{ 'commonName': 'Bare-Toothed Russula', 'genus': 'Russula', 'species': 'Vesca'},	{ 'commonName': 'Barrow\'s Bolete', 'genus': 'Boletus', 'species': 'Barrowsii'},	{ 'commonName': 'Bay Bolete', 'genus': 'Boletus', 'species': 'Badius'},	{ 'commonName': 'Bear\'s Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Belly-Button Mushroom', 'genus': 'Hydnum', 'species': 'Umbilicatum'},	{ 'commonName': 'Black Chanterelle', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Black Forest Mushroom', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Black Fungus', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Black Kame', 'genus': 'Terfezia', 'species': 'Bouderi'},	{ 'commonName': 'Black Saddle Mushroom', 'genus': 'Helvella', 'species': 'Lacunosa'},	{ 'commonName': 'Blackening Russula', 'genus': 'Russula', 'species': 'Nigricans'},	{ 'commonName': 'Bleeding Agaricus', 'genus': 'Agaricus', 'species': 'Fuscofibrillosus Haemorrhoidarius'},	{ 'commonName': 'Bleeding Milky Cap', 'genus': 'Lactarius', 'species': 'Rubrilacteus'},	{ 'commonName': 'Blewit', 'genus': 'Lepista', 'species': 'Nuda'},	{ 'commonName': 'Blue Milky Cap', 'genus': 'Lactarius', 'species': 'Indigo'},	{ 'commonName': 'Bracelet Cortinarius', 'genus': 'Cortinarius', 'species': 'Armillatus'},	{ 'commonName': 'Brown Kame', 'genus': 'Terfezia', 'species': 'Claveryi'},	{ 'commonName': 'Butter Bolete', 'genus': 'Boletus', 'species': 'Appendiculatus'},	{ 'commonName': 'Butter Mushroom', 'genus': 'Pholiota', 'species': 'Aurivella'},	{ 'commonName': 'Button Mushroom', 'genus': 'Agaricus', 'species': 'Brunnescens'},	{ 'commonName': 'Candy Cap', 'genus': 'Lactarius', 'species': 'Fragilis'},	{ 'commonName': 'Cauliflower Mushroom', 'genus': 'Sparassis', 'species': 'Crispa'},	{ 'commonName': 'Cèpe', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Charcoal Burner', 'genus': 'Russula', 'species': 'Cyanoxantha'},	{ 'commonName': 'Chicken Of The Woods', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Cinnabar-Red Chanterelle', 'genus': 'Cantharellus', 'species': 'Cinnabarinus'},	{ 'commonName': 'Cloud Ear Mushroom', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'Clustered Blue Chanterelle', 'genus': 'Polyozellus', 'species': 'Multiplex'},	{ 'commonName': 'Comb Tooth Mushroom', 'genus': 'Hericium', 'species': 'Ramosum'},	{ 'commonName': 'Commercial Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Common Store Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Coral Hericium', 'genus': 'Hericium', 'species': 'Coralloides'},	{ 'commonName': 'Crocodile Agaricus', 'genus': 'Agaricus', 'species': 'Crocodilinus'},	{ 'commonName': 'Death Cap', 'genus': 'Amanita', 'species': 'Phalloides'},	{ 'commonName': 'Delicious Milky Cap', 'genus': 'Lactarius', 'species': 'Deliciosus'},	{ 'commonName': 'Dotted-Stalk Suillus', 'genus': 'Suillus', 'species': 'Granulatus'},	{ 'commonName': 'Drumstick Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Egg Mushroom', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Enoki', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Fairy-Ring Mushroom', 'genus': 'Marasmius', 'species': 'Oreades'},	{ 'commonName': 'Fawn Mushroom', 'genus': 'Pluteus', 'species': 'Cervinus'},	{ 'commonName': 'Field Or Meadow Mushroom', 'genus': 'Agaricus', 'species': 'Campestris'},	{ 'commonName': 'Fragrant Clitocybe', 'genus': 'Clitocybe', 'species': 'Fragrans'},	{ 'commonName': 'French Black Truffle', 'genus': 'Tuber', 'species': 'Melanosporum'},	{ 'commonName': 'Garlic Marasmius', 'genus': 'Marasmius', 'species': 'Scorodonius'},	{ 'commonName': 'Golden Chanterelle', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Golden Needle', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Green-Spored Parasol', 'genus': 'Lepiota', 'species': 'Molybdites'},	{ 'commonName': 'Green-Spored Parasol Mushroom', 'genus': 'Chlorophyllum', 'species': 'Molybdites'},	{ 'commonName': 'Gypsy Mushroom', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Hedgehog Mushroom', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Hen Of The Woods', 'genus': 'Polypilus', 'species': 'Frondosa'},	{ 'commonName': 'Honey Or Oak Mushroom', 'genus': 'Armillaria', 'species': 'Mellea'},	{ 'commonName': 'Horn Of Plenty', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Horse Mushroom', 'genus': 'Agaricus', 'species': 'Arvensis'},	{ 'commonName': 'Inky Cap', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Italian White Truffle', 'genus': 'Tuber', 'species': 'Magnatum'},	{ 'commonName': 'Judas\' Ear', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'King Bolete', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Lawyer\'S Wig', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Man On Horseback', 'genus': 'Tricholoma', 'species': 'Flavovirens Equestre'},	{ 'commonName': 'Manzanita Scaber Stalk', 'genus': 'Leccinum', 'species': 'Manzanitae'},	{ 'commonName': 'Matsutake', 'genus': 'Armillaria', 'species': 'Matsutake'},	{ 'commonName': 'Mica Cap', 'genus': 'Coprinus', 'species': 'Micaceus'},	{ 'commonName': 'Monkey Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Morel', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Nameko', 'genus': 'Pholiota', 'species': 'Nameko'},	{ 'commonName': 'Old Man Of The Woods', 'genus': 'Strobilomyces', 'species': 'Confusus'},	{ 'commonName': 'Orange-Capped Scaber Stalk', 'genus': 'Leccinum', 'species': 'Aurantiacum'},	{ 'commonName': 'Oregon White Truffle', 'genus': 'Tuber', 'species': 'Gibbosum'},	{ 'commonName': 'Oyster Mushroom', 'genus': 'Pleurotus', 'species': 'Ostreatus'},	{ 'commonName': 'Paddy Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Painted Suillus', 'genus': 'Suillus', 'species': 'Pictus'},	{ 'commonName': 'Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Procera'},	{ 'commonName': 'Peck', 'genus': 'Agaricus', 'species': 'Rodmanii'},	{ 'commonName': 'Pig\'s Ear', 'genus': 'Gomphus', 'species': 'Clavatus'},	{ 'commonName': 'Pine Mushroom', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Pom-Pom', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Porcini', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Puffball', 'genus': 'Calvatia', 'species': 'Gigantea'},	{ 'commonName': 'Red-Tipped Coral Mushroom', 'genus': 'Ramaria', 'species': 'Botrytis'},	{ 'commonName': 'Regal Bolete', 'genus': 'Boletus', 'species': 'Regius'},	{ 'commonName': 'Russula Like Waxy Cap', 'genus': 'Hygrophorus', 'species': 'Russula'},	{ 'commonName': 'Salt-Loving Mushroom', 'genus': 'Agaricus', 'species': 'Bernardii'},	{ 'commonName': 'Scaber Stalk', 'genus': 'Leccinum', 'species': 'Scaber'},	{ 'commonName': 'Shaggy Mane', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Shaggy Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Shellfish-Scented Russula', 'genus': 'Russula', 'species': 'Xerampelina'},	{ 'commonName': 'Shiitake', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Short-Stalked Slippery Cap', 'genus': 'Suillus', 'species': 'Brevipes'},	{ 'commonName': 'Short-Stem Russula', 'genus': 'Russula', 'species': 'Delica'},	{ 'commonName': 'Silver Ear Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Smooth Chanterelle', 'genus': 'Cantharellus', 'species': 'Lateritius'},	{ 'commonName': 'Snow Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Snowbank False Morel', 'genus': 'Gyromitra', 'species': 'Gigas'},	{ 'commonName': 'Sponge', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Spring Agaricus', 'genus': 'Agaricus', 'species': 'Bitorquis'},	{ 'commonName': 'Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Summer Truffle', 'genus': 'Tuber', 'species': 'Aestivum'},	{ 'commonName': 'Sweet Tooth', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Sweetbread Mushroom', 'genus': 'Clitopilus', 'species': 'Prunulus'},	{ 'commonName': 'Tacky Green Russula', 'genus': 'Russula', 'species': 'Aeruginea'},	{ 'commonName': 'Texas White Truffle', 'genus': 'Tuber', 'species': 'Texensis'},	{ 'commonName': 'The Prince', 'genus': 'Agaricus', 'species': 'Augustus'},	{ 'commonName': 'Tree Ear', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Tricholoma Magnivelare', 'genus': 'Armillaria', 'species': 'Ponderosa'},	{ 'commonName': 'Trumpet Chanterelle', 'genus': 'Cantharellus', 'species': 'Tubaeformis'},	{ 'commonName': 'Trumpet Of Death', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Two-Colored Bolete', 'genus': 'Boletus', 'species': 'Bicolor'},	{ 'commonName': 'Umbrella Polypore', 'genus': 'Polyporus', 'species': 'Umbellatus'},	{ 'commonName': 'Variant Of B. Edulis', 'genus': 'Boletus', 'species': 'Pinicola'},	{ 'commonName': 'Velvet Foot', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'White Chanterelle', 'genus': 'Cantharellus', 'species': 'Subalbidus'},	{ 'commonName': 'White Jelly Fungus', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Wine-Cap Stropharia', 'genus': 'Stropharia', 'species': 'Rugosoannulata'},	{ 'commonName': 'Winter Mushroom', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Wood Ear Mushroom', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Zeller\'s Bolete', 'genus': 'Boletus', 'species': 'Zelleri'},];
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
			updateValue('#lat', position.coords.latitude);
			updateValue('#lng', position.coords.longitude);			
			updateValue('#address-input', addressString);
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

document.getElementById("common-name").onchange = function (event) {
	console.log(event);
	const commonName = event.target.value;
	for (let i = 0; i < MUSHROOMS.length; i++) {
		if (commonName == MUSHROOMS[i].commonName) {
			let { genus, species } = MUSHROOMS[i];
			console.log(`found genus ${genus} and species ${species}`);
			update('#genus', genus);
			update('#species', species);
		}
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
				const str = this.exifdata.DateTime.split(" ");
				const obsDate = str[0].replace(/:/g, "-");
				const obsTime = str[1];
				const obs = {'location': coords};

				getAddress(obs, function (addressString, obs) {
					updateValue('#obs-date', obsDate);
					updateValue('#obs-time', obsTime);
					updateValue('#lat', coords.lat);
					updateValue('#lng', coords.lng);
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
	const coords = {'lat': document.querySelector('#lat')};
}

function annimateObservation(event) {
	const id = event.attributes.value;
	const startRect = event.getBoundingClientRect();
	const viewSection = document.querySelector('section#view-observation');
	const startContent = event.innerHTML;
	const startBox = `
		id="observation-detail";
		value="${id}";
		style="position:fixed;
		top:${startRect.y}px; 
		left:${startRect.x}px; 
		width:${startRect.width}px; 
		height:${startRect.height}px; 
		background-color: white;"`
	viewSection.innerHTML = `<div ${startBox}>${startContent}</div>`;
	let observationDiv = document.querySelector('#observation-detail');
	document.querySelector('#obs-list').classList.add('grayed');
	viewSection.classList.remove('hidden');
	observationDiv.classList.add('observationBox');
}

 function getObservation(targetId, callback) {
	setTimeout(() => { 
		const db = MOCK_OBSERVATIONS.observations;
		let target;
// 		console.log(targetId);
		for(let i=0; i < db.length; i++) {
// 			console.log (db[i].id);
			if (db[i].id === targetId) target = db[i];
			if (target) callback(target);
		};
	}, 100);
}

function displayObservation(obs) {
	console.log('observation is ' + obs);
}

function viewObservation(event) {
	annimateObservation(event);
	const id = event.attributes.value.value;
	// const observation = getObservation(id);
	// observation.then((obs) => {
	// })	
	getObservation(id, displayObservation);

}

function getAddress (obs, callback) {
	const coords = {'lat': obs.location.lat, 'lng': obs.location.lng};
	const geocoder = new google.maps.Geocoder;
	geocoder.geocode({'location': coords}, function(results, status) {
// 		console.log(results);
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

function updateValue(target, value) {
	document.querySelector(target).setAttribute('value', value);
}

function update(target, content) {
	document.querySelector(target).innerHTML = content;
}

function populateDatalist() {
	// console.log(COMMON_NAMES);
	let options = "";
	for(let i=0; i < COMMON_NAMES.length; i++) options += `<option value="${COMMON_NAMES[i]}">`;
	update('#common-names', options);
}

$( "button" ).click(function( event ) {
	event.preventDefault();
  });

$(getAndDisplayObservations);
$(populateDatalist);