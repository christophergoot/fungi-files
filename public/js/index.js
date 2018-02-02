'use strict'

const MUSHROOMS = [{ 'commonName': 'Aborted Entoloma', 'genus': 'Entoloma', 'species': 'Abortivum'},	{ 'commonName': 'Admirable Bolete', 'genus': 'Boletus', 'species': 'Mirabilis'},	{ 'commonName': 'Alcohol Inky Cap', 'genus': 'Coprinus', 'species': 'Atramentarius'},	{ 'commonName': 'American Matsutake', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Angels\' Wings', 'genus': 'Pleurocybella', 'species': 'Porrigens'},	{ 'commonName': 'Anise-Scented', 'genus': 'Clitocybe', 'species': 'Odora'},	{ 'commonName': 'Apricot Jelly Mushroom', 'genus': 'Phlogiotis', 'species': 'Helvelloides'},	{ 'commonName': 'Aspen Scaber Stalk', 'genus': 'Leccinum', 'species': 'Insigne'},	{ 'commonName': 'Bare-Toothed Russula', 'genus': 'Russula', 'species': 'Vesca'},	{ 'commonName': 'Barrow\'s Bolete', 'genus': 'Boletus', 'species': 'Barrowsii'},	{ 'commonName': 'Bay Bolete', 'genus': 'Boletus', 'species': 'Badius'},	{ 'commonName': 'Bear\'s Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Belly-Button Mushroom', 'genus': 'Hydnum', 'species': 'Umbilicatum'},	{ 'commonName': 'Black Chanterelle', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Black Forest Mushroom', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Black Fungus', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Black Kame', 'genus': 'Terfezia', 'species': 'Bouderi'},	{ 'commonName': 'Black Saddle Mushroom', 'genus': 'Helvella', 'species': 'Lacunosa'},	{ 'commonName': 'Blackening Russula', 'genus': 'Russula', 'species': 'Nigricans'},	{ 'commonName': 'Bleeding Agaricus', 'genus': 'Agaricus', 'species': 'Fuscofibrillosus Haemorrhoidarius'},	{ 'commonName': 'Bleeding Milky Cap', 'genus': 'Lactarius', 'species': 'Rubrilacteus'},	{ 'commonName': 'Blewit', 'genus': 'Lepista', 'species': 'Nuda'},	{ 'commonName': 'Blue Milky Cap', 'genus': 'Lactarius', 'species': 'Indigo'},	{ 'commonName': 'Bracelet Cortinarius', 'genus': 'Cortinarius', 'species': 'Armillatus'},	{ 'commonName': 'Brown Kame', 'genus': 'Terfezia', 'species': 'Claveryi'},	{ 'commonName': 'Butter Bolete', 'genus': 'Boletus', 'species': 'Appendiculatus'},	{ 'commonName': 'Butter Mushroom', 'genus': 'Pholiota', 'species': 'Aurivella'},	{ 'commonName': 'Button Mushroom', 'genus': 'Agaricus', 'species': 'Brunnescens'},	{ 'commonName': 'Candy Cap', 'genus': 'Lactarius', 'species': 'Fragilis'},	{ 'commonName': 'Cauliflower Mushroom', 'genus': 'Sparassis', 'species': 'Crispa'},	{ 'commonName': 'Cèpe', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Charcoal Burner', 'genus': 'Russula', 'species': 'Cyanoxantha'},	{ 'commonName': 'Chicken Of The Woods', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Cinnabar-Red Chanterelle', 'genus': 'Cantharellus', 'species': 'Cinnabarinus'},	{ 'commonName': 'Cloud Ear Mushroom', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'Clustered Blue Chanterelle', 'genus': 'Polyozellus', 'species': 'Multiplex'},	{ 'commonName': 'Comb Tooth Mushroom', 'genus': 'Hericium', 'species': 'Ramosum'},	{ 'commonName': 'Commercial Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Common Store Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus'},	{ 'commonName': 'Coral Hericium', 'genus': 'Hericium', 'species': 'Coralloides'},	{ 'commonName': 'Crocodile Agaricus', 'genus': 'Agaricus', 'species': 'Crocodilinus'},	{ 'commonName': 'Death Cap', 'genus': 'Amanita', 'species': 'Phalloides'},	{ 'commonName': 'Delicious Milky Cap', 'genus': 'Lactarius', 'species': 'Deliciosus'},	{ 'commonName': 'Dotted-Stalk Suillus', 'genus': 'Suillus', 'species': 'Granulatus'},	{ 'commonName': 'Drumstick Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Egg Mushroom', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Enoki', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Fairy-Ring Mushroom', 'genus': 'Marasmius', 'species': 'Oreades'},	{ 'commonName': 'Fawn Mushroom', 'genus': 'Pluteus', 'species': 'Cervinus'},	{ 'commonName': 'Field Or Meadow Mushroom', 'genus': 'Agaricus', 'species': 'Campestris'},	{ 'commonName': 'Fragrant Clitocybe', 'genus': 'Clitocybe', 'species': 'Fragrans'},	{ 'commonName': 'French Black Truffle', 'genus': 'Tuber', 'species': 'Melanosporum'},	{ 'commonName': 'Garlic Marasmius', 'genus': 'Marasmius', 'species': 'Scorodonius'},	{ 'commonName': 'Golden Chanterelle', 'genus': 'Cantharellus', 'species': 'Cibarius'},	{ 'commonName': 'Golden Needle', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Green-Spored Parasol', 'genus': 'Lepiota', 'species': 'Molybdites'},	{ 'commonName': 'Green-Spored Parasol Mushroom', 'genus': 'Chlorophyllum', 'species': 'Molybdites'},	{ 'commonName': 'Gypsy Mushroom', 'genus': 'Rozites', 'species': 'Caperata'},	{ 'commonName': 'Hedgehog Mushroom', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Hen Of The Woods', 'genus': 'Polypilus', 'species': 'Frondosa'},	{ 'commonName': 'Honey Or Oak Mushroom', 'genus': 'Armillaria', 'species': 'Mellea'},	{ 'commonName': 'Horn Of Plenty', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Horse Mushroom', 'genus': 'Agaricus', 'species': 'Arvensis'},	{ 'commonName': 'Inky Cap', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Italian White Truffle', 'genus': 'Tuber', 'species': 'Magnatum'},	{ 'commonName': 'Judas\' Ear', 'genus': 'Auricularia', 'species': 'Auricula'},	{ 'commonName': 'King Bolete', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Lawyer\'S Wig', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Man On Horseback', 'genus': 'Tricholoma', 'species': 'Flavovirens Equestre'},	{ 'commonName': 'Manzanita Scaber Stalk', 'genus': 'Leccinum', 'species': 'Manzanitae'},	{ 'commonName': 'Matsutake', 'genus': 'Armillaria', 'species': 'Matsutake'},	{ 'commonName': 'Mica Cap', 'genus': 'Coprinus', 'species': 'Micaceus'},	{ 'commonName': 'Monkey Head', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Morel', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Nameko', 'genus': 'Pholiota', 'species': 'Nameko'},	{ 'commonName': 'Old Man Of The Woods', 'genus': 'Strobilomyces', 'species': 'Confusus'},	{ 'commonName': 'Orange-Capped Scaber Stalk', 'genus': 'Leccinum', 'species': 'Aurantiacum'},	{ 'commonName': 'Oregon White Truffle', 'genus': 'Tuber', 'species': 'Gibbosum'},	{ 'commonName': 'Oyster Mushroom', 'genus': 'Pleurotus', 'species': 'Ostreatus'},	{ 'commonName': 'Paddy Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Painted Suillus', 'genus': 'Suillus', 'species': 'Pictus'},	{ 'commonName': 'Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Procera'},	{ 'commonName': 'Peck', 'genus': 'Agaricus', 'species': 'Rodmanii'},	{ 'commonName': 'Pig\'s Ear', 'genus': 'Gomphus', 'species': 'Clavatus'},	{ 'commonName': 'Pine Mushroom', 'genus': 'Tricholoma', 'species': 'Magnivelare'},	{ 'commonName': 'Pom-Pom', 'genus': 'Hericium', 'species': 'Erinaceus'},	{ 'commonName': 'Porcini', 'genus': 'Boletus', 'species': 'Edulis'},	{ 'commonName': 'Puffball', 'genus': 'Calvatia', 'species': 'Gigantea'},	{ 'commonName': 'Red-Tipped Coral Mushroom', 'genus': 'Ramaria', 'species': 'Botrytis'},	{ 'commonName': 'Regal Bolete', 'genus': 'Boletus', 'species': 'Regius'},	{ 'commonName': 'Russula Like Waxy Cap', 'genus': 'Hygrophorus', 'species': 'Russula'},	{ 'commonName': 'Salt-Loving Mushroom', 'genus': 'Agaricus', 'species': 'Bernardii'},	{ 'commonName': 'Scaber Stalk', 'genus': 'Leccinum', 'species': 'Scaber'},	{ 'commonName': 'Shaggy Mane', 'genus': 'Coprinus', 'species': 'Comatus'},	{ 'commonName': 'Shaggy Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes'},	{ 'commonName': 'Shellfish-Scented Russula', 'genus': 'Russula', 'species': 'Xerampelina'},	{ 'commonName': 'Shiitake', 'genus': 'Lentinus', 'species': 'Edodes'},	{ 'commonName': 'Short-Stalked Slippery Cap', 'genus': 'Suillus', 'species': 'Brevipes'},	{ 'commonName': 'Short-Stem Russula', 'genus': 'Russula', 'species': 'Delica'},	{ 'commonName': 'Silver Ear Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Smooth Chanterelle', 'genus': 'Cantharellus', 'species': 'Lateritius'},	{ 'commonName': 'Snow Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Snowbank False Morel', 'genus': 'Gyromitra', 'species': 'Gigas'},	{ 'commonName': 'Sponge', 'genus': 'Morchella', 'species': 'Esculenta'},	{ 'commonName': 'Spring Agaricus', 'genus': 'Agaricus', 'species': 'Bitorquis'},	{ 'commonName': 'Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea'},	{ 'commonName': 'Summer Truffle', 'genus': 'Tuber', 'species': 'Aestivum'},	{ 'commonName': 'Sweet Tooth', 'genus': 'Hydnum', 'species': 'Repandum'},	{ 'commonName': 'Sweetbread Mushroom', 'genus': 'Clitopilus', 'species': 'Prunulus'},	{ 'commonName': 'Tacky Green Russula', 'genus': 'Russula', 'species': 'Aeruginea'},	{ 'commonName': 'Texas White Truffle', 'genus': 'Tuber', 'species': 'Texensis'},	{ 'commonName': 'The Prince', 'genus': 'Agaricus', 'species': 'Augustus'},	{ 'commonName': 'Tree Ear', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Tricholoma Magnivelare', 'genus': 'Armillaria', 'species': 'Ponderosa'},	{ 'commonName': 'Trumpet Chanterelle', 'genus': 'Cantharellus', 'species': 'Tubaeformis'},	{ 'commonName': 'Trumpet Of Death', 'genus': 'Craterellus', 'species': 'Cornucopioides'},	{ 'commonName': 'Two-Colored Bolete', 'genus': 'Boletus', 'species': 'Bicolor'},	{ 'commonName': 'Umbrella Polypore', 'genus': 'Polyporus', 'species': 'Umbellatus'},	{ 'commonName': 'Variant Of B. Edulis', 'genus': 'Boletus', 'species': 'Pinicola'},	{ 'commonName': 'Velvet Foot', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'White Chanterelle', 'genus': 'Cantharellus', 'species': 'Subalbidus'},	{ 'commonName': 'White Jelly Fungus', 'genus': 'Tremella', 'species': 'Fuciformis'},	{ 'commonName': 'Wine-Cap Stropharia', 'genus': 'Stropharia', 'species': 'Rugosoannulata'},	{ 'commonName': 'Winter Mushroom', 'genus': 'Flammulina', 'species': 'Velutipes'},	{ 'commonName': 'Wood Ear Mushroom', 'genus': 'Auricularia', 'species': 'Polytricha'},	{ 'commonName': 'Zeller\'s Bolete', 'genus': 'Boletus', 'species': 'Zelleri'}];

