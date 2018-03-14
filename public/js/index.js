

const MUSHROOMS = [{ 'commonName': 'Aborted Entoloma', 'genus': 'Entoloma', 'species': 'Abortivum' }, { 'commonName': 'Admirable Bolete', 'genus': 'Boletus', 'species': 'Mirabilis' }, { 'commonName': 'Alcohol Inky Cap', 'genus': 'Coprinus', 'species': 'Atramentarius' }, { 'commonName': 'American Matsutake', 'genus': 'Tricholoma', 'species': 'Magnivelare' }, { 'commonName': 'Angels\' Wings', 'genus': 'Pleurocybella', 'species': 'Porrigens' }, { 'commonName': 'Anise-Scented', 'genus': 'Clitocybe', 'species': 'Odora' }, { 'commonName': 'Apricot Jelly Mushroom', 'genus': 'Phlogiotis', 'species': 'Helvelloides' }, { 'commonName': 'Aspen Scaber Stalk', 'genus': 'Leccinum', 'species': 'Insigne' }, { 'commonName': 'Bare-Toothed Russula', 'genus': 'Russula', 'species': 'Vesca' }, { 'commonName': 'Barrow\'s Bolete', 'genus': 'Boletus', 'species': 'Barrowsii' }, { 'commonName': 'Bay Bolete', 'genus': 'Boletus', 'species': 'Badius' }, { 'commonName': 'Bear\'s Head', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Belly-Button Mushroom', 'genus': 'Hydnum', 'species': 'Umbilicatum' }, { 'commonName': 'Black Chanterelle', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Black Forest Mushroom', 'genus': 'Lentinus', 'species': 'Edodes' }, { 'commonName': 'Black Fungus', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Black Kame', 'genus': 'Terfezia', 'species': 'Bouderi' }, { 'commonName': 'Black Saddle Mushroom', 'genus': 'Helvella', 'species': 'Lacunosa' }, { 'commonName': 'Blackening Russula', 'genus': 'Russula', 'species': 'Nigricans' }, { 'commonName': 'Bleeding Agaricus', 'genus': 'Agaricus', 'species': 'Fuscofibrillosus Haemorrhoidarius' }, { 'commonName': 'Bleeding Milky Cap', 'genus': 'Lactarius', 'species': 'Rubrilacteus' }, { 'commonName': 'Blewit', 'genus': 'Lepista', 'species': 'Nuda' }, { 'commonName': 'Blue Milky Cap', 'genus': 'Lactarius', 'species': 'Indigo' }, { 'commonName': 'Bracelet Cortinarius', 'genus': 'Cortinarius', 'species': 'Armillatus' }, { 'commonName': 'Brown Kame', 'genus': 'Terfezia', 'species': 'Claveryi' }, { 'commonName': 'Butter Bolete', 'genus': 'Boletus', 'species': 'Appendiculatus' }, { 'commonName': 'Butter Mushroom', 'genus': 'Pholiota', 'species': 'Aurivella' }, { 'commonName': 'Button Mushroom', 'genus': 'Agaricus', 'species': 'Brunnescens' }, { 'commonName': 'Candy Cap', 'genus': 'Lactarius', 'species': 'Fragilis' }, { 'commonName': 'Cauliflower Mushroom', 'genus': 'Sparassis', 'species': 'Crispa' }, { 'commonName': 'Cèpe', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Charcoal Burner', 'genus': 'Russula', 'species': 'Cyanoxantha' }, { 'commonName': 'Chicken Of The Woods', 'genus': 'Rozites', 'species': 'Caperata' }, { 'commonName': 'Cinnabar-Red Chanterelle', 'genus': 'Cantharellus', 'species': 'Cinnabarinus' }, { 'commonName': 'Cloud Ear Mushroom', 'genus': 'Auricularia', 'species': 'Auricula' }, { 'commonName': 'Clustered Blue Chanterelle', 'genus': 'Polyozellus', 'species': 'Multiplex' }, { 'commonName': 'Comb Tooth Mushroom', 'genus': 'Hericium', 'species': 'Ramosum' }, { 'commonName': 'Commercial Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus' }, { 'commonName': 'Common Store Mushroom', 'genus': 'Agaricus', 'species': 'Bisporus' }, { 'commonName': 'Coral Hericium', 'genus': 'Hericium', 'species': 'Coralloides' }, { 'commonName': 'Crocodile Agaricus', 'genus': 'Agaricus', 'species': 'Crocodilinus' }, { 'commonName': 'Death Cap', 'genus': 'Amanita', 'species': 'Phalloides' }, { 'commonName': 'Delicious Milky Cap', 'genus': 'Lactarius', 'species': 'Deliciosus' }, { 'commonName': 'Dotted-Stalk Suillus', 'genus': 'Suillus', 'species': 'Granulatus' }, { 'commonName': 'Drumstick Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes' }, { 'commonName': 'Egg Mushroom', 'genus': 'Cantharellus', 'species': 'Cibarius' }, { 'commonName': 'Enoki', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Fairy-Ring Mushroom', 'genus': 'Marasmius', 'species': 'Oreades' }, { 'commonName': 'Fawn Mushroom', 'genus': 'Pluteus', 'species': 'Cervinus' }, { 'commonName': 'Field Or Meadow Mushroom', 'genus': 'Agaricus', 'species': 'Campestris' }, { 'commonName': 'Fragrant Clitocybe', 'genus': 'Clitocybe', 'species': 'Fragrans' }, { 'commonName': 'French Black Truffle', 'genus': 'Tuber', 'species': 'Melanosporum' }, { 'commonName': 'Garlic Marasmius', 'genus': 'Marasmius', 'species': 'Scorodonius' }, { 'commonName': 'Golden Chanterelle', 'genus': 'Cantharellus', 'species': 'Cibarius' }, { 'commonName': 'Golden Needle', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Green-Spored Parasol', 'genus': 'Lepiota', 'species': 'Molybdites' }, { 'commonName': 'Green-Spored Parasol Mushroom', 'genus': 'Chlorophyllum', 'species': 'Molybdites' }, { 'commonName': 'Gypsy Mushroom', 'genus': 'Rozites', 'species': 'Caperata' }, { 'commonName': 'Hedgehog Mushroom', 'genus': 'Hydnum', 'species': 'Repandum' }, { 'commonName': 'Hen Of The Woods', 'genus': 'Polypilus', 'species': 'Frondosa' }, { 'commonName': 'Honey Or Oak Mushroom', 'genus': 'Armillaria', 'species': 'Mellea' }, { 'commonName': 'Horn Of Plenty', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Horse Mushroom', 'genus': 'Agaricus', 'species': 'Arvensis' }, { 'commonName': 'Inky Cap', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Italian White Truffle', 'genus': 'Tuber', 'species': 'Magnatum' }, { 'commonName': 'Judas\' Ear', 'genus': 'Auricularia', 'species': 'Auricula' }, { 'commonName': 'King Bolete', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Lawyer\'S Wig', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Man On Horseback', 'genus': 'Tricholoma', 'species': 'Flavovirens Equestre' }, { 'commonName': 'Manzanita Scaber Stalk', 'genus': 'Leccinum', 'species': 'Manzanitae' }, { 'commonName': 'Matsutake', 'genus': 'Armillaria', 'species': 'Matsutake' }, { 'commonName': 'Mica Cap', 'genus': 'Coprinus', 'species': 'Micaceus' }, { 'commonName': 'Monkey Head', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Morel', 'genus': 'Morchella', 'species': 'Esculenta' }, { 'commonName': 'Nameko', 'genus': 'Pholiota', 'species': 'Nameko' }, { 'commonName': 'Old Man Of The Woods', 'genus': 'Strobilomyces', 'species': 'Confusus' }, { 'commonName': 'Orange-Capped Scaber Stalk', 'genus': 'Leccinum', 'species': 'Aurantiacum' }, { 'commonName': 'Oregon White Truffle', 'genus': 'Tuber', 'species': 'Gibbosum' }, { 'commonName': 'Oyster Mushroom', 'genus': 'Pleurotus', 'species': 'Ostreatus' }, { 'commonName': 'Paddy Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea' }, { 'commonName': 'Painted Suillus', 'genus': 'Suillus', 'species': 'Pictus' }, { 'commonName': 'Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Procera' }, { 'commonName': 'Peck', 'genus': 'Agaricus', 'species': 'Rodmanii' }, { 'commonName': 'Pig\'s Ear', 'genus': 'Gomphus', 'species': 'Clavatus' }, { 'commonName': 'Pine Mushroom', 'genus': 'Tricholoma', 'species': 'Magnivelare' }, { 'commonName': 'Pom-Pom', 'genus': 'Hericium', 'species': 'Erinaceus' }, { 'commonName': 'Porcini', 'genus': 'Boletus', 'species': 'Edulis' }, { 'commonName': 'Puffball', 'genus': 'Calvatia', 'species': 'Gigantea' }, { 'commonName': 'Red-Tipped Coral Mushroom', 'genus': 'Ramaria', 'species': 'Botrytis' }, { 'commonName': 'Regal Bolete', 'genus': 'Boletus', 'species': 'Regius' }, { 'commonName': 'Russula Like Waxy Cap', 'genus': 'Hygrophorus', 'species': 'Russula' }, { 'commonName': 'Salt-Loving Mushroom', 'genus': 'Agaricus', 'species': 'Bernardii' }, { 'commonName': 'Scaber Stalk', 'genus': 'Leccinum', 'species': 'Scaber' }, { 'commonName': 'Shaggy Mane', 'genus': 'Coprinus', 'species': 'Comatus' }, { 'commonName': 'Shaggy Parasol Mushroom', 'genus': 'Lepiota', 'species': 'Rhacodes' }, { 'commonName': 'Shellfish-Scented Russula', 'genus': 'Russula', 'species': 'Xerampelina' }, { 'commonName': 'Shiitake', 'genus': 'Lentinus', 'species': 'Edodes' }, { 'commonName': 'Short-Stalked Slippery Cap', 'genus': 'Suillus', 'species': 'Brevipes' }, { 'commonName': 'Short-Stem Russula', 'genus': 'Russula', 'species': 'Delica' }, { 'commonName': 'Silver Ear Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Smooth Chanterelle', 'genus': 'Cantharellus', 'species': 'Lateritius' }, { 'commonName': 'Snow Mushroom', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Snowbank False Morel', 'genus': 'Gyromitra', 'species': 'Gigas' }, { 'commonName': 'Sponge', 'genus': 'Morchella', 'species': 'Esculenta' }, { 'commonName': 'Spring Agaricus', 'genus': 'Agaricus', 'species': 'Bitorquis' }, { 'commonName': 'Straw Mushroom', 'genus': 'Volvariella', 'species': 'Volvacea' }, { 'commonName': 'Summer Truffle', 'genus': 'Tuber', 'species': 'Aestivum' }, { 'commonName': 'Sweet Tooth', 'genus': 'Hydnum', 'species': 'Repandum' }, { 'commonName': 'Sweetbread Mushroom', 'genus': 'Clitopilus', 'species': 'Prunulus' }, { 'commonName': 'Tacky Green Russula', 'genus': 'Russula', 'species': 'Aeruginea' }, { 'commonName': 'Texas White Truffle', 'genus': 'Tuber', 'species': 'Texensis' }, { 'commonName': 'The Prince', 'genus': 'Agaricus', 'species': 'Augustus' }, { 'commonName': 'Tree Ear', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Tricholoma Magnivelare', 'genus': 'Armillaria', 'species': 'Ponderosa' }, { 'commonName': 'Trumpet Chanterelle', 'genus': 'Cantharellus', 'species': 'Tubaeformis' }, { 'commonName': 'Trumpet Of Death', 'genus': 'Craterellus', 'species': 'Cornucopioides' }, { 'commonName': 'Two-Colored Bolete', 'genus': 'Boletus', 'species': 'Bicolor' }, { 'commonName': 'Umbrella Polypore', 'genus': 'Polyporus', 'species': 'Umbellatus' }, { 'commonName': 'Variant Of B. Edulis', 'genus': 'Boletus', 'species': 'Pinicola' }, { 'commonName': 'Velvet Foot', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'White Chanterelle', 'genus': 'Cantharellus', 'species': 'Subalbidus' }, { 'commonName': 'White Jelly Fungus', 'genus': 'Tremella', 'species': 'Fuciformis' }, { 'commonName': 'Wine-Cap Stropharia', 'genus': 'Stropharia', 'species': 'Rugosoannulata' }, { 'commonName': 'Winter Mushroom', 'genus': 'Flammulina', 'species': 'Velutipes' }, { 'commonName': 'Wood Ear Mushroom', 'genus': 'Auricularia', 'species': 'Polytricha' }, { 'commonName': 'Zeller\'s Bolete', 'genus': 'Boletus', 'species': 'Zelleri' }];

