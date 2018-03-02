'use strict'

const MUSHROOMS = [{ 'commonName': 'Aborted Entoloma', 'genus': 'Entoloma', 'species': 'Abortivum' }, { 'commonName': 'Admirable Bolete', 'genus': 'Boletus', 'species': 'Mirabilis' }, { 'commonName': 'Alcohol Inky Cap', 'genus': 'Coprinus', 'species': 'Atramentarius' }, { 'commonName': 'American Matsutake', 'genus': 'Tricholoma', 'species': 'Magnivelare' }, { 'commonName': 'Angels\' Wings', 'genus': 'Pleurocybella', 'species': 'Porrigens' }, { 'commonName': 'Anise-Scented', 'genus': 'Clitocybe', 'species': 'Odora' }, { 'commonName': 'Apricot Jelly Mushroom', 'genus': 'Phlogiotis', 'species': 'Helvelloides' }, { 'commonName': 'Aspen Scaber Stalk', 'genus': 'Leccinum', 'species': 'Insigne' }, { 'commonName': 'Bare-Toothed Russula', 'genus': 'Russula', 'species': 'Vesca' }, { 'commonName': 'Barrow\'s Bolete', 'genus': 'Boletus', 'species': 'Barrowsii' }, { 'commonName': 'Bay Bolete', 'genus': 'Boletus', 'species': 'Badius' }, { 'commonName': 'Bear\'s Head', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Belly-Button Mushroom', 'genus': 'Hydnum', 'species': 'Umbilicatum' }, { 'commonName': 'Black Chanterelle', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Black Forest Mushroom', 'genus': 'Lentinus', 'species': 'Edodes' }, { 'commonName': 'Black Fungus', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Black Kame', 'genus': 'Terfezia', 'species': 'Bouderi' }, { 'commonName': 'Black Saddle Mushroom', 'genus': 'Helvella', 'species': 'Lacunosa' }, { 'commonName': 'Blackening Russula', 'genus': 'Russula', 'species': 'Nigricans' }, { 'commonName': 'Bleeding Agaricus', 'genus': 'Agaricus', 'species': 'Fuscofibrillosus Haemorrhoidarius' }, { 'commonName': 'Bleeding Milky Cap', 'genus': 'Lactarius', 'species': 'Rubrilacteus' }, { 'commonName': 'Blewit', 'genus': 'Lepista', 'species': 'Nuda' }, { 'commonName': 'Blue Milky Cap', 'genus': 'Lactarius', 'species': 'Indigo' }, { 'commonName': 'Bracelet Cortinarius', 'genus': 'Cortinarius', 'species': 'Armillatus' }, { 'commonName': 'Brown Kame', 'genus': 'Terfezia', 'species': 'Claveryi' }, { 'commonName': 'Butter Bolete', 'genus': 'Boletus', 'species': 'Appendiculatus' }, { 'commonName': 'Butter Mushroom', 'genus': 'Pholiota', 'species': 'Aurivella' }, { 'commonName': 'Button Mushroom', 'genus': 'Agaricus', 'species': 'Brunnescens' }, { 'commonName': 'Candy Cap', 'genus': 'Lactarius', 'species': 'Fragilis' }, { 'commonName': 'Cauliflower Mushroom', 'genus': 'Sparassis', 'species': 'Crispa' }, { 'commonName': 'Cèpe', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Charcoal Burner', 'genus': 'Russula', 'species': 'Cyanoxantha' }, { 'commonName': 'Chicken Of The Woods', 'genus': 'Rozites', 'species': 'Caperata' }, { 'commonName': 'Cinnabar-Red Chanterelle', 'genus': 'Cantharellus', 'species': 'Cinnabarinus' }, { 'commonName': 'Cloud Ear Mushroom', 'genus': 'Auricularia', 'species': 'Auricula' }, { 'commonName': 'Clustered Blue Chanterelle', 'genus': 'Polyozellus', 'species': 'Multiplex' }, { 'commonName': 'Comb Tooth Mushroom', 'genus': 'Hericium', 'species': 'Ramosum' }, { 'commonName': 'Commercial Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus' }, { 'commonName': 'Common Store Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus' }, { 'commonName': 'Coral Hericium', 'genus': 'Hericium', 'species': 'Coralloides' }, { 'commonName': 'Crocodile Agaricus', 'genus': 'Agaricus', 'species': 'Crocodilinus' }, { 'commonName': 'Death Cap', 'genus': 'Amanita', 'species': 'Phalloides' }, { 'commonName': 'Delicious Milky Cap', 'genus': 'Lactarius', 'species': 'Deliciosus' }, { 'commonName': 'Dotted-Stalk Suillus', 'genus': 'Suillus', 'species': 'Granulatus' }, { 'commonName': 'Drumstick Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes' }, { 'commonName': 'Egg Mushroom', 'genus': 'Cantharellus', 'species': 'Cibarius' }, { 'commonName': 'Enoki', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Fairy-Ring Mushroom', 'genus': 'Marasmius', 'species': 'Oreades' }, { 'commonName': 'Fawn Mushroom', 'genus': 'Pluteus', 'species': 'Cervinus' }, { 'commonName': 'Field Or Meadow Mushroom', 'genus': 'Agaricus', 'species': 'Campestris' }, { 'commonName': 'Fragrant Clitocybe', 'genus': 'Clitocybe', 'species': 'Fragrans' }, { 'commonName': 'French Black Truffle', 'genus': 'Tuber', 'species': 'Melanosporum' }, { 'commonName': 'Garlic Marasmius', 'genus': 'Marasmius', 'species': 'Scorodonius' }, { 'commonName': 'Golden Chanterelle', 'genus': 'Cantharellus', 'species': 'Cibarius' }, { 'commonName': 'Golden Needle', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Green-Spored Parasol', 'genus': 'Lepiota', 'species': 'Molybdites' }, { 'commonName': 'Green-Spored Parasol Mushroom', 'genus': 'Chlorophyllum', 'species': 'Molybdites' }, { 'commonName': 'Gypsy Mushroom', 'genus': 'Rozites', 'species': 'Caperata' }, { 'commonName': 'Hedgehog Mushroom', 'genus': 'Hydnum', 'species': 'Repandum' }, { 'commonName': 'Hen Of The Woods', 'genus': 'Polypilus', 'species': 'Frondosa' }, { 'commonName': 'Honey Or Oak Mushroom', 'genus': 'Armillaria', 'species': 'Mellea' }, { 'commonName': 'Horn Of Plenty', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Horse Mushroom', 'genus': 'Agaricus', 'species': 'Arvensis' }, { 'commonName': 'Inky Cap', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Italian White Truffle', 'genus': 'Tuber', 'species': 'Magnatum' }, { 'commonName': 'Judas\' Ear', 'genus': 'Auricularia', 'species': 'Auricula' }, { 'commonName': 'King Bolete', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Lawyer\'S Wig', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Man On Horseback', 'genus': 'Tricholoma', 'species': 'Flavovirens Equestre' }, { 'commonName': 'Manzanita Scaber Stalk', 'genus': 'Leccinum', 'species': 'Manzanitae' }, { 'commonName': 'Matsutake', 'genus': 'Armillaria', 'species': 'Matsutake' }, { 'commonName': 'Mica Cap', 'genus': 'Coprinus', 'species': 'Micaceus' }, { 'commonName': 'Monkey Head', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Morel', 'genus': 'Morchella', 'species': 'Esculenta' }, { 'commonName': 'Nameko', 'genus': 'Pholiota', 'species': 'Nameko' }, { 'commonName': 'Old Man Of The Woods', 'genus': 'Strobilomyces', 'species': 'Confusus' }, { 'commonName': 'Orange-Capped Scaber Stalk', 'genus': 'Leccinum', 'species': 'Aurantiacum' }, { 'commonName': 'Oregon White Truffle', 'genus': 'Tuber', 'species': 'Gibbosum' }, { 'commonName': 'Oyster Mushroom', 'genus': 'Pleurotus', 'species': 'Ostreatus' }, { 'commonName': 'Paddy Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea' }, { 'commonName': 'Painted Suillus', 'genus': 'Suillus', 'species': 'Pictus' }, { 'commonName': 'Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Procera' }, { 'commonName': 'Peck', 'genus': 'Agaricus', 'species': 'Rodmanii' }, { 'commonName': 'Pig\'s Ear', 'genus': 'Gomphus', 'species': 'Clavatus' }, { 'commonName': 'Pine Mushroom', 'genus': 'Tricholoma', 'species': 'Magnivelare' }, { 'commonName': 'Pom-Pom', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Porcini', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Puffball', 'genus': 'Calvatia', 'species': 'Gigantea' }, { 'commonName': 'Red-Tipped Coral Mushroom', 'genus': 'Ramaria', 'species': 'Botrytis' }, { 'commonName': 'Regal Bolete', 'genus': 'Boletus', 'species': 'Regius' }, { 'commonName': 'Russula Like Waxy Cap', 'genus': 'Hygrophorus', 'species': 'Russula' }, { 'commonName': 'Salt-Loving Mushroom', 'genus': 'Agaricus', 'species': 'Bernardii' }, { 'commonName': 'Scaber Stalk', 'genus': 'Leccinum', 'species': 'Scaber' }, { 'commonName': 'Shaggy Mane', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Shaggy Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes' }, { 'commonName': 'Shellfish-Scented Russula', 'genus': 'Russula', 'species': 'Xerampelina' }, { 'commonName': 'Shiitake', 'genus': 'Lentinus', 'species': 'Edodes' }, { 'commonName': 'Short-Stalked Slippery Cap', 'genus': 'Suillus', 'species': 'Brevipes' }, { 'commonName': 'Short-Stem Russula', 'genus': 'Russula', 'species': 'Delica' }, { 'commonName': 'Silver Ear Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Smooth Chanterelle', 'genus': 'Cantharellus', 'species': 'Lateritius' }, { 'commonName': 'Snow Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Snowbank False Morel', 'genus': 'Gyromitra', 'species': 'Gigas' }, { 'commonName': 'Sponge', 'genus': 'Morchella', 'species': 'Esculenta' }, { 'commonName': 'Spring Agaricus', 'genus': 'Agaricus', 'species': 'Bitorquis' }, { 'commonName': 'Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea' }, { 'commonName': 'Summer Truffle', 'genus': 'Tuber', 'species': 'Aestivum' }, { 'commonName': 'Sweet Tooth', 'genus': 'Hydnum', 'species': 'Repandum' }, { 'commonName': 'Sweetbread Mushroom', 'genus': 'Clitopilus', 'species': 'Prunulus' }, { 'commonName': 'Tacky Green Russula', 'genus': 'Russula', 'species': 'Aeruginea' }, { 'commonName': 'Texas White Truffle', 'genus': 'Tuber', 'species': 'Texensis' }, { 'commonName': 'The Prince', 'genus': 'Agaricus', 'species': 'Augustus' }, { 'commonName': 'Tree Ear', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Tricholoma Magnivelare', 'genus': 'Armillaria', 'species': 'Ponderosa' }, { 'commonName': 'Trumpet Chanterelle', 'genus': 'Cantharellus', 'species': 'Tubaeformis' }, { 'commonName': 'Trumpet Of Death', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Two-Colored Bolete', 'genus': 'Boletus', 'species': 'Bicolor' }, { 'commonName': 'Umbrella Polypore', 'genus': 'Polyporus', 'species': 'Umbellatus' }, { 'commonName': 'Variant Of B. Edulis', 'genus': 'Boletus', 'species': 'Pinicola' }, { 'commonName': 'Velvet Foot', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'White Chanterelle', 'genus': 'Cantharellus', 'species': 'Subalbidus' }, { 'commonName': 'White Jelly Fungus', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Wine-Cap Stropharia', 'genus': 'Stropharia', 'species': 'Rugosoannulata' }, { 'commonName': 'Winter Mushroom', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Wood Ear Mushroom', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Zeller\'s Bolete', 'genus': 'Boletus', 'species': 'Zelleri' }];

