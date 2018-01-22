const AWS = require('aws-sdk');
const FS = require('fs');


const S3 = new AWS.S3({apiVersion: '2006-03-01', params: {
	Bucket: 'fungi-files-observation-images'
}});

let path = './mush.jpg';
let stream = FS.createReadStream(path);

S3.upload({Body: stream}, (err) => console.log(err));