const GOOGLEMAPS_API_KEY = 'AIzaSyABVyjzmdlA8yrWGI73K62cMmqo5_bw7rs';

const URL = "/observations/";

let globalFileHolder = [];
let JWT = localStorage.getItem('JWT');

const OBSERVATION_FORM = `
<form enctype="multipart/form-data" method="post" id="new-observation" class='grid wrapper'>
<input type="hidden" name="id">
<input type="hidden" name="userId">
<input type="hidden" name="featured" id="featured-input">
<input type="hidden" name="filesToBeDeleted">
<input type="hidden" name="address" id="address-input">
<input type="hidden" name="lat" id="lat-input">
<input type="hidden" name="lng" id="lng-input">
<input type="hidden" name="genus" id="genus-input">
<input type="hidden" name="species" id="species-input">
<div  class="image area">
		<button onclick="run(event,selectFiles,[event])">Add Images</button>
		<input onchange="run(event,receiveFiles,[event])" id="file-input" name="fileInput" type="file"  style="display:none;" multiple accept="image/*">
		<div class="img-preview">
		</div>
</div>
<div class="details area">
	<div class="location area">
	<div class="address-span">
			<span class="inline label">Location</span>
			<span id="address">Unknown</span>
		</div>
		<div id="latlng" class="address-span">
			<span class="inline label">lat</span>
			<span id="lat">Unknown</span>
			<span class="inline label">long</span>
			<span id="lng">Unknown</span>
		</div>
		<div class="date-time">
			<span class="floating label">Date</span>
			<input name="obsDate" id="obs-date-input" type="date">
		</div>
		<div class="date-time">
			<span class="floating label">Time</span>
			<input name="obsTime" id="obs-time-input" type="time">
		</div>
		<span id="location-text"></span>
		<button onclick="run(event,enterLocation)">Choose Location</button>
		</div>
	<div class="name area">
		<div class="input-wrapper">
				<input name="nickname" id="nickname-input" type="text">
				<span class="floating label">Nickname</span>
		</div>
		<div class="input-wrapper">
				<datalist id="commonName-datalist"></datalist>
				<input name="commonName" id="common-name-input" onchange="populateNames(event)" type="text" list="commonName-datalist">
				<span class="floating label">Common Name</span>
		</div>
		<div class="classification-details hidden">
			<div class="fungi">
				<span class="inline label">genus</span>
				<span id="genus">Unknown</span>
				<span class="inline label">species</span>
				<span id="species">Unknown</span>
			</div>
			<div class="confidence">
				<span class="inline label">Identification Confidence</span>
				<label class="input-container">
					<input name="confidence" type="radio" value="0" title="I guarantee this is wrong">
					<span class="checkmark">0</span>
				</label>
				<label class="input-container">
					<input name="confidence" type="radio" value="1" title="Shot in the dark">
					<span class="checkmark">1</span>
				</label>
				<label class="input-container">
					<input name="confidence" type="radio" value="2" title="Maybe, sort-of, kind-of">
					<span class="checkmark">2</span>
				</label>
				<label class="input-container">
					<input name="confidence" type="radio" value="3" title="Sounds like it could be">
					<span class="checkmark">3</span>
				</label>
				<label class="input-container">
					<input name="confidence" type="radio" value="4" title="I feel very good about this">
					<span class="checkmark">4</span>
				</label>
				<label class="input-container">
					<input name="confidence" type="radio" value="5" title="I'd bet my life">
					<span class="checkmark">5</span>
				</label>
			</div>
		</div>
	</div>
</div>
</form>
`;

