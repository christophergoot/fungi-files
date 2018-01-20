'use strict'

const MUSHROOMS = [{ 'commonName': 'Aborted Entoloma', 'genus': 'Entoloma', 'species': 'Abortivum'},	{ 'commonName': 'Admirable Bolete', 'genus': 'Boletus', 'species': 'Mirabilis'},	{ 'commonName': 'Alcohol Inky Cap', 'genus': 'Coprinus', 'species': 'Atramentarius'},	{ 'commonName': 'American Matsutake', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Angels\' Wings', 'genus': 'Pleurocybella', 'species': 'Porrigens'},	{ 'commonName': 'Anise-Scented', 'genus': 'Clitocybe', 'species': 'Odora'},	{ 'commonName': 'Apricot Jelly Mushroom', 'genus': 'Phlogiotis', 'species': 'Helvelloides'},	{ 'commonName': 'Aspen Scaber Stalk', 'genus': 'Leccinum', 'species': 'Insigne'},	{ 'commonName': 'Bare-Toothed Russula', 'genus': 'Russula', 'species': 'Vesca'},	{ 'commonName': 'Barrow\'s Bolete', 'genus': 'Boletus', 'species': 'Barrowsii'},	{ 'commonName': 'Bay Bolete', 'genus': 'Boletus', 'species': 'Badius'},	{ 'commonName': 'Bear\'s Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Belly-Button Mushroom', 'genus': 'Hydnum', 'species': 'Umbilicatum'},	{ 'commonName': 'Black Chanterelle', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Black Forest Mushroom', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Black Fungus', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Black Kame', 'genus': 'Terfezia', 'species': 'Bouderi'},	{ 'commonName': 'Black Saddle Mushroom', 'genus': 'Helvella', 'species': 'Lacunosa'},	{ 'commonName': 'Blackening Russula', 'genus': 'Russula', 'species': 'Nigricans'},	{ 'commonName': 'Bleeding Agaricus', 'genus': 'Agaricus', 'species': 'Fuscofibrillosus Haemorrhoidarius'},	{ 'commonName': 'Bleeding Milky Cap', 'genus': 'Lactarius', 'species': 'Rubrilacteus'},	{ 'commonName': 'Blewit', 'genus': 'Lepista', 'species': 'Nuda'},	{ 'commonName': 'Blue Milky Cap', 'genus': 'Lactarius', 'species': 'Indigo'},	{ 'commonName': 'Bracelet Cortinarius', 'genus': 'Cortinarius', 'species': 'Armillatus'},	{ 'commonName': 'Brown Kame', 'genus': 'Terfezia', 'species': 'Claveryi'},	{ 'commonName': 'Butter Bolete', 'genus': 'Boletus', 'species': 'Appendiculatus'},	{ 'commonName': 'Butter Mushroom', 'genus': 'Pholiota', 'species': 'Aurivella'},	{ 'commonName': 'Button Mushroom', 'genus': 'Agaricus', 'species': 'Brunnescens'},	{ 'commonName': 'Candy Cap', 'genus': 'Lactarius', 'species': 'Fragilis'},	{ 'commonName': 'Cauliflower Mushroom', 'genus': 'Sparassis', 'species': 'Crispa'},	{ 'commonName': 'Cèpe', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Charcoal Burner', 'genus': 'Russula', 'species': 'Cyanoxantha'},	{ 'commonName': 'Chicken Of The Woods', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Cinnabar-Red Chanterelle', 'genus': 'Cantharellus', 'species': 'Cinnabarinus'},	{ 'commonName': 'Cloud Ear Mushroom', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'Clustered Blue Chanterelle', 'genus': 'Polyozellus', 'species': 'Multiplex'},	{ 'commonName': 'Comb Tooth Mushroom', 'genus': 'Hericium', 'species': 'Ramosum'},	{ 'commonName': 'Commercial Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Common Store Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Coral Hericium', 'genus': 'Hericium', 'species': 'Coralloides'},	{ 'commonName': 'Crocodile Agaricus', 'genus': 'Agaricus', 'species': 'Crocodilinus'},	{ 'commonName': 'Death Cap', 'genus': 'Amanita', 'species': 'Phalloides'},	{ 'commonName': 'Delicious Milky Cap', 'genus': 'Lactarius', 'species': 'Deliciosus'},	{ 'commonName': 'Dotted-Stalk Suillus', 'genus': 'Suillus', 'species': 'Granulatus'},	{ 'commonName': 'Drumstick Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Egg Mushroom', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Enoki', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Fairy-Ring Mushroom', 'genus': 'Marasmius', 'species': 'Oreades'},	{ 'commonName': 'Fawn Mushroom', 'genus': 'Pluteus', 'species': 'Cervinus'},	{ 'commonName': 'Field Or Meadow Mushroom', 'genus': 'Agaricus', 'species': 'Campestris'},	{ 'commonName': 'Fragrant Clitocybe', 'genus': 'Clitocybe', 'species': 'Fragrans'},	{ 'commonName': 'French Black Truffle', 'genus': 'Tuber', 'species': 'Melanosporum'},	{ 'commonName': 'Garlic Marasmius', 'genus': 'Marasmius', 'species': 'Scorodonius'},	{ 'commonName': 'Golden Chanterelle', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Golden Needle', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Green-Spored Parasol', 'genus': 'Lepiota', 'species': 'Molybdites'},	{ 'commonName': 'Green-Spored Parasol Mushroom', 'genus': 'Chlorophyllum', 'species': 'Molybdites'},	{ 'commonName': 'Gypsy Mushroom', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Hedgehog Mushroom', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Hen Of The Woods', 'genus': 'Polypilus', 'species': 'Frondosa'},	{ 'commonName': 'Honey Or Oak Mushroom', 'genus': 'Armillaria', 'species': 'Mellea'},	{ 'commonName': 'Horn Of Plenty', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Horse Mushroom', 'genus': 'Agaricus', 'species': 'Arvensis'},	{ 'commonName': 'Inky Cap', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Italian White Truffle', 'genus': 'Tuber', 'species': 'Magnatum'},	{ 'commonName': 'Judas\' Ear', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'King Bolete', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Lawyer\'S Wig', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Man On Horseback', 'genus': 'Tricholoma', 'species': 'Flavovirens Equestre'},	{ 'commonName': 'Manzanita Scaber Stalk', 'genus': 'Leccinum', 'species': 'Manzanitae'},	{ 'commonName': 'Matsutake', 'genus': 'Armillaria', 'species': 'Matsutake'},	{ 'commonName': 'Mica Cap', 'genus': 'Coprinus', 'species': 'Micaceus'},	{ 'commonName': 'Monkey Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Morel', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Nameko', 'genus': 'Pholiota', 'species': 'Nameko'},	{ 'commonName': 'Old Man Of The Woods', 'genus': 'Strobilomyces', 'species': 'Confusus'},	{ 'commonName': 'Orange-Capped Scaber Stalk', 'genus': 'Leccinum', 'species': 'Aurantiacum'},	{ 'commonName': 'Oregon White Truffle', 'genus': 'Tuber', 'species': 'Gibbosum'},	{ 'commonName': 'Oyster Mushroom', 'genus': 'Pleurotus', 'species': 'Ostreatus'},	{ 'commonName': 'Paddy Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Painted Suillus', 'genus': 'Suillus', 'species': 'Pictus'},	{ 'commonName': 'Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Procera'},	{ 'commonName': 'Peck', 'genus': 'Agaricus', 'species': 'Rodmanii'},	{ 'commonName': 'Pig\'s Ear', 'genus': 'Gomphus', 'species': 'Clavatus'},	{ 'commonName': 'Pine Mushroom', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Pom-Pom', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Porcini', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Puffball', 'genus': 'Calvatia', 'species': 'Gigantea'},	{ 'commonName': 'Red-Tipped Coral Mushroom', 'genus': 'Ramaria', 'species': 'Botrytis'},	{ 'commonName': 'Regal Bolete', 'genus': 'Boletus', 'species': 'Regius'},	{ 'commonName': 'Russula Like Waxy Cap', 'genus': 'Hygrophorus', 'species': 'Russula'},	{ 'commonName': 'Salt-Loving Mushroom', 'genus': 'Agaricus', 'species': 'Bernardii'},	{ 'commonName': 'Scaber Stalk', 'genus': 'Leccinum', 'species': 'Scaber'},	{ 'commonName': 'Shaggy Mane', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Shaggy Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Shellfish-Scented Russula', 'genus': 'Russula', 'species': 'Xerampelina'},	{ 'commonName': 'Shiitake', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Short-Stalked Slippery Cap', 'genus': 'Suillus', 'species': 'Brevipes'},	{ 'commonName': 'Short-Stem Russula', 'genus': 'Russula', 'species': 'Delica'},	{ 'commonName': 'Silver Ear Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Smooth Chanterelle', 'genus': 'Cantharellus', 'species': 'Lateritius'},	{ 'commonName': 'Snow Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Snowbank False Morel', 'genus': 'Gyromitra', 'species': 'Gigas'},	{ 'commonName': 'Sponge', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Spring Agaricus', 'genus': 'Agaricus', 'species': 'Bitorquis'},	{ 'commonName': 'Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Summer Truffle', 'genus': 'Tuber', 'species': 'Aestivum'},	{ 'commonName': 'Sweet Tooth', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Sweetbread Mushroom', 'genus': 'Clitopilus', 'species': 'Prunulus'},	{ 'commonName': 'Tacky Green Russula', 'genus': 'Russula', 'species': 'Aeruginea'},	{ 'commonName': 'Texas White Truffle', 'genus': 'Tuber', 'species': 'Texensis'},	{ 'commonName': 'The Prince', 'genus': 'Agaricus', 'species': 'Augustus'},	{ 'commonName': 'Tree Ear', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Tricholoma Magnivelare', 'genus': 'Armillaria', 'species': 'Ponderosa'},	{ 'commonName': 'Trumpet Chanterelle', 'genus': 'Cantharellus', 'species': 'Tubaeformis'},	{ 'commonName': 'Trumpet Of Death', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Two-Colored Bolete', 'genus': 'Boletus', 'species': 'Bicolor'},	{ 'commonName': 'Umbrella Polypore', 'genus': 'Polyporus', 'species': 'Umbellatus'},	{ 'commonName': 'Variant Of B. Edulis', 'genus': 'Boletus', 'species': 'Pinicola'},	{ 'commonName': 'Velvet Foot', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'White Chanterelle', 'genus': 'Cantharellus', 'species': 'Subalbidus'},	{ 'commonName': 'White Jelly Fungus', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Wine-Cap Stropharia', 'genus': 'Stropharia', 'species': 'Rugosoannulata'},	{ 'commonName': 'Winter Mushroom', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Wood Ear Mushroom', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Zeller\'s Bolete', 'genus': 'Boletus', 'species': 'Zelleri'}];