const GOOGLEMAPS_API_KEY = 'AIzaSyABVyjzmdlA8yrWGI73K62cMmqo5_bw7rs';

const URL = "http://localhost:8080/observations/";

let globalFileHolder = [];

const OBSERVATION_FORM = `
<form enctype="multipart/form-data" method="post" id="new-observation">
<input type="hidden" name="id">
<input type="hidden" name="featured">
<input type="hidden" name="filesToBeDeleted">
	<div  class="area">
		<div>
			<h3>Images</h3>
			<button onclick="selectFiles(event)">Add Images</button>
			<input onchange="receiveFiles(event)" id="file-input" name="fileInput" type="file"  style="display:none;" multiple accept="image/*">
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
				<span id="location-text"></span>
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
<!--
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
	--!>
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

function selectFiles (event) {
	event.preventDefault();
	document.querySelector("#file-input").click();
}

function receiveFiles (event) {
	event.preventDefault();
	const files = event.target.files;
	for(let i=0; i<files.length; i++) {
		previewFile(files[i]);
		globalFileHolder.push(files[i]);
		exifFromFile(files[i]);
	};

}

function locationFromThumbnail(event) {
	console.log(event);

	const obs = { 'location': { 'lat': event.dataset.lat, 'lng': event.dataset.lng } }
	throw "look at obs"
	getAddress(obs, function (obs, addressString) {
		// const gpsBtn = document.getElementById(`${file.name}-gps-action`);
		// gpsBtn.setAttribute('data-lat', coords.lat);
		// gpsBtn.setAttribute('data-lng', coords.lng);

		updateValue('obsDate', obsDate);
		updateValue('obsTime', obsTime);
		updateValue('lat', coords.lat);
		updateValue('lng', coords.lng);
		updateExif("Location extracted from '" + file.name + "'.", "no error");
		updateValue('address', addressString);
	});
}

function deleteFileUponSave (id,filename) {
// look in input - files to be deleted
	// delete from AWS and mongo
	fetch(`${URL}${id}/${filename}`, {
		method: 'DELETE',
		headers: {'Content-Type': 'application/json'}
	}).then((res) => console.log(res) );
}

function deleteFile(event) {
	event.preventDefault();
	const {filename} = event.currentTarget.dataset;
	const target = document.getElementById(`${filename}-div`);
	const {src} = target.firstElementChild;
	// logic to deterine if new file or existing by looking at url
	if (src.substring(0, 4) === 'http') {
		// existing file, mark for later deletion
		const target = document.getElementsByName("filesToBeDeleted")[0];
		target.setAttribute.value += ',' + filename;
	}
	else {
		// new file, remove from globalFileHolder
		for(let i in globalFileHolder) {
			if (globalFileHolder[i].name === filename) globalFileHolder.splice(i,1);
		}
	}
	// delete thumbnail
	target.parentNode.removeChild(target);
}

function insertThumbnailStructure(filename) {
	const newImg = `
	<div id="${filename}-div" class="thumb-div">
		<img src="media/loading.gif" id="${filename}-thumb" class="thumb-img" alt="Thumbnail for ${filename}" title="Thumbnail for ${filename}">
		<input type="image" src="/media/delete.png" onclick="deleteFile(event)" data-filename="${filename}" alt="Remove Image" title="Remove Image" class="img-action delete">
		<input type="image" src="/media/featured.png" onclick="makeFeatured(event)" data-filename="${filename}" alt="Use as Featured Image" title="Use as Featured Image" class="img-action featured">
		<p class="label">${filename}</p>
	</div>
			`;
	const thumbDiv = document.querySelector('.img-preview');
	thumbDiv.innerHTML += newImg;
}

function makeFeatured(event) {
	const filename = event.currentTarget.dataset.filename;
	updateValue('featured', filename);
}

function previewFile(file) {
	const fileName = file.name;
	insertThumbnailStructure(fileName);
	const reader  = new FileReader();
	const featured = document.getElementsByName('featured')[0];
	reader.onloadend = function (event) {
		const previewImg = document.getElementById(`${fileName}-thumb`);
		previewImg.src = event.target.result;
		if (featured) {
			if (!featured.value) featured.value = event.target.result;
			if (featured.value === previewImg.src) previewImg.classList.add('featured-image');
		}
	};
	reader.readAsDataURL(file);

  }

function exifFromFile(file, filename) {
	if (!filename) filename = file.name;
	if (file && filename) {
		EXIF.getData(file, function () {
			if (this.exifdata.GPSLatitude) {
				let latRef = 1, lngRef = 1;
				if (this.exifdata.GPSLatitudeRef === "S") latRef = -1
				if (this.exifdata.GPSLongitudeRef === "W") lngRef = -1
				const coords = {
					'lat': toDecimal(this.exifdata.GPSLatitude) * latRef,
					'lng': toDecimal(this.exifdata.GPSLongitude) * lngRef
				};
				const str = this.exifdata.DateTime.split(" ");
				const obsDate = str[0].replace(/:/g, "-");
				const obsTime = str[1];
				const obs = { 'location': coords };
				const target = document.getElementById(`${file.name}-div`);
				const button = `<input type="image" src="/media/uselocation.png" onclick="locationFromThumbnail(event)" data-filename="${file.name}" alt="Use Image Time & Location" title="Use Image Time & Location" class="img-action location">`
				target.innerHTML += button
				// add button to thumbnail
				if (!document.getElementsByName('lat')[0].value) {
					getAddress(obs, function (obs, addressString) {
						updateValue('obsDate', obsDate);
						updateValue('obsTime', obsTime);
						updateValue('lat', coords.lat);
						updateValue('lng', coords.lng);
						updateExif("Location extracted from '" + file.name + "'.", "no error");
						updateValue('address', addressString);
					});
				}
			}
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

 function getObservation(targetId) {
	return fetch(URL + targetId, {method: 'GET'})
		.then((res) => res.json());
}

function displayObservation(obs) {
	const imageTag = `<img src="${staticMapUrl(obs.location)}" class="static-map">`;
	document.querySelector('#observation-detail').innerHTML += imageTag;


}

function staticMapUrl(latlng) {
	let url = "https://maps.googleapis.com/maps/api/staticmap?";
	url += "size=200x200";
	url += "&zoom=14";
	url += "&maptype=terrain";
	url += `&markers=${latlng.lat},${latlng.lng}`;
	url += `&key=${GOOGLEMAPS_API_KEY}`;
	return url;
}

function viewObservation(event) {
	annimateObservation(event);
	const id = event.attributes.value.value;
	// const observation = getObservation(id);
	// observation.then((obs) => {
	// })	

	getObservation(id)
		.then(res => displayObservation(res));
}

function getAddress (obs, callback) {
	const coords = {'lat': obs.location.lat, 'lng': obs.location.lng};
	const geocoder = new google.maps.Geocoder;
	geocoder.geocode({'location': coords}, function(results, status) {
		let addressString;
		if (status === "ZERO_RESULTS") {addressString = "";
		} else if (results) { 
			if (results[1]) {addressString = results[1].formatted_address;}
			else addressString = results[0].formatted_address;
		} else { addressString = ""; }
		callback(obs, addressString);	
	});
}

function newObservation () {
	const header = "<h2>Add New Observation</h2>";
	const newObs = 'section.new.observation';
	const footer = `<button onclick="submitNewObservation(event)">Submit New Observation</button>
		<button onclick="getAndDisplayObservations()">Cancel</button>`;
	document.querySelector(newObs).innerHTML = header + OBSERVATION_FORM + footer;
	globalFileHolder = [];
	populateDatalists();
	displaySection('.new.observation');
}

const objFromIterator = (iterator) => {
    const obj = {};
    for(let [key, val] of iterator)
        obj[key] = val;
    return obj;
}

function saveObservation (event, id) {
	event.preventDefault();
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');
	globalFileHolder.forEach(file => formData.append('newFiles', file));
	globalFileHolder = [];
	const fileStr = document.getElementsByName("filesToBeDeleted")[0].value;
	if (fileStr) {
		arr = fileStr.split(',');
		arr.forEach(filename => deleteFileUponSave(id,filename));
	}
	document.querySelector('section.edit.observation').innerHTML = "";
	updateObservation (id, formData);
}

function dateFromDateTime(date, time) {
    const combined = new Date(date + 'T' + time);
    return combined;
};


function loading(state: boolean, text: String) {
	if (state) {
		console.log('Loading . . . . .');
		// body = new Element('img');
		// body.src = "media/loading.gif"
		// // body.style = 
	}
	else if (!state) {
		console.log('Loading Complete.')
	}
	else console.error('State is boolean, must be either true or false');
}


function submitNewObservation (event) {
	loading('on');
	event.preventDefault();
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');
	
	globalFileHolder.forEach(file => formData.append('newFiles', file));
	globalFileHolder = [];

	document.querySelector('section.new.observation').innerHTML = "";
	return new Promise(res => {
		publishNewObservation (formData)
	})
	.then(loading('off'));
}

function updateObservation (id, formData) {
	fetch(URL + id, {
		method: 'PUT', 
		body: formData,
	})
// 	.then((res) => res.json())
	.then((res) => {
		getAndDisplayObservations();
		// console.log(`server response is ${res}`);
	})
	.catch(error => console.error('Error:', error))
}

function publishNewObservation (formData) {
	fetch(URL, {
		method: 'POST', 
		body: formData,
	})
	.then((res) => res.json())
	.then((res) => {
		getAndDisplayObservations();
	})
	.catch(error => console.error('Error:', error))
}

function getTime(date) {
	return new Promise(resolve => {
		let hour = date.getHours(),
		minute = date.getMinutes();
		if (hour.toString().length < 2) hour = `0${hour}`;
		if (minute.toString().length < 2) minute = `0${minute}`;
		resolve (`${hour}:${minute}`);
	})
}

function getDate(date) {
	return new Promise(resolve => {
		let year = date.getFullYear(),
			month = '' + (date.getMonth() + 1),
			day = '' + date.getDate();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		resolve ([year, month, day].join('-'));
	})
}

function deleteObservation(event, obsId) {
	document.querySelector('section.edit.observation').innerHTML = "";
	fetch((URL + obsId), {method: 'DELETE'})
// 		.then((res) => res.json())
		.then((res) => {
			getAndDisplayObservations();
			console.log(res);
		})
		.catch(error => console.error('Error:', error))
}


async function populateFields(obs) {
		const {id, fungi, location, notes, photos} = obs;
		const {commonName, genus, species, nickname, confidence} = fungi;
		const {lat, lng, address} = location;
		const {mushroomNotes, habitatNotes, locationNotes, speciminNotes} = notes;
		const {featured} = photos;
		// if (obs.obsDate) {
			const obsTime = await getTime(new Date(obs.obsDate));
			const obsDate = await getDate(new Date(obs.obsDate));	
		// };
		const possibleNames = {obsTime, obsDate, id, commonName, genus, species, nickname, lat, lng, mushroomNotes, locationNotes, habitatNotes, address, featured};
		for (let n in possibleNames) if (possibleNames[n]) updateValue(n, possibleNames[n]);
		if (confidence) for (let i of document.querySelectorAll(`[name="confidence"]`)) if (i.value == confidence) i.checked = true;
		populateDatalists();
		displaySection('.edit.observation');
}

function populateThumbnail(file) {
	const {url, thumbnail, filename} = file;
	insertThumbnailStructure(filename);
	const previewImg = document.getElementById(`${filename}-thumb`);
	if (thumbnail) previewImg.src = thumbnail;
	else previewImg.src = url;

	exifFromFile(url, filename);
}

function editObservation(event, obsId) {
	const header = "<h2>Edit Observation</h2>"
	const footer = `<button onclick="saveObservation(event, '${obsId}')">Save Observation</button>
		<button onclick="deleteObservation(event, '${obsId}')">Delete Observation</button>
		<button onclick="getAndDisplayObservations()">Cancel</button>`
	document.querySelector('.edit.observation').innerHTML = header + OBSERVATION_FORM + footer;
	getObservation(obsId).then(res => {
		populateFields(res);
		res.photos.files.forEach(file => populateThumbnail(file));
// 		populateThumbnails(res.photos.urls);
	});	
	globalFileHolder = [];
	populateDatalists();
	displaySection('.edit.observation');
}

function renderObservation(obs, address) {

	// define thumbnail
	let thumbnail = "";
	if (obs.photos.featured) {
		const filename = obs.photos.featured;
		for(let i of photos.files) if (photos.files[i].filename === filename) thumbnail = photos.files[i].thumbnail;
	} else if (obs.photos.files[0]) {
		if (obs.photos.files[0].thumbnail) thumbnail = obs.photos.files[0].thumbnail;
		else thumbnail = obs.photos.files[0].url;
	} else thumbnail = "media/mushroom.jpg";
	let obsRender = `<a class="edit-button" onclick="editObservation(event, '${obs.id}')">Edit</a><div class="obs-list-item" value='${obs.id}' onclick="viewObservation(this)">`;
		obsRender += `<img class="obs-thumb" src="${thumbnail}">`;
		if (obs.fungi.nickname) obsRender += 
			`<span class="title"><span class="label">nickname: </span>${obs.fungi.nickname}</span>`;
		if (obs.fungi.commonName) obsRender += 
			`<span class="title"><span class="label">common name: </span>${obs.fungi.commonName}</span>`;
		if (obs.fungi.genus) obsRender += 
			`<span class="fungi"><span class="label">genus: </span>${obs.fungi.genus} 
			<span class="label">species: </span>${obs.fungi.species}</span><span>`;
		if (obs.obsDate) obsRender += 
			`<span class="fungi"><span class="label">observed </span>${obs.obsDate} 
			<span class="label">around </span><span id="list-address">${address}</span></span>`;
		obsRender += `</div>`
		document.querySelector('#obs-list').innerHTML += obsRender;
}

function getObservations(callback) {
	fetch(URL, {method: 'GET'})
	.then((res) => res.json())
	.then((res) => {
		callback(res);
	})
}

function displayObservations(res) {
	// const observations = res.observations;
	const observations = res;	
	for(let obs of observations) {
		if ((obs.location.lat) && (obs.location.lng)) setTimeout(getAddress(obs, renderObservation), 200);
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