const LOCATION_NOTES = `
	<a class="toggle-control" onclick="run(event,reveal,['.location.notes', event])">
		Location Notes
	</a>
	<div class="location notes reveal">
		<textarea name="locationNotes" id="locationNotes" rows="5" placeholder="Location Notes"></textarea>
	</div>
	`;
const MUSHROOM_NOTES = `
	<a class="toggle-control" onclick="run(event,reveal,['.mushroom.notes',event])">Mushroom Notes</a>
	<div class="mushroom notes reveal">
		<textarea name="mushroomNotes" id="mushroomNotes" placeholder="Mushroom Notes"></textarea>
	</div>
	`;

function run(event, passthrough, params=[]) {
	event.preventDefault();
	return passthrough(...params, event);
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
	// event.preventDefault();
	const obsTime = await getTime(new Date());
	const obsDate = await getDate(new Date());
	updateValue('obsTime', obsTime);
	updateValue('obsDate', obsDate);
	closePopup(event,'address-opts');
}

function geolocate() {
	loading(true, 'Getting Current Location');
	navigator.geolocation.getCurrentPosition((position) => {
		const coords = { 
			'lat': position.coords.latitude, 
			'lng': position.coords.longitude };
		const obs = { 'location': coords };
		updateLocation(obs, 'Current Location');
		closePopup(event,'address-opts');
		loading(false);
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

function updateSpan(spanId,innerHTML) {
	// if (event) event.preventDefault;
	const span = document.getElementById(spanId);
	span.innerHTML = innerHTML;
}


function populateNames(event) {
	const inputName = event.target.attributes.name.value;
	const inputValue = event.target.value;
	let mushroom;
	for (let i = 0; i < MUSHROOMS.length; i++) {
		if (inputValue == MUSHROOMS[i][inputName]) {
			mushroom = MUSHROOMS[i];
		};
	};
	if (mushroom) {
		let { commonName, genus, species } = mushroom;
		document.querySelector('.classification-details').classList.remove('hidden');
		updateValue('commonName', commonName);
		updateValue('genus', genus);
		updateValue('species', species);
		updateSpan('genus', genus);
		updateSpan('species', species);
	} else {
		document.querySelector('.classification-details').classList.add('hidden');
		updateValue('genus', '');
		updateValue('species', '');
		updateSpan('genus', '');
		updateSpan('species', '');

	}



}

function selectFiles(event) {
	// event.preventDefault();
	document.querySelector("#file-input").click();
}

function click(querySelector) {
	document.querySelector(querySelector).click();
}

const loadURLFromImage = (image) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onloadend = (event) => {
		resolve(event.target.result);
	};
	reader.readAsDataURL(image);
});

const createImage = (url) => new Promise((resolve, reject) => {
	const image = new Image();
	image.onload = () => {
		resolve(image);
	};
	image.src = url;
});

function dataURLtoBlob(dataurl) {
	const arr = dataurl.split(',');

	//Extract out the mime type of the image which is between the colon and the semi-colon
	const mime = arr[0].match(/:(.*?);/)[1];

	// Converts the base64 data to binary
	const binaryString = atob(arr[1]);
	const size = binaryString.length;
	const byteArray = new Uint8Array(size);

	for(let i = 0; i < size; i++)
		byteArray[i] = binaryString.charCodeAt(i);

	return new Blob([byteArray], {
		type: mime
	});
}

async function resizeImage(file, filename, url) {
	console.log('resizing ' + file.size + " size image");

	const img = await createImage(url);
	const canvas = document.createElement('canvas');

	const conversionRatio = 1200 / Math.max(img.width, img.height);
	canvas.height = conversionRatio * img.height;
	canvas.width = conversionRatio * img.width;

	const myPica = new pica({ features: ['js', 'wasm', 'ww', 'cid'] });
	await myPica.resize(img, canvas);

	const canvasBlob = await myPica.toBlob(canvas, 'image/jpeg', 90);
	let newUrl = await loadURLFromImage(canvasBlob);
	const exifStr = piexif.dump(piexif.load(url)); // Get exif data as object. 
	const finalUrl = piexif.insert(exifStr, newUrl); // Insert exif into JPEG. If jpegData is DataURL, returns JPEG as DataURL. Else if jpegData is binary as string, returns JPEG as binary as string.

	return new File([dataURLtoBlob(finalUrl)], filename, { type: "image/jpeg" });
}

function previewFile(file, filename, url) {
	// file.name = new Date().getTime() + file.name;
	// const filename = file.name;
	const featured = document.getElementsByName('featured')[0];
	// const reader = new FileReader();
	// reader.onloadend = function (event) {
		const previewImg = document.getElementById(`${filename}-thumb`);
		previewImg.src = url;
		// if no currently featured image, make current image featured
		if (!featured.value) {
			featured.value = filename;
			previewImg.classList.add('featured-image');
		// }
	};
	// reader.readAsDataURL(file);
}

function disableSubmitButton(bool) {
	const target = document.getElementById('save-obs-submit');
	if (bool) target.disabled = true;
	else target.disabled = false;
}

async function receiveFiles(event) {
	// event.preventDefault();
	disableSubmitButton(true);
	const files = [...event.target.files];
	// for (let file of files) {
	const allResolved = await Promise.all(
		files.map(async file => {
			const filename = new Date().getTime() + "." + file.name;
			insertThumbnailStructure(filename);
			const url = await loadURLFromImage(file);
			previewFile(file, filename, url);
			exifFromFile(file, filename);

			const newFile = await resizeImage(file, filename, url);
			globalFileHolder.push(newFile);

		}));
	disableSubmitButton(false);
}

async function resolveLocation(event) {
	console.log(event);
	const address = event.target.previousElementSibling.value;
	const formattedAddress = address.split(' ').join('+');
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${GOOGLEMAPS_API_KEY}`;
	const response = await fetch(url).then(res => res.json());
	const {geometry} = response.results["0"];
	updateLocation(geometry, 'Manual Entry');
	closePopup(event, 'address-opts');
}

function enterLocation() {
	const form = `
		<div class="address-buttons">
			<span class="floating label">Location Selection Options</span>
			<div class="inline-form input-wrapper">
				<span class="floating label">Manual Entry</span>
				<input type="text" name="address-entry" id="address-entry" placeholder=" ">
				<button onclick="run(event,resolveLocation,[event])">go</button>
			</div>
				<span class="inline label center">or</span>
			<span class="address-span">select <img src="/media/uselocation.png" class="inline-img"> from an image thumbnail</span>
				<span class="inline label center">or</span>
			<button onclick="run(event,geolocate)">Use Current Location</button>
			<button onclick="run(event,useCurrentTime)">Use Current Time</button>
		</div>
		<button onclick="run(event,closePopup,[event,'address-opts'])">Close</button>`;
	showPopup(form, 'address-opts');
	const input = document.getElementById('address-entry');
	const autocomplete = new google.maps.places.Autocomplete(input);
}

async function updateLocation(obs, locationSource) {
	const addressString = await getAddress(obs);
	updateValue('lat', obs.location.lat.toFixed(6));
	updateValue('lng', obs.location.lng.toFixed(6));
	updateValue('address', addressString);
	updateSpan('lat', obs.location.lat.toFixed(6));
	updateSpan('lng', obs.location.lng.toFixed(6));
	updateSpan('address', addressString);
	updateExif("Location extracted from " + locationSource, "no error");
	if(obs.date) {
		const date = new Date(obs.date);
		const year = date.getFullYear(),
			month = ("0" + (date.getMonth() + 1)).slice(-2),
			day = ("0" + date.getDate()).slice(-2);
		const obsDate = `${year}-${month}-${day}`;
		const obsTime = date.toTimeString().substring(0,5) ;
		updateValue('obsDate', obsDate);
		updateValue('obsTime', obsTime);
		updateExif("Time, Date and Location extracted from photo", "no error");

	}
}

function locationFromThumbnail(event) {
	// event.preventDefault();
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
		headers: {
			'Authorization': 'Bearer ' + JWT
		}
	});
}

function deleteFile(event) {
	// event.preventDefault();
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
		<input type="image" src="/media/delete.png" onclick="run(event,deleteFile,[event])" data-filename="${filename}" alt="Remove Image" title="Remove Image" class="img-action delete">
		<input type="image" src="/media/featured.png" onclick="run(event,makeFeatured,[event])" data-filename="${filename}" alt="Use as Featured Image" title="Use as Featured Image" class="img-action featured">
	</div>
			`;
	const thumbDiv = document.querySelector('.img-preview');
	thumbDiv.innerHTML += newImg;
}

function makeFeatured(event) {
	// event.preventDefault();
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

function addGpsAction (lat, lng, filename, date) {
	const target = document.getElementById(`${filename}-div`);
	const button = `<input type="image"
					src="/media/uselocation.png" 
					onclick="run(event,locationFromThumbnail,[event])" 
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

	const startSrc = event.style.backgroundImage
	const startContent = event.innerHTML;
	// const startContent = 

	const startBox = `
		id="observation-detail";
		value="${id}";`;
	viewSection.innerHTML = `<div ${startBox}>${startContent}</div>`;
	const observationDiv = document.querySelector('#observation-detail');
	requestAnimationFrame(() => {
		observationDiv.setAttribute("style", 
			`position:fixed;
			top: ${startRect.y}px;
			left: ${startRect.x}px;
			width: ${startRect.width}px;
			height: ${startRect.height}px;
			background-color: rgba(0, 0, 0);`);
		popup.classList.remove('hidden');
		observationDiv.classList.add('observationBox');
		viewSection.classList.remove('hidden');
		requestAnimationFrame(() => {
			observationDiv.removeAttribute("style");
			// observationDiv.querySelector('img').classList.add('obs-img');
		});
	});
}

function payloadFromToken(token) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace('-', '+').replace('_', '/');
	return JSON.parse(window.atob(base64));
}

function getObservation(targetId) {
	return fetch(URL + targetId, { 
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + JWT,
		}
})
		.then((res) => res.json());
}

function makeHero(event){
	// event.preventDefault();
	const {dataset, currentSrc} = event.currentTarget;
	const {filename, url} = dataset;
	const hero = document.querySelector('.obs-hero');
	hero.src = currentSrc;
	hero.src = url;
	const buttons = document.querySelectorAll('.img-button');
	for (let btn of buttons) btn.classList.remove('featured-image');
	event.currentTarget.classList.add('featured-image');
}

function closeObservation (){
	// if (event) event.preventDefault();
	// // event.preventDefault();
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
	const time = date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})
	if (opt) {
		if (opt = "date") return `${dayname} ${month} ${day}, ${year}`;
	} else return `${dayname} ${month} ${day}, ${year} at ${time}`;
}

function editFromViewObservation (event, id) {
	// if (event) event.preventDefault();
	closeObservation();
	editObservation(event, id);
}

function displayObservation(obs, src) {
	// wrapper and options
	let obsRender = `
		<div class="observation-actions">
			<input type="image" src="/media/edit.png" title="Edit Observation" alt="Edit Observation" onclick="run(event,editFromViewObservation,[event,'${obs.id}'])" class="obs-view-action edit">
			<input type="image" src="/media/close.png" title="Close Observation" alt="Close Observation" onclick="run(event,closeObservation)" class="obs-view-action close">
		</div>
		<div class="obs-detail" value='${obs.id}'>`;
	
	// hero image
	// start with thumbnail src
	let hero = src;
	obsRender += `<img class="obs-hero" src="${hero}">`;

	// image carousel
	if (obs.photos.files.length>0) {
		obsRender += `<div class="obs-carousel">`;
		for (let [i,file] of obs.photos.files.entries()) {
			if (i === 0) 
				obsRender += `<img 
					class="img-button featured-image" 
					src="${file.thumbnail}"
					data-filename="${file.filename}"
					data-url="${file.url}"
					onclick="run(event,makeHero,[event])"
					onmouseover="run(event,makeHero,[event])"
					>`;
			else obsRender += `<img 
					class="img-button" 
					src="${file.thumbnail}"
					data-filename="${file.filename}"
					data-url="${file.url}"
					onclick="run(event,makeHero,[event])"
					onmouseover="run(event,makeHero,[event])"
					>`;
		}
		obsRender += `</div>`; // .image.area
	}

	obsRender += `<div>`; // block wrapper

	// date and time		
	if (obs.obsDate) {
		const dateStr = dateString(obs.obsDate);
		obsRender += `
		<div class="date-time">
			<span class="inline label">
				observed 
			</span>
			${dateStr}
		</div>`;
	};

	// location
	if (obs.location) {
		obsRender += `
			<div class="location">
				<span class="inline label">
					around 
				</span>
				${obs.location.address}
			</div>`;
		if (obs.notes.locationNotes) obsRender += `
			<div>
				<span class="label">
					location notes
				</span>
				<span class="notes">
					${obs.notes.locationNotes}
				</span>
			</div>`;
	};

	// fungi classification
	if (obs.fungi.nickname || obs.fungi.commonName) 
		obsRender += `<div class="classification">`;
	if (obs.fungi.nickname) obsRender +=
		`<span class="title">
			<span class="label red">
				nickname
			</span>
			${obs.fungi.nickname}
		</span>`;
	if (obs.fungi.commonName) obsRender +=
		`<span class="title">
			<span class="label red">
				identification
			</span>
			${obs.fungi.commonName}
		</span>`;
	if (obs.fungi.genus && obs.fungi.species) obsRender += `
		<div>
		<span class="fungi">
			${obs.fungi.genus}  ${obs.fungi.species}
		</span>
		</div>`;
	if (Number.isInteger(obs.fungi.confidence)) obsRender += `
		<div class="confidence-report">
			identified with ${obs.fungi.confidence * 20}% confidence
		</div>`;
	if (obs.notes.mushroomNotes) obsRender += `
		<span class="label">
			mushroom notes
		</span>
		<span class="notes">
			${obs.notes.mushroomNotes}
		</span>`;
	if (obs.fungi.nickname || obs.fungi.commonName) 
		obsRender += `</div>`; // .classification

	obsRender += `</div>
		<img src="${staticMapUrl(obs.location)}" class="static-map">
		`; // bloack wrapper

	// action buttons
	obsRender += `
		<div class="obs-buttons">
			<button onclick="run(event,editFromViewObservation,[event,'${obs.id}'])">Edit</button>
			<button onclick="run(event,closeObservation)">Close</button>
		</div>
		`;

		// closing wrapper and sending html
	obsRender += `</div>`;
	document.querySelector('#observation-detail').innerHTML = obsRender;


	// replace thumbnail src with fullsize src
	if (obs.featured) {
		const filename = obs.featured;
		for (let file of obs.photos.files) if (file.filename === filename) hero = file.url;
	} else if (obs.photos.files[0]) hero = obs.photos.files[0].url;
	document.querySelector('.obs-hero').src = hero;

}

function closePopup (event, popupId) {
	// if (event) event.preventDefault();
	const popup = document.getElementById(`${popupId}-popup`);
	const alert = document.getElementById(`${popupId}-alert`);
	const page = document.querySelector('main');
	page.removeChild(popup);
	page.removeChild(alert);
}

function showPopup (content, popupId) {
	// if (event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// }
	const popup = document.createElement('section');
	const alert = document.createElement('section');
	const page = document.querySelector('main');
	popup.setAttribute('id', `${popupId}-popup`);
	alert.setAttribute('id', `${popupId}-alert`);
	popup.classList.add('popup');
	alert.classList.add('popup-alert');
	alert.innerHTML = content;
	page.insertAdjacentElement('beforeend', popup);
	page.insertAdjacentElement('beforeend', alert);
	popup.onclick = (event) => {
		popup.onclick = closePopup(event,popupId);
	};
	popup.onkeydown = (event) => {
		if ( event.keyCode == 27 ) {
			console.log('esc pressed');
			closePopup(event,popupId);
		}
	};
}

function lisFromObjs(arr) {
	let lis = "";
	for (let li of arr) lis += `
		<li>
			<a onclick="${li.onclick}">
				${li.li}
			</a>
		</li>`
	return lis;
}

function refreshNavMenu() {
	let menuItems = [];
	if (JWT) {
		menuItems = [
			{li: "View Observations", onclick: "getAndDisplayObservations(event)"},
			{li: "Add Observation", onclick: "newObservation()"},
			// {li: "Settings", onclick: "settings()"},
			{li: "Logout", onclick: "run(event,logout)"}
		];
	} else {
		menuItems = [
			{li: "Login", onclick: "loginForm(event)"},
			{li: "Sign Up", onclick: "signupForm()"}
		]
	}
	const nav = document.querySelector('ul.nav-menu');
	const lis = lisFromObjs(menuItems);
	nav.innerHTML = lis;
}

function goHome() {
	if (JWT) getAndDisplayObservations();
	else splashPage();
}

function splashPage() {
	const content = `
	<h2>Hello</h2>
	<p>And welcome, Fungi Enthusiast.</p>
	<p><strong>Mushroom Journal</strong> is a photo-forward personal journal of fungal observations.</p>
	<p>Please consider signing up for an account below, or poking around the demo.</p>
	<p>And rest assured, we will <i>never</i> share the location of your observations without your consent.
		We want to make sure that honey-hole of morels you found will be waiting for you again next year!</p>
	<button onclick="run(event,loginForm,[event,'demo-user'])">LOGIN as Demo User</button>
	<button onclick="run(event,loginForm)">LOGIN</button>
	<button onclick="run(event,signupForm)">SIGN UP for an Account</button>
	`;
	let splash;
	if (document.querySelector('section.splash-page')) splash = document.querySelector('section.splash-page')
	else {
		splash = document.createElement('section');
		document.querySelector('main').insertAdjacentElement('beforeend', splash);
	};
	splash.classList.add('hidden', 'splash-page', 'popup-alert');
	splash.innerHTML = content;
	displaySection('.splash-page');
}

function settings() {
	// alert('soon, maybe');
	const payload = payloadFromToken(JWT);
	// const prettyPayload = JSON.stringify(payload.user, null, 2);
	let prettyPayload = "";
	// JSON.stringify(payload.user).substring(1,-1).split(',').forEach((el) => prettyPayload += '<li>' + el + '</li>');
	for (let el in payload.user) prettyPayload += `<li>${el}: ${payload.user[el]}</li>`;
	const content = `
		<h2>User Details</h2>
		<p>from JWT payload</p>
		<p>${prettyPayload}</p>`;
	showPopup(content, "settings");
}

function logout() {
	// if (event) event.preventDefault();
	JWT = "";
	localStorage.setItem('JWT', "");
	refreshNavMenu();
	splashPage();
}

function jsonFromForm(formId) {
	let obj = {};
	const form = document.getElementById(formId);
	const elements = form.querySelectorAll("input, select, textarea");
	for (let i = 0; i < elements.length; ++i) {
		const element = elements[i];
		const name = element.name;
		const value = element.value;
		if (name && value) {
			obj[name] = value;
		}
	}
	return JSON.stringify(obj);
}

function refreshToken () {
	const token = JWT;
	fetch('./api/auth/refresh', {
		method: 'POST',
// 		body: formData,
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + JWT
		  }
	})
	.then(res => res.json())
	.then(authToken => {
		localStorage.setItem('JWT', authToken.authToken);
		JWT = authToken.authToken;
	})
	.catch(error => console.error('Error', error));
}

function login(event,popupId) {
	// event.preventDefault();
	const formData = jsonFromForm(popupId);
	fetch('./api/auth/login', {
		method: 'POST',
		body: formData,
		headers: {
			'content-type': 'application/json',
		  }
	})
	.then(res => {
		if (!res.ok) {
			res.json()
				.then(res => {
					const { message } = res;
					displayFormError(message);
				})
		} else { 
			res.json()
				.then(res => {
					// assign JWT to localStorage
					localStorage.setItem('JWT', res.authToken);
					JWT = res.authToken;
					closePopup(event, popupId);
					refreshNavMenu();
					goHome();
				})
		};
	})
	.catch(error => console.error('Error:', error));
}

function displayFormError(message, location) {
	// clear out previous errors
	document.querySelectorAll('input.input-error')
		.forEach(el => el.classList.remove('input-error'));
	document.querySelectorAll('span.error')
		.forEach(el => el.remove());
	const html = `<span class="error">${message}</span>`;
		if (location) {
			const input = document.querySelector(`input[name=${location}]`);
			input.insertAdjacentHTML('afterend', html);
			input.classList.add('input-error');
		} else {
			const inputs = document.querySelectorAll('form');
			inputs[inputs.length-1].insertAdjacentHTML('beforebegin', html);
		}
}

function signup (event, popupId) {
	// event.preventDefault();
	// const form = document.querySelector('#signup-form');
	const formData = jsonFromForm(popupId);
	fetch('/api/users', {
		method: 'POST',
		body: formData,
		headers: {
			'content-type': 'application/json'
		  }
	})
		.then(res => {
			if (!res.ok) {
				res.json()
					.then(res => {
						// console.log(text.location);
						const { message, location } = res;
						displayFormError(message, location);
					})
			}
			else {
				closePopup(event, popupId);
				loginForm(event);
				const form = document.getElementById('login-form-alert');
				const alert = `
					<h3>Account Successfully Created</h3>
					<p>Please Login below to continue</p>`;
				form.insertAdjacentHTML('afterBegin', alert);
				}
		})
		.catch(error => {
			console.error('Error:', error);
		})
}

function loginForm(event, str) {
	// if (event) event.preventDefault();
	const popupId = 'login-form';
	const form = `
		<h2>Login</h2>
		<form enctype="text/plain" method="post" onsubmit="run(event,login,[event,'${popupId}'])" id="${popupId}" class="alert-form">
		<span class="required">* required</span>
		<input name="username" type="text" placeholder="username" required>
		<span class="required">* required</span>
		<input name="password" type="password" placeholder="password" required>
		<button type="submit">Login</button>
		<button onclick="run(event,closePopup,[event,'${popupId}'])">Cancel</button>
		</form>`;
	showPopup(form, popupId);
	if (str === "demo-user") {
		const cred = {username: "demo-user", password: "demopassword"};
		for(let name in cred) updateValue(name, cred[name]);
	}
}

function signupForm () {
	// event.preventDefault();
	// event.stopPropagation();
	const popupId = 'signup-form';
	const form = `
		<h2>Signup</h2>
		<form enctype="text/plain" method="post" onsubmit="run(event,signup,[event,'${popupId}'])" id="${popupId}" class="alert-form">
		<input name="firstName" type="text" placeholder="first name">
		<input name="lastName" type="text" placeholder="last name">
		<span class="required">* required</span>
		<input name="username" type="text" placeholder="username" required>
		<span class="required">* required</span>
		<input name="email" type="email" placeholder="email" required>
		<span class="required">* required</span>
		<input name="password" type="password" placeholder="password" required>
		<button type="submit">Sign Up</button>
		<button onclick="run(event,closePopup,[event,'${popupId}'])">Cancel</button>
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
	// get src of clicked observation
	const regExp = /\(([^)]+)\)/;
	const src = regExp.exec(event.style.backgroundImage)[1].slice(1,-1);

	const id = event.attributes.value.value;
	// const src = event.style.backgroundImage //"url("https://fungi-files-observation-images.s3.amazonaws.com/5a97071c6a9dce2774b5ea4e/1519847208985.jpg")"
	annimateObservation(event, id);
	// const observation = getObservation(id);
	// observation.then((obs) => {
	// })	
	getObservation(id)
		.then(res => {
			// displayObservation(res, src);
			setTimeout((() => displayObservation(res, src)),250);
			// displayObservation(res, src);
			// console.log("res", res);
		});
}

function getAddress(obs) {
	return new Promise((res, rej) => {
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
			res(addressString);
		});
	});
}