const GOOGLEMAPS_API_KEY = 'AIzaSyABVyjzmdlA8yrWGI73K62cMmqo5_bw7rs';

let MOCK_OBSERVATIONS = { "observations": [
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
		"notes": {
			"mushroom": "pretty pretty mushroom",
			"location": "ugly trees"
		},
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
		"id": 44444444,
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

const OBSERVATION_FORM = `
<form enctype="multipart/form-data" method="post" id="new-observation">
<input type="hidden" name="id"> 
	<div  class="area">
		<div>
			<h3>Images</h3>
			<button onclick="uploadFile(event)">Select Images</button>
			<input onchange="receiveFiles(event)" id="file-input" name="file-input" type="file" accept="image/*" style="display:none;" multiple>
			<div class="img-preview">
			</div>
		</div>
		<div>
			<h3>Date Observed</h3>
			<label>
					<span class="label">Date</span>
					<input name="obsDate" id="obs-date-input" type="date">
			</label>
			<label>
					<span class="label">Time</span>
					<input name="obsTime" id="obs-time-input" type="time">
			</label>
		</div>
	</div>
	<div class="area">
		<h3>Classification</h3>
		<p>
			<label>
				<span class="label">Nickname</span>
				<input name="nickname" type="text" placeholder="Nickname">
			</label>
		</p>
		<p>
			<label>
				<span class="label">Common Name</span>
				<datalist id="commonName-datalist"></datalist>
				<input name="commonName" id="common-name-input" onchange="populateNames(event)" type="text" placeholder="Common Name" list="commonName-datalist">
			</label>
			<label>
				<span class="label">Identification Confidence</span>
				<input name="confidence" type="radio" value="1">
				<input name="confidence" type="radio" value="2">
				<input name="confidence" type="radio" value="3">
				<input name="confidence" type="radio" value="4">
				<input name="confidence" type="radio" value="5">
			</label>
		</p>
		<label>
			<span class="label">genus</span>
			<datalist id="genus-datalist"></datalist>
			<input name="genus" id="genus-input" type="text" list="genus-datalist">
		</label>
		<label>
			<span class="label">species</span>
			<datalist id="species-datalist"></datalist>
			<input name="species" id="species-input" type="text" list="species-datalist">
		</label>
		<a class="toggle-control" onclick="reveal('.mushroom.notes', event)">Mushroom Notes</a>
		<div class="mushroom notes reveal">
			<textarea name="mushroomNotes"  placeholder="Mushroom Notes"></textarea>
		</div>
	</div>
	<div class="area">
		<h3>Location:</h3>
		<div id="location-options" class="loc-opts">
			<div>
				<span id="location-text" class="label"></span>
			</div>
			<div class="loc-method">
				<label>
					<span class="label">Address</span>
					<input name="address" id="address-input" type="text" placeholder="Address">
				</label>
			</div>
			<div id="latlng" class="loc-method">
				<label>
					<span class="label">Latitude</span>
					<input id="lat-input" name="lat" class="coord" type="number" placeholder="Lat">
				</label>
				<label>
					<span class="label">Longitude</span>
					<input id="lng-input" name="lng" class="coord" type="number" placeholder="Long">
				</label>
			</div>
			<div id="geolocation" class="loc-method">
				<input type="button" onclick="geolocate(event)" value="Use Current Location"></input>
			</div>
			<a class="toggle-control" onclick="reveal('.location.notes', event)">Location Notes</a>
			<div class="location notes reveal">
				<textarea name="locationNotes" rows="5" placeholder="Location Notes"></textarea>
			</div>
		</div>
	</div>
	<div class="area">
		<h3>Habitat</h3>
		<div class="habitat-details">
			<label>
				<input type="checkbox" value="Deciduous Woodlot">Deciduous Woodlot</label>
			<label>
				<input type="checkbox" value="Coniferous Woodlot">Coniferous Woodlot</label>
			<label>
				<input type="checkbox" value="Mixed Woodlot">Mixed Woodlot</label>
			<label>
				<input type="checkbox" value="Grassland">Grassland</label>
			<label>
				<input type="checkbox" value="On Wood">On Wood</label>
			<label>
				<input type="checkbox" value="Leaf Litter">Leaf Litter</label>
			<label>
				<input type="checkbox" value="On Soil">On Soil</label>
			<label>
				<input type="checkbox" value="Swamp / Bog">Swamp / Bog</label>
		</div>
		<a class="toggle-control" onclick="reveal('.habitat.notes', event)">Habitat Notes</a>
		<div class="habitat notes reveal">
			<textarea name="habitatNotes" rows="5" placeholder="Habitat Notes"></textarea>
		</div>
	</div>
</form>
`;


function displaySection (sec) {
	const secs = document.querySelectorAll('section');
	for (let el of secs) el.classList.add('hidden');
	document.querySelector(sec).classList.remove('hidden');
}

function reveal(selector, event) {
	document.querySelector(selector).classList.toggle('reveal');
	event.currentTarget.classList.toggle('visible'); 
}

function updateAddress (addressString) {
	document.querySelector('#address-input').setAttribute('value', addressString);
}

function geolocate(event) {
	navigator.geolocation.getCurrentPosition((position) => {
		const coords = {'lat': position.coords.latitude, 'lng': position.coords.longitude};
		const obs = {'location': coords};
		getAddress(obs, function(obs, addressString) {
			updateValue('lat', position.coords.latitude);
			updateValue('lng', position.coords.longitude);			
			updateValue('address', addressString);
			updateExif('Location taken from current location');
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
	const locText = document.querySelector('#location-text');
	locText.innerHTML = string;
	if (status) {
		if (status === "error") locText.classList.add('error')
		else locText.classList.remove('error');
	};
}

function populateNames (event) {
	const inputName = event.target.attributes.name.value;
	const inputValue = event.target.value;
	for (let i = 0; i < MUSHROOMS.length; i++) {
		if (inputValue == MUSHROOMS[i][inputName]) {
			let { commonName, genus, species } = MUSHROOMS[i];
			updateValue('commonName', commonName);
			updateValue('genus', genus);
			updateValue('species', species);
		};
	};
}

function uploadFile (event) {
	event.preventDefault();
	document.querySelector("#file-input").click();
}

function receiveFiles (event) {
	event.preventDefault();
	const files = event.target.files;
	const file = files[0];
	for(let i=0; i<files.length; i++) {
		previewFile(files[i]);
	};
	exifFromFile(file);
}

function deleteFile(event) {
	event.preventDefault();
	const fileName = event.currentTarget.dataset.filename;
	const target = document.getElementById(`${fileName}-div`);
	target.parentNode.removeChild(target);
	console.log('need to delete AWS.S3 file');
}

function previewFile(file) {
	const fileName = file.name;
	const reader  = new FileReader();
	const newImg = `
	<div id="${fileName}-div" class="thumb-div">
		<a class="delete-img-action" onclick="deleteFile(event)" data-filename="${fileName}" title="Remove Image" alt="Remove Image">X</a>
		<img src="media/loading.gif" id="${fileName}-thumb" class="thumb-img" alt="Thumbnail for ${fileName}" title="Thumbnail for ${fileName}">
		<p class="label">${fileName}</p>
	</div>
			`;
	const thumbDiv = document.querySelector('.img-preview');
	thumbDiv.innerHTML += newImg;
	reader.onloadend = function (event) {
		// thumbDiv.firstChild
		// const previewDiv = document.getElementsByClassName('loading-thumb')[0];
		// const previewImg = previewDiv.getElementsByTagName('img')[0];
		// console.log(fileName);
		const previewImg = document.getElementById(`${fileName}-thumb`);
		previewImg.src = event.target.result;
		// previewDiv.classList.remove('loading-thumb');
	};
	reader.readAsDataURL(file);
  }


function ALTpreviewFile(file) {
	const fileName = file.name;
	const reader = new FileReader();
	const newImg = `
	<div id="${fileName}-div" class="thumb-div">
		<a class="delete-img-action" onclick="deleteFile(event)" data-filename="${fileName}" title="Remove Image" alt="Remove Image">X</a>
		<img src="media/loading.gif" id="${fileName}-thumb" class="thumb-img" alt="Thumbnail for ${fileName}" title="Thumbnail for ${fileName}">
		<p class="label">${fileName}</p>
	</div>
	`;
	const thumbDiv = document.querySelector('.img-preview');
	thumbDiv.innerHTML += newImg;
	reader.onloadend = function (event) {
		document.querySelector(`#${fileName}-thumb`).src = event.target.result;
	};
	reader.readAsDataURL(file);
}


function OLDpreviewFile(file) {
	const fileName = file.name;
	const reader  = new FileReader();
	reader.onloadend = function (event) {
		console.log (event);
		const src = event.target.result;		
		const newImg = `
			<div id="${fileName}-div" class="thumb-div">
				<a class="delete-img-action" onclick="deleteFile(event)" data-filename="${fileName}" title="Remove Image" alt="Remove Image">X</a>
				<img src="${src}" id="${fileName}-thumb" class="thumb-img" alt="Thumbnail for ${fileName}" title="Thumbnail for ${fileName}">
				<p class="label">${fileName}</p>
			</div>
				`;
		const thumbDiv = document.querySelector('.img-preview');
		thumbDiv.innerHTML += newImg;
	};
	reader.readAsDataURL(file);
  }

function exifFromFile (file) {
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
				getAddress(obs, function (obs, addressString) {
					updateValue('obsDate', obsDate);
					updateValue('obsTime', obsTime);
					updateValue('lat', coords.lat);
					updateValue('lng', coords.lng);
					updateExif("Location extracted from '" + file.name + "'.", "no error");
					updateValue('address', addressString);
				});
			} else {
				updateExif("No EXIF data found in '" + file.name + "'.", "error");
			};
		});
	};
}

function annimateObservation(event) {
	const id = event.attributes.value;
	const startRect = event.getBoundingClientRect();
	const viewSection = document.querySelector('section#view-observation');
	const startContent = event.innerHTML;
	const startBox = `
		id="observation-detail";
		value="${id}";`;
	viewSection.innerHTML = `<div ${startBox}>${startContent}</div>`;
	let observationDiv = document.querySelector('#observation-detail');
	
	requestAnimationFrame(() => {
		observationDiv.setAttribute("style", "transition: all .5s ease-in-out; position:fixed; top:" + startRect.y + "px; left:" + startRect.x + "px; width:" + startRect.width + "px; height:" + startRect.height + "px; background-color: white;");
		viewSection.classList.add('popup');
		observationDiv.classList.add('observationBox');
		viewSection.classList.remove('hidden');
		viewSection.addEventListener('click', () => {
			viewSection.classList.remove('popup');
			viewSection.classList.add('hidden');
		});
		requestAnimationFrame(() => {
			observationDiv.removeAttribute("style");
			observationDiv.querySelector('img').classList.add('obs-img');
		});
	});
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
		let addressString;
		if (results) { addressString = results[1].formatted_address; }
		else { addressString = ""; }
		callback(obs, addressString);	});
}

