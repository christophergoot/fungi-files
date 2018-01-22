const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const multer = require('multer');
const upload = multer();

// const {MOCK_OBSERVATIONS} = require('./mock-data');


router.get('/', (req, res) => {
	res.json(MOCK_OBSERVATIONS);
});

router.post('/drafts/', upload.array('photos', 24), (req, res) => {
	// req will be a draft post
	// console.log(req);
	// console.log
	// throw 'look at log'
	const reply = req.body.commonName;
	
	return res.status(200).send(reply);


// const requiredFields = ['title', 'content', 'author'];
// for (let i=0; i<requiredFields.length; i++) {
//   const field = requiredFields[i];
//   if (!(field in req.body)) {
// 	const message = `Missing \`${field}\` in request body`
// 	console.error(message);
// 	return res.status(400).send(message);
//   }
// }
// const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
// res.status(201).json(item);




// mongodb://<dbuser>:<dbpassword>@ds111648.mlab.com:11648/mushroom-journal


	// res will be confirmation 

})






module.exports = router;