function newObservation() {
	const header = "<h2>Add New Observation</h2>";
	const newObs = document.querySelector('section.new.observation');
	const footer = document.createElement('div');
		footer.classList.add('form-buttons');
		footer.innerHTML = `
			<button id="save-obs-submit" onclick="run(event,submitNewObservation,[event])">Submit New Observation</button>
			<button onclick="run(event,getAndDisplayObservations,[event])">Cancel</button>`;
	newObs.innerHTML = header + OBSERVATION_FORM;
	// const form = document.getElementById('new-observation');
	const form = document.querySelector('div.details.area');
	form.insertAdjacentElement('beforeend', footer);
	globalFileHolder = [];
	populateDatalists();
	// const input = document.getElementById('address-entry');
	// const autocomplete = new google.maps.places.Autocomplete(input);
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
		const loadingShade = document.createElement('div');
			loadingShade.classList.add('popup');
			loadingShade.id = 'loading-shade';
		const loadingScreen = document.createElement('div');
			loadingScreen.classList.add('popup-alert');
			loadingScreen.id = 'loading-screen';
		loadingScreen.innerHTML = `
			<div class="popup-alert loading">
				<img src="media/loading.gif" class="loading-img">
				<span class="loading-text">${text}<span>
			</div>`;
		document.querySelector('body').insertAdjacentElement('beforeend', loadingShade);
		document.querySelector('body').insertAdjacentElement('beforeend', loadingScreen);
		} 
	else if (!state) {
		const loadingShade = document.getElementById('loading-shade');
		loadingShade.parentNode.removeChild(loadingShade);
		const loadingScreen = document.getElementById('loading-screen');
		loadingScreen.parentNode.removeChild(loadingScreen);
	}
	else console.error('State is boolean, must be either true or false');
}