const GOOGLEMAPS_API_KEY = 'AIzaSyABVyjzmdlA8yrWGI73K62cMmqo5_bw7rs';

const URL = "/observations/";

let globalFileHolder = [];

const OBSERVATION_FORM = `
<form enctype="multipart/form-data" method="post" id="new-observation" class='grid wrapper'>
<input type="hidden" name="id">
<input type="hidden" name="featured" id="featured-input">
<input type="hidden" name="filesToBeDeleted">
	<div  class="image area">
		<button onclick="run(selectFiles(event))">Add Images</button>
		<input onchange="run(receiveFiles(event))" id="file-input" name="fileInput" type="file"  style="display:none;" multiple accept="image/*">
		<div class="img-preview">
		</div>
	</div>
	<div class="location area">
		<div>
			<div id="location-options" class="loc-opts">
				<div>
					<label>
						<span class="label">Address</span>
						<input readonly name="address" id="address-input" type="text" placeholder="Address">
					</label>
				</div>
				<div class="address-blocking">
					<div id="latlng">
						<label>
							<span class="label">Latitude</span>
							<input readonly id="lat-input" name="lat" class="coord" type="number" placeholder="Lat">
						</label>
						<label>
							<span class="label">Longitude</span>
							<input readonly id="lng-input" name="lng" class="coord" type="number" placeholder="Long">
						</label>
					</div>
					<div id="datetime">
						<label>
								<span class="label">Date</span>
								<input name="obsDate" id="obs-date-input" type="date">
						</label>
						<label>
								<span class="label">Time</span>
								<input name="obsTime" id="obs-time-input" type="time">
						</label>
					</div>
					<div class="address-buttons">
						<button onclick="run(enterLocation())">Enter Location</button>
						<button onclick="run(geolocate())">Use Current Location</button>
						<button onclick="run(useCurrentTime())">Use Current Time</button>
					</div>
				</div>
				<div>
					<span id="location-text"></span>
				</div>
				<a class="toggle-control" onclick="run(reveal('.location.notes', event))">
					Location Notes
				</a>
				<div class="location notes reveal">
					<textarea name="locationNotes" id="locationNotes" rows="5" placeholder="Location Notes"></textarea>
				</div>
			</div>
		</div>
	</div>
	<div class="name area">
		<div>
			<label>
				<span class="label">Nickname</span>
				<input name="nickname" id="nickname-input" type="text" placeholder="Nickname">
			</label>
		</div>
		<div>
			<label>
				<span class="label">Common Name</span>
				<datalist id="commonName-datalist"></datalist>
				<input name="commonName" id="common-name-input" onchange="populateNames(event)" type="text" placeholder="Common Name" list="commonName-datalist">
			</label>
		</div>
		<label>
			<div class="confidence">
				<span class="label">Identification Confidence</span>
				<div>	
					<label>0
						<input name="confidence" type="radio" value="0" title="I guarantee this is wrong">
					</label>
				</div>
				<div>
					<label>1
						<input name="confidence" type="radio" value="1" title="Shot in the dark">
					</label>
				</div>
				<div>
					<label>2
						<input name="confidence" type="radio" value="2" title="Maybe, sort-of, kind-of">
					</label>
				</div>
				<div>
					<label>3
						<input name="confidence" type="radio" value="3" title="Sounds like it could be">
					</label>
				</div>
				<div>
					<label>4
						<input name="confidence" type="radio" value="4" title="I feel very good about this">
					</label>
				</div>
				<div>
					<label>5
						<input name="confidence" type="radio" value="5" title="I'd bet my life">
					</label>
				</div>
			</div>
		</label>
			<div class="fungi">
			<label>
				<span class="label">genus</span>
				<datalist id="genus-datalist"></datalist>
				<input readonly name="genus" id="genus-input" type="text" list="genus-datalist">
			</label>
			<label>
				<span class="label">species</span>
				<datalist id="species-datalist"></datalist>
				<input readonly name="species" id="species-input" type="text" list="species-datalist">
			</label>
		</div>
		<a class="toggle-control" onclick="run(reveal('.mushroom.notes', event))">Mushroom Notes</a>
		<div class="mushroom notes reveal">
			<textarea name="mushroomNotes" id="mushroomNotes" placeholder="Mushroom Notes"></textarea>
		</div>
	</div>
<!--
	<div class="habitat area">
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
		<a class="toggle-control" onclick="run(reveal('.habitat.notes', event)">Habitat Notes</a>
		<div class="habitat notes reveal">
			<textarea name="habitatNotes" id="habitatNotes" rows="5" placeholder="Habitat Notes"></textarea>
		</div>
	</div>
	--!>
</form>
`;

