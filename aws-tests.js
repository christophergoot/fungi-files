const AWS = require('aws-sdk');
const fs = require('fs');


const s3 = new AWS.S3({apiVersion: '2006-03-01', params: {
	Bucket: 'fungi-files-observation-images'
}});

let path = './mush.jpg';
let stream = fs.createReadStream(path);

s3.upload({Body: stream}, (err) => console.log(err));