//directly from HTML onclick event
async function saveObservation(event, id) {
	// event.preventDefault();
	loading(true, 'Saving Changes to Observation');
	let form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');
	globalFileHolder.forEach(file => formData.append('newFiles', file, file.name));
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

	return new Promise(res => {
		updateObservation(id, formData)
	})
	.then(res => {
		document.querySelector('section.edit.observation').innerHTML = "";	
		loading(false);
	});


}

function submitNewObservation(event) {
	// event.preventDefault();
	loading(true, 'Saving New Observation');
	const form = document.querySelector('#new-observation');
	let formData = new FormData(form);
	formData.delete('fileInput');

	const userId = payloadFromToken(JWT).user.userId.toString();
	formData.set('userId', userId);

	globalFileHolder.forEach(file => formData.append('newFiles', file));
	globalFileHolder = [];

	publishNewObservation(formData)
}

window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        closeObservation();
    }
};

function handleObservationChange(res) {
	if (!res.ok) {
		res.json()
			.then(res => {
				const { message, location } = res;
				displayFormError(message, location);
				loading(false);
			})
	} else { 
		res.json()
			.then(res => {
				document.querySelector('section.new.observation').innerHTML = "";	
				goHome();
				document.querySelector('section.new.observation').innerHTML = "";	
				loading(false);
			})
			.catch(error => {
				loading(false);
				console.error('Error:', error);
				});
	};
}