function run(passthrough) {
	event.preventDefault;
	passthrough;
}

function displaySection(sec) {
	const secs = document.querySelectorAll('section');
	for (let el of secs) el.classList.add('hidden');
	document.querySelector(sec).classList.remove('hidden');
}

function reveal(selector, event) {
	document.querySelector(selector).classList.toggle('reveal');
	event.currentTarget.classList.toggle('visible');
}

function updateAddress(addressString) {
	document.querySelector('#address-input').setAttribute('value', addressString);
}

async function useCurrentTime() {
	event.preventDefault();
	const obsTime = await getTime(new Date());
	const obsDate = await getDate(new Date());
	updateValue('obsTime', obsTime);
	updateValue('obsDate', obsDate);
}

function geolocate() {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition((position) => {
		const coords = { 
			'lat': position.coords.latitude, 
			'lng': position.coords.longitude };
		const obs = { 'location': coords };
		updateLocation(obs, 'Current Location');
	});
}

function toDecimal(number) {
	return number[0].numerator + number[1].numerator /
		(60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};

function updateExif(string, status) {
	const locText = document.querySelector('#location-text');
	locText.innerHTML = string;
	if (status) {
		if (status === "error") locText.classList.add('error')
		else locText.classList.remove('error');
	};
}

function populateNames(event) {
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

function selectFiles(event) {
	event.preventDefault();
	document.querySelector("#file-input").click();
}

function click(querySelector) {
	document.querySelector(querySelector).click();
}


// const pica = require('pica')();
 
function resizeImage(from, to) {
	// Resize & convert to blob
	pica.resize(from, to)
		.then(result => pica.toBlob(result, 'image/jpeg', 90))
		.then(blob => resolve(blob));
}

async function receiveFiles(event) {
	event.preventDefault();
	const files = event.target.files;
	for (let file of files) {

		// Resize & convert to blob
		// const canvas = document.getElementById('resizeCanvas');
		// const newBlob = await resizeImage(file, canvas);

		let newBlob = file;

		previewFile(newBlob);
		globalFileHolder.push(newBlob);
		exifFromFile(newBlob);
	}
}

function enterLocation() {
	event.preventDefault();
	// open form
	const form = `
		<form>
			<input type="address" name="address-entry" id="address-entry" placeholder="Observation Location>
			<button onclick="run(resolveLocation(event))">
		</form>`;
// example
	const input = document.getElementById('address-entry');
	const autocomplete = new google.maps.places.Autocomplete(input);


	
	// send to google

	// send to something else
	alert("it's on the short list of things to add");
}

function updateLocation(obs, locationSource) {
	getAddress(obs, function (obs, addressString) {
		updateValue('lat', obs.location.lat);
		updateValue('lng', obs.location.lng);
		updateExif("Location extracted from " + locationSource, "no error");
		updateValue('address', addressString);
	});
	if(obs.date) {
		const date = new Date(obs.date);
		const year = date.getFullYear(),
			month = ("0" + (date.getMonth() + 1)).slice(-2),
			day = ("0" + date.getDate()).slice(-2);
		const obsDate = `${year}-${month}-${day}`;
		const obsTime = date.toTimeString().substring(0,8) ;
		updateValue('obsDate', obsDate);
		updateValue('obsTime', obsTime);
		updateExif("Time, Date and Location extracted from photo", "no error");

	}
}

function locationFromThumbnail(event) {
	event.preventDefault();
	const obs = { 
		'filename': event.currentTarget.dataset.filename,
		'date': new Date(event.currentTarget.dataset.date),
		'location': { 
			'lat': Number(event.currentTarget.dataset.lat),
			'lng': Number(event.currentTarget.dataset.lng) } };
	updateLocation(obs, 'photo');
}

function deleteFileUponSave(id, filename) {
	return fetch(`${URL}${id}/${filename}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	});
}

function deleteFile(event) {
	event.preventDefault();
	const { filename } = event.currentTarget.dataset;
	const target = document.getElementById(`${filename}-div`);
	const { src } = target.firstElementChild;
	// logic to deterine if new file or existing by looking at url
	if (src.substring(0, 4) === 'http') {
		// existing file, mark for later deletion
		const target = document.getElementsByName("filesToBeDeleted")[0];
		target.value += filename + ','
		// target.setAttribute('value',  += filename + ',';
	}
	else {
		// new file, remove from globalFileHolder
		for (let i in globalFileHolder) {
			if (globalFileHolder[i].name === filename) globalFileHolder.splice(i, 1);
		}
	}
	// delete thumbnail
	target.parentNode.removeChild(target);
	// remove featured if removed image was featured
	const featured = document.getElementById('featured-input').value;
	if (filename === featured) {
		document.getElementById('featured-input').value = '';
	}
}

function insertThumbnailStructure(filename) {
	const newImg = `
	<div id="${filename}-div" class="thumb-div">
		<img src="media/loading.gif" id="${filename}-thumb" class="thumb-img" alt="Thumbnail for ${filename}" title="Thumbnail for ${filename}">
		<input type="image" src="/media/delete.png" onclick="run(deleteFile(event))" data-filename="${filename}" alt="Remove Image" title="Remove Image" class="img-action delete">
		<input type="image" src="/media/featured.png" onclick="run(makeFeatured(event))" data-filename="${filename}" alt="Use as Featured Image" title="Use as Featured Image" class="img-action featured">
	</div>
			`;
	const thumbDiv = document.querySelector('.img-preview');
	thumbDiv.innerHTML += newImg;
}

function makeFeatured(event) {
	event.preventDefault();
	const filename = event.currentTarget.dataset.filename;
	const featured = document.getElementsByName('featured')[0];
	// const oldFilename = featured.value;
	// const oldFeatured = document.getElementById(`${oldFilename}-thumb`);
	const newFeatured = document.getElementById(`${filename}-thumb`);
	document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('featured-image'));
	newFeatured.classList.add('featured-image');
	featured.value = filename;
// 	updateValue('featured', filename);
}

function previewFile(file) {
	const filename = file.name;
	insertThumbnailStructure(filename);
	const reader = new FileReader();
	const featured = document.getElementsByName('featured')[0];
	reader.onloadend = function (event) {
		const previewImg = document.getElementById(`${filename}-thumb`);
		previewImg.src = event.target.result;
		// if no currently featured image, make current image featured
		if (!featured.value) {
			featured.value = filename;
			previewImg.classList.add('featured-image');
		}
	};
	reader.readAsDataURL(file);
}

function addGpsAction (lat, lng, filename, date) {
	const target = document.getElementById(`${filename}-div`);
	const button = `<input type="image"
					src="/media/uselocation.png" 
					onclick="run(locationFromThumbnail(event))" 
					data-filename="${filename}" 
					data-lat="${lat}" 
					data-lng="${lng}" 
					data-date="${date}" 
					alt="Use Image Location" 
					title="Use Image Location" 
					class="img-action location">`;
	target.innerHTML += button;

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
				const obs = { 'location': coords,
								'date': new Date(obsDate + ' ' + obsTime) };
				// add button to thumbnail
				addGpsAction(coords.lat, coords.lng, filename, obs.date);
				if (!document.getElementsByName('lat')[0].value) {
					updateLocation(obs, 'photo');
				}
			}
		});
	};
}

function annimateObservation(event,id) {
	// const id = event.attributes.value;
	const startRect = event.getBoundingClientRect();

	const viewSection = document.querySelector('section#view-observation');

	const popup = document.querySelector('section#popup');
	const startContent = event.innerHTML;
	const startBox = `
		id="observation-detail";
		value="${id}";`;
	viewSection.innerHTML = `<div ${startBox}>${startContent}</div>`;
	const observationDiv = document.querySelector('#observation-detail');
	requestAnimationFrame(() => {
		observationDiv.setAttribute("style", "transition: all 5s ease-in-out; position:fixed; top:" + startRect.y + "px; left:" + startRect.x + "px; width:" + startRect.width + "px; height:" + startRect.height + "px; background-color: white;");
		popup.classList.remove('hidden');
		observationDiv.classList.add('observationBox');
		viewSection.classList.remove('hidden');
		requestAnimationFrame(() => {
			observationDiv.removeAttribute("style");
			// observationDiv.querySelector('img').classList.add('obs-img');
		});
	});
}

function getObservation(targetId) {
	return fetch(URL + targetId, { method: 'GET' })
		.then((res) => res.json());
}

function makeHero(event){
	event.preventDefault();
	const {dataset, currentSrc} = event.currentTarget;
	const {filename, url} = dataset;
	const hero = document.querySelector('.obs-hero');
	hero.src = currentSrc;
	hero.src = url;
	const buttons = document.querySelectorAll('.img-button');
	for (let btn of buttons) btn.classList.remove('selected');
	event.currentTarget.classList.add('selected');
}

function closeObservation (){
	event.preventDefault();
	const viewSection = document.querySelector('section#view-observation');
	const popup = document.getElementById('popup');
		popup.classList.add('hidden');
		viewSection.classList.add('hidden');
}

function dateString (dateObj, opt) {
	const date = new Date(dateObj);
	const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January',	'February',	'March',	'April',	'May',	'June',	'July',	'August',	'September',	'October',	'November',	'December'];
	const dayname = daynames[date.getDay()];
	const month = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();
	const time = date.toLocaleTimeString('en-US');
	if (opt) {
		if (opt = "date") return `${dayname} ${month} ${day}, ${year}`;
	} else return `${dayname} ${month} ${day}, ${year} at ${time}`;
}

function editFromViewObservation (event, id) {
	closeObservation();
	editObservation(event, id);
}

function displayObservation(obs) {
	// wrapper and options
	let obsRender = `
		<div class="observation-actions">
			<input type="image" src="/media/edit.png" title="Edit Observation" alt="Edit Observation" onclick="run(editFromViewObservation(event, '${obs.id}'))" class="obs-view-action edit">
			<input type="image" src="/media/close.png" title="Close Observation" alt="Close Observation" onclick="run(closeObservation())" class="obs-view-action close">
			
		</div>
		<div class="obs-detail" value='${obs.id}'>`;
	
	// hero image
	let hero = "media/mushroom.jpg";
	if (obs.featured) {
		const filename = obs.featured;
		for (let file of obs.photos.files) if (file.filename === filename) hero = file.url;
	} else if (obs.photos.files[0]) hero = obs.photos.files[0].url;
	obsRender += `<img class="obs-hero" src="${hero}">`;

	// image carousel
	if (obs.photos.files.length>0) {
		obsRender += `<div class="obs-carousel">`;
		for (let file of obs.photos.files) obsRender += `<img 
			class="img-button" 
			src="${file.thumbnail}"
			data-filename="${file.filename}"
			data-url="${file.url}"
			onclick="run(makeHero(event))"
			>`;
		obsRender += `</div>`;
	}

	// fungi classification
	obsRender += `<div class="classification">`
	if (obs.fungi.nickname) obsRender +=
		`<span class="title">
			<span class="label">
				nickname: 
			</span>
			${obs.fungi.nickname}
		</span>`;
	if (obs.fungi.commonName) obsRender +=
		`<span class="title">
			<span class="label">
				common name: 
			</span>
			${obs.fungi.commonName}
		</span>`;
	if (obs.fungi.genus) obsRender +=
		`<span class="fungi">
			<span class="label">
				genus: 
			</span>
			${obs.fungi.genus} 
			<span class="label">
				species: 
			</span>
			${obs.fungi.species}
		</span>`;
	if (obs.fungi.confidence) obsRender += `
		<div>
			Classified with ${obs.fungi.confidence * 20}% Confidence
		</div>`;
	if (obs.notes.mushroomNotes) obsRender += `
		<span class="label">
			mushroom notes
		</span>
		<span class="notes">
			${obs.notes.mushroomNotes}
		</span>`;
	obsRender += `</div>`; // .classification
	obsRender += `<div class="location">`;

	// date and time		
	if (obs.obsDate) {
		const dateStr = dateString(obs.obsDate);
		obsRender += `
		<span class="label">
			observed 
		</span>
		${dateStr}`;
	};

	// location
	if (obs.location) {
		obsRender += `
		<img src="${staticMapUrl(obs.location)}" class="static-map">

		<div class="location">

		<span class="label">
				around 
			</span>
			${obs.location.address}`;
		if (obs.notes.locationNotes) obsRender += `
			<span class="label">
				location notes
			</span>
			<span class="notes">
				${obs.notes.locationNotes}
			</span>`;
		obsRender += `
		</div>`; // .location
	};
		// obsRender += `</div>` // .location

		// closing wrapper and sending html
	obsRender += `</div>`;
	document.querySelector('#observation-detail').innerHTML = obsRender;


}

function closePopup (event, popupId) {
	event.preventDefault();
	console.log('closing popup');
	// const popupId = event;
	const popup = document.getElementById(`${popupId}-popup`);
	const alert = document.getElementById(`${popupId}-alert`);
	const page = document.querySelector('main');
	page.removeChild(popup);
	page.removeChild(alert);
}

function showPopup (content, popupId) {
	console.log('showing popup');
	const popup = document.createElement('section');
	const alert = document.createElement('section');
	const page = document.querySelector('main');
	popup.setAttribute('id', `${popupId}-popup`);
	alert.setAttribute('id', `${popupId}-alert`);
	popup.classList.add('popup');
	// popup.setAttribute(onclick, closePopup(event));
	alert.classList.add('popup-alert');
	alert.innerHTML = content;
	page.insertAdjacentElement('beforeend', popup);
	page.insertAdjacentElement('beforeend', alert);
}

function login (event) {
	event.preventDefault();
	const form = document.querySelector('#login-form');
	let formData = new FormData(form);

	fetch('/api/auth/login', {
		method: 'POST',
		body: formData
	})
		.then((res) => console.log(res.json()))
		.catch(error => console.error('Error:', error));
}

function signup (event) {
	event.preventDefault();
	const form = document.querySelector('#signup-form');
	let formData = new FormData(form);

	fetch('/api/users', {
		method: 'POST',
		body: formData
	})
		.then((res) => console.log(res.json()))
		.catch(error => console.error('Error:', error));
}

function loginForm () {
	event.preventDefault();
	console.log('showing login form');
	const popupId = 'login-form';
	const form = `
		<form enctype="multipart/form-data" method="post" id="login-form" class="alert-form">
			<input name="username" type="text" placeholder="username">
			<input name="password" type="password" placeholder="password">
			<button onclick="login(event)">Login</button>
			<button onclick="closePopup(event,'${popupId}')">Cancel</button>
		</form>`;
	showPopup(form, popupId);
}

function signupForm () {
	event.preventDefault();
	console.log('showing signup form');
	const popupId = 'signup-form';
	const form = `
		<h2>Signup</h2>
		<form enctype="multipart/form-data" method="post" id="signup-form" class="alert-form">
		<input name="firstName" type="text" placeholder="first name">
		<input name="lastName" type="text" placeholder="last name">
		<input name="username" type="text" placeholder="username">
		<input name="password" type="password" placeholder="password">
			<button onclick="signup(event)">Login</button>
			<button onclick="closePopup(event,'${popupId}')">Cancel</button>
		</form>`;
	showPopup(form, popupId);
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
		.then(res => 
			displayObservation(res));
}

function getAddress(obs, callback) {
	const coords = { 'lat': obs.location.lat, 'lng': obs.location.lng };
	const geocoder = new google.maps.Geocoder;
	geocoder.geocode({ 'location': coords }, function (results, status) {
		let addressString;
		if (status === "ZERO_RESULTS") {
			addressString = "";
		} else if (results) {
			if (results[1]) { addressString = results[1].formatted_address; }
			else addressString = results[0].formatted_address;
		} else { addressString = ""; }
		callback(obs, addressString);
	});
}

function newObservation() {
	const header = "<h2>Add New Observation</h2>";
	const newObs = document.querySelector('section.new.observation');
	const footer = document.createElement('div');
		footer.classList.add('form-buttons');
		footer.innerHTML = `
			<button onclick="run(submitNewObservation(event))">Submit New Observation</button>
			<button onclick="run(getAndDisplayObservations())">Cancel</button>`;
	newObs.innerHTML = header + OBSERVATION_FORM;
	const form = document.getElementById('new-observation');
	form.insertAdjacentElement('beforeend', footer);
	globalFileHolder = [];
	populateDatalists();
	// displaySection('.new.observation');
	document.querySelector('.new.observation').classList.remove('hidden');
	document.querySelector('#form-popup').classList.remove('hidden');
}

const objFromIterator = (iterator) => {
	const obj = {};
	for (let [key, val] of iterator)
		obj[key] = val;
	return obj;
}

function dateFromDateTime(date, time) {
	const combined = new Date(date + 'T' + time);
	return combined;
};


function loading(state, text) {
	if (state) {
		const loadingScreen = document.createElement('div');
		loadingScreen.classList.add('popup.alert');
		loadingScreen.id = 'loading-screen';
		loadingScreen.innerHTML = `
			<div class="popup-alert">
				<img src="media/loading.gif" class="loading-img">
				<span class="loading-text">${text}<span>
			</div>`;
		document.querySelector('body').insertAdjacentElement('beforeend', loadingScreen);
	} 
	else if (!state) {
		const loadingScreen = document.getElementById('loading-screen');
		loadingScreen.parentNode.removeChild(loadingScreen);
	}
	else console.error('State is boolean, must be either true or false');
}

//directly from HTML onclick event
async function saveObservation(event, id) {
	event.preventDefault();
	loading(true, 'Saving Changes to Observation');
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');
	globalFileHolder.forEach(file => formData.append('newFiles', file));
	globalFileHolder = [];
	const filesToBeDeleted = document.getElementsByName("filesToBeDeleted")[0].value;
	
	if (filesToBeDeleted) {
		let arr = filesToBeDeleted.split(',')
			.filter((val) => {
				if (val === "") return false
				else return true
			});
		// arr.forEach(filename => deleteFileUponSave(id, filename));
		for (let filename of arr) await deleteFileUponSave(id, filename);
		};
	// document.querySelector('section.edit.observation').innerHTML = "";

	// await updateObservation(id, formData);
	// loading(false);


	return new Promise(res => {
		updateObservation(id, formData)
	})
	.then(res => {
		document.querySelector('section.edit.observation').innerHTML = "";	
		loading(false);
	});


}

function submitNewObservation(event) {
	event.preventDefault();
	loading(true, 'Saving New Observation');
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');

	globalFileHolder.forEach(file => formData.append('newFiles', file));
	globalFileHolder = [];

	return new Promise(res => {
		publishNewObservation(formData)
	})
	.then(res => {
		document.querySelector('section.new.observation').innerHTML = "";	
		loading(false);
	});
}

function updateObservation(id, formData) {
	fetch(URL + id, {
		method: 'PUT',
		body: formData,
	})
		.then((res) => res.json())
		.then((res) => {
			getAndDisplayObservations();
			loading(false);
		})
		.catch(error => console.error('Error:', error))
}

function publishNewObservation(formData) {
	fetch(URL, {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.json())
		.then((res) => {
			getAndDisplayObservations();
			loading(false);
		})
		.catch(error => console.error('Error:', error))
}

function getTime(date) {
	return new Promise(resolve => {
		let hour = date.getHours(),
			minute = date.getMinutes();
		if (hour.toString().length < 2) hour = `0${hour}`;
		if (minute.toString().length < 2) minute = `0${minute}`;
		resolve(`${hour}:${minute}`);
	})
}

function getDate(date) {
	return new Promise(resolve => {
		let year = date.getFullYear(),
			month = '' + (date.getMonth() + 1),
			day = '' + date.getDate();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		resolve([year, month, day].join('-'));
	})
}

function deleteObservation(event, obsId) {
	event.preventDefault();
	loading(true, 'Deleting Observation');
	fetch((URL + obsId), { method: 'DELETE' })
		// 		.then((res) => res.json())
		.then((res) => {
			document.querySelector('section.edit.observation').innerHTML = "";
			getAndDisplayObservations();
			loading(false);
			console.log(res);
		})
		.catch(error => console.error('Error:', error))
}


async function populateFields(obs) {
	const { id, fungi, location, notes, photos, featured } = obs;
	const { commonName, genus, species, nickname, confidence } = fungi;
	const { lat, lng, address } = location;
	const { mushroomNotes, habitatNotes, locationNotes, speciminNotes } = notes;
	// const { featured } = photos;
	// if (obs.obsDate) {
	const obsTime = await getTime(new Date(obs.obsDate));
	const obsDate = await getDate(new Date(obs.obsDate));
	// };
	const possibleNames = { obsTime, obsDate, id, commonName, genus, species, nickname, lat, lng, address, featured };
	for (let n in possibleNames) if (possibleNames[n]) updateValue(n, possibleNames[n]);
	for (let n in notes) if (notes[n]) document.getElementById(n).innerHTML = notes[n];
	if (confidence) for (let i of document.querySelectorAll(`[name="confidence"]`)) if (i.value == confidence) i.checked = true;
	populateDatalists();
// 	displaySection('.edit.observation');
}

function populateThumbnail(file) {
	const { url, thumbnail, filename, exif } = file;
	insertThumbnailStructure(filename);
	const previewImg = document.getElementById(`${filename}-thumb`);
	if (thumbnail) previewImg.src = thumbnail;
	else previewImg.src = url;
	const featured = document.getElementById('featured-input').value;
	if (featured === filename) previewImg.classList.add('featured-image');

	if (exif) {
		if (exif.lat && exif.lng && exif.date) {
			addGpsAction(exif.lat, exif.lng, filename, new Date(exif.date));
		}
	}
}

function editObservation(event, obsId) {
	event.preventDefault();
	event.stopPropagation();
	const header = "<h2>Edit Observation</h2>";
	const newObs = document.querySelector('section.edit.observation');
	const footer = document.createElement('div');
		footer.classList.add('form-buttons');
		footer.innerHTML = `
			<button onclick="run(saveObservation(event, '${obsId}'))">Save Changes</button>
			<button onclick="run(deleteObservation(event, '${obsId}'))">Delete Observation</button>
			<button onclick="run(getAndDisplayObservations())">Cancel</button>`;
	newObs.innerHTML = header + OBSERVATION_FORM;
	const form = document.getElementById('new-observation');
	form.insertAdjacentElement('beforeend', footer);
	getObservation(obsId).then(async res => {
		await populateFields(res);
		res.photos.files.forEach(file => populateThumbnail(file));
		// 		populateThumbnails(res.photos.urls);
	});
	globalFileHolder = [];
	populateDatalists();
	document.querySelector('.edit.observation').classList.remove('hidden');
	document.getElementById('form-popup').classList.remove('hidden');
// 	displaySection('.edit.observation');
}

function showInfo(event) {
	// should be for touchscreen enabled devices only
	event.preventDefault();
	event.stopPropagation();
	// define 
	const details = event.target.parentElement.querySelector('.obs-details');
	const icons = event.target.parentElement.querySelectorAll('.obs-action');
	// add class ('show-info')
	details.classList.toggle('show-details');
	icons.forEach(icon => icon.classList.toggle('show-icons'));
}


function renderObservation(obs, address) {
	// define thumbnail
	let thumbnail = "";
	if (obs.featured) {
		const filename = obs.featured;
		for (let i of obs.photos.files) if (i.filename === filename) thumbnail = i.thumbnail;
	} else if (obs.photos.files[0]) {
		if (obs.photos.files[0].thumbnail) thumbnail = obs.photos.files[0].thumbnail;
		else thumbnail = obs.photos.files[0].url;
	} else thumbnail = "media/mushroom.jpg";
	let obsRender = `
	<div style=background-image:url("${thumbnail}" class="obs-list-item" value='${obs.id}' onclick="run(viewObservation(this))">
		<input type="image" src="/media/info.png"
			onclick="run(showInfo(event))"
			class="show-info-button"
			alt="Show more information" title="Show more information">
		<input type="image" src="/media/edit.png" 
			onclick="run(editObservation(event, '${obs.id}'))" 
			class="obs-action edit"
			alt="Edit Observation" title="Edit Observation">
		<input type="image" src="/media/view.png" 
			class="obs-action view"
			alt="View Observation" title="View Observation"> `;
	// obsRender += 
		// `<div class="obs-thumb"	style=background-image:url("${thumbnail}">`;
	if (obs.photos.files.length>1) obsRender +=
			`<span class="photo-count">
				+ ${obs.photos.files.length-1} more photos
			</span>`;
	obsRender +=
		`<div class="obs-details">`
	if (obs.fungi.nickname) obsRender +=
			`<span class="title"><span class="label">nickname: </span>"${obs.fungi.nickname}"</span>`;
	if (obs.fungi.commonName) obsRender +=
			`<span class="title"><span class="label">common name: </span>${obs.fungi.commonName}</span>`;
	if (obs.fungi.genus) obsRender +=
			`<span class="fungi">
				${obs.fungi.genus}  ${obs.fungi.species}
			</span>`;
	if (obs.obsDate) {
		const date = new Date(obs.obsDate);
		const dateStr = dateString(date, 'date');
		obsRender +=
			`<span><span class="label">observed </span>${dateStr}`
		};
	if (obs.location.address) obsRender += 
			`<span class="label">around </span><span id="list-address">${obs.location.address}</span></span>`;
	obsRender += 
		`</div>
	</div>`;
	document.querySelector('#obs-list').innerHTML += obsRender;
}

function getObservations(callback) {
	fetch(URL, { method: 'GET' })
		.then((res) => res.json())
		.then((res) => {
			callback(res);
		})
}

function displayObservations(res) {
	const observations = res;
	for (let obs of observations) {
		if ((obs.location.lat) && (obs.location.lng)) setTimeout(getAddress(obs, renderObservation), 200);
		else renderObservation(obs, "Unknown Location");
	};
	displaySection('.observations');
}

function getAndDisplayObservations() {
	if (event) event.preventDefault();
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

window.onload = function () {
	getAndDisplayObservations();
}