function newObservation () {
	const newObs = 'section.new.observation';
	const submitBtn = '<button onclick="submitNewObservation(event)">Submit New Observation</button>'
	document.querySelector(newObs).innerHTML = "<h2>Add New Observation</h2>" + OBSERVATION_FORM + submitBtn;
	populateDatalists();
	displaySection('.new.observation');
}

const objFromIterator = (iterator) => {
    const obj = {};
    for(let [key, val] of iterator)
        obj[key] = val;
    return obj;
}

function saveObservation (event) {
	event.preventDefault();
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form); 
	const entries = formData.entries();
	let formObj = objFromIterator(entries);	
	document.querySelector('section.edit.observation').innerHTML = "";
	updateObservation (formObj);
}

function dateFromDateTime(date, time) {
    var combined = new Date(date + ' ' + time);
    return combined;
};

function submitNewObservation (event) {
	event.preventDefault();
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form); 
	const entries = formData.entries();
	let formObj = objFromIterator(entries);
	formObj.pubDate = new Date()
	formObj.id = Math.floor(Math.random() * 90000000) + 10000000;
	document.querySelector('section.new.observation').innerHTML = "";
	publishNewObservation (formObj);
}

function updateObservation (formObj) {
	const arr = MOCK_OBSERVATIONS.observations;
	const obs = mockSerialize(formObj);
	for (let i in arr) {
		if (arr[i].id === obs.id) arr[i] = obs;
	};
	getAndDisplayObservations();
}
function publishNewObservation (formObj) {
	const obs = mockSerialize(formObj);
	MOCK_OBSERVATIONS.observations.push(obs);
	getAndDisplayObservations();
}