function updateObservation(id, formData) {
	fetch(URL + id, {
		method: 'PUT',
		body: formData,
		headers: {
			'Authorization': 'Bearer ' + JWT
		}
	})
	.then((res) => {
		handleObservationChange(res);
	})
	.catch(error => console.error('Error:', error));
}

function publishNewObservation(formData) {
	fetch(URL, {
		method: 'POST',
		body: formData,
		headers: {
			'Authorization': 'Bearer ' + JWT,
		}
	})
	.then(res => {
		handleObservationChange(res);
	})
	.catch(error => console.error('Error:', error));
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
	// event.preventDefault();
	loading(true, 'Deleting Observation');
	fetch((URL + obsId), {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + JWT,
		}
	})
		// 		.then((res) => res.json())
		.then((res) => {
			document.querySelector('section.edit.observation').innerHTML = "";
			getAndDisplayObservations(event);
			loading(false);
		})
		.catch(error => console.error('Error:', error))
}


async function populateFields(obs) {
	const { id, userId, fungi, location, notes, photos, featured } = obs;
	const { commonName, genus, species, nickname, confidence } = fungi;
	const { lat, lng, address } = location;
	const { mushroomNotes, habitatNotes, locationNotes, speciminNotes } = notes;
	// const { featured } = photos;
	// if (obs.obsDate) {
	const obsTime = await getTime(new Date(obs.obsDate));
	const obsDate = await getDate(new Date(obs.obsDate));
	// };
	const possibleNames = { obsTime, obsDate, id, userId, commonName, genus, species, nickname, lat, lng, address, featured };
	for (let n in possibleNames) if (possibleNames[n]) updateValue(n, possibleNames[n]);
	for (let n in notes) if (notes[n]) document.getElementById(n).innerHTML = notes[n];
	if (Number.isInteger(confidence)) for (let i of document.querySelectorAll(`[name="confidence"]`)) if (i.value == confidence) i.checked = true;
	const possibleSpans = [ 'address', 'lat', 'lng', 'genus', 'species' ];
	for (let span of possibleSpans) if (possibleNames[span]) updateSpan(span, possibleNames[span]);
	if (obs.fungi.species && obs.fungi.genus) document.querySelector('.classification-details').classList.remove('hidden');
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
	// event.preventDefault();
	event.stopPropagation();
	const header = "<h2>Edit Observation</h2>";
	const newObs = document.querySelector('section.edit.observation');
	const footer = document.createElement('div');
		footer.classList.add('form-buttons');
		footer.innerHTML = `
			<button id="save-obs-submit" onclick="run(event,saveObservation,[event,'${obsId}'])">Save Changes</button>
			<button onclick="run(event,deleteObservation,[event,'${obsId}'])">Delete Observation</button>
			<button onclick="run(event,getAndDisplayObservations,[event])">Cancel</button>`;
	newObs.innerHTML = header + OBSERVATION_FORM;
	// const form = document.getElementById('new-observation');
	const form = document.querySelector('div.details.area');
	form.insertAdjacentElement('beforeend', footer);
	getObservation(obsId).then(async res => {
		await populateFields(res);
		res.photos.files.forEach(file => populateThumbnail(file));
		// 		populateThumbnails(res.photos.urls);
	});
	globalFileHolder = [];
	populateDatalists();
	// const input = document.getElementById('address-entry');
	// const autocomplete = new google.maps.places.Autocomplete(input);
	document.querySelector('.edit.observation').classList.remove('hidden');
	document.getElementById('form-popup').classList.remove('hidden');
// 	displaySection('.edit.observation');
}

function showInfo(event) {
	// should be for touchscreen enabled devices only
	// event.preventDefault();
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
	<div style=background-image:url("${thumbnail}" class="obs-list-item" value='${obs.id}' onclick="run(event,viewObservation,[this])">
		<input type="image" src="/media/info.png"
			onclick="run(event,showInfo,[event])"
			class="show-info-button"
			alt="Show more information" title="Show more information">
		<input type="image" src="/media/edit.png" 
			onclick="run(event,editObservation,[event,'${obs.id}'])" 
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
			`<span class="title"><span class="label">nickname</span>"${obs.fungi.nickname}"</span>`;
	if (obs.fungi.commonName) obsRender +=
			`<span class="title"><span class="label">common name</span>${obs.fungi.commonName}</span>`;
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
	fetch(URL, { 
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + JWT,
			}
		})
		.then((res) => {
			
			return res.json();
			})
		.then((res) => {
			callback(res);
		})
		.catch(err => {
			console.error(err);
			validateMe();
		})
}

function validateMe() {
	const content = `
		<h2>Protected Resource</h2>
		<p>The resource you are trying to access is protected</p>
		<p>Please <a onclick="run(event,signupForm)">Sign Up</a> or <a onclick="run(event,loginForm,[event])">Login</a> to continue</p>
		`;
	showPopup(content, 'protected-resource');
}