function mockSerialize (formObj) {
	formObj.obsDate = dateFromDateTime(formObj.obsDate, formObj.obsTime);
	const obsObj = {
			"id": Number(formObj.id),
			"fungi": {
				"nickname": formObj.nickname,
				"commonName": formObj.commonName,
				"genus":	formObj.genus,
				"species":	formObj.species,
				"confidence": Number(formObj.confidence)
			},
			"location": {
				"address": formObj.address,
				"lat": Number(formObj.lat),
				"lng": Number(formObj.lng)
			},
			"notes": {
				"mushroom": formObj.mushroomNotes,
				"habitat": formObj.habitatNotes,
				"location": formObj.location
			},
			"obsDate": formObj.obsDate,
			"pubDate": formObj.pubDate
			// "photos": 
		};
	return obsObj;
}

function editObservation(event, obsId) {
	const header = "<h2>Edit Observation</h2>"
	const submitBtn = '<button onclick="saveObservation(event)">Save Observation</button>'
	document.querySelector('.edit.observation').innerHTML = header + OBSERVATION_FORM + submitBtn;

	getObservation(obsId, (obs) => {
		const {id, fungi, location, notes, photos} = obs;
		const {commonName, genus, species, nickname, confidence} = fungi;
		const {lat, lng, address} = location;
		const mushroomNotes = notes.mushroom,
			habitatNotes = notes.habitat,
			locationNotes = notes.location;
		const obsTime = new Date(obs.obsDate);
		const obsDate = obsTime;
		const possibleNames = {id, obsDate, obsTime, commonName, genus, species, nickname, lat, lng, mushroomNotes, locationNotes, habitatNotes, confidence, address};
		for (let n in possibleNames) if (possibleNames[n]) updateValue(n, possibleNames[n]);
		populateDatalists();
		displaySection('.edit.observation');
	})
}

 function renderObservation(obs, address) {
	const obsDate = new Date(obs.obsDate);
	let obsRender = `<a class="edit-button" onclick="editObservation(event, ${obs.id})">Edit</a><div class="obs-list-item" value='${obs.id}' onclick="viewObservation(this)">`;
		if (obs.photos) obsRender += `<img class="obs-thumb" src="${obs.photos[0]}">`;
		else obsRender += `<img class="obs-thumb" src="media/mushroom.png">`;
		if (obs.fungi.nickname) obsRender += 
			`<span class="title"><span class="label">nickname: </span>${obs.fungi.nickname}</span>`;
		if (obs.fungi.commonName) obsRender += 
			`<span class="title"><span class="label">common name: </span>${obs.fungi.commonName}</span>`;
		if (obs.fungi.genus) obsRender += 
			`<span class="fungi"><span class="label">genus: </span>${obs.fungi.genus} 
			<span class="label">species: </span>${obs.fungi.species}</span><span>`;
		if (obs.obsDate) obsRender += 
			`<span class="fungi"><span class="label">observed </span>${obsDate.toDateString()} 
			<span class="label">around </span><span id="list-address">${address}</span></span>`;
		obsRender += `</div>`
		document.querySelector('#obs-list').innerHTML += obsRender;
}

function getObservations(callback) {
	setTimeout(function(){ callback(MOCK_OBSERVATIONS)}, 100);
}

function displayObservations(res) {
	const observations = res.observations;
	for(let obs of observations) {
		if (obs.location.lat && obs.location.lng) getAddress(obs, renderObservation);
		else renderObservation(obs, "Unknown Location");
	};
	displaySection('.observations');
}

function getAndDisplayObservations() {
	// clear out old observations
	document.querySelector('#obs-list').innerHTML = "";
    getObservations(displayObservations);
}

function updateValue(name, value) {
	const target = document.querySelector(`[name="${name}"]`);
	target.setAttribute('value', value);
}

function update(target, content) {
	document.querySelector(target).innerHTML = content;
}

function populateDatalists() {
	const datalists = ['commonName',
						// 'genus',
						// 'species'
					];
	for (let datalist of datalists) {
		let options = "";
		for (let mush of MUSHROOMS) {
			const thisName = mush[datalist];
			options += `<option value="${thisName}">`;
		};
		update(`#${datalist}-datalist`, options);
	};
}

// document.querySelectorAll("button").onclick = function(event) {
// 	event.preventDefault();
//   }

window.onload = function() {
	getAndDisplayObservations();
}