function sleep(ms) {
	return new Promise((res, rej) => {
		setTimeout(() => res(), ms);
	})
}

function genObsCallToAction() {
	const callToAction = `
		<div class="obs-list-item cta" onclick="run(event,newObservation,[event])">
			<p>Welcome to your new account</p>
			<p>Mushroom Journal is a photo-forward 
			<br>personal journal of fungal observations</p>
			<p>So ready your smartphone camera
			<br>or gather up some photos
			<br>and</p>
			<h2>Add New Observation</h2>
		</div>`;
	document.querySelector('#obs-list').innerHTML += callToAction;
}

async function displayObservations(res) {
	const observations = res;
	let addressArr = [];
	for (let obs of observations) {
		// get address for all
		if ((obs.location.lat) && (obs.location.lng)) addressArr.push(getAddress(obs));
		else addressArr.push("Unknown Location");
		await sleep(10);
	};
	if (observations.length<1) genObsCallToAction();
	for (let i=0; i<observations.length; i++) {
		const address = await addressArr[i];
		renderObservation(observations[i], address);
	};
	displaySection('.observations');
}

function getAndDisplayObservations(event) {
	// if (event) event.preventDefault();
	// clear out old observations
	document.querySelector('#obs-list').innerHTML = "";
	getObservations(displayObservations);
}

function updateValue(name, value) {
	const target = document.querySelector(`[name="${name}"]`);
	target.value = value;
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
	refreshNavMenu();
	if (JWT) {
		refreshToken();
		getAndDisplayObservations();
	} else splashPage();
}