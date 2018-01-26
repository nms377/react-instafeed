const express = require('express');
const app = express();
const https = require('https');
const bp = require('body-parser');

const PORT = process.env.PORT || 9000;

require('dotenv').config();

const { USER_ID, ACCESS_TOKEN } = process.env;

let targetURL = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?count=99&access_token=${ACCESS_TOKEN}`;

app.use(express.static('public'));

// app.use(bp.urlencoded ({
// 	extended: true
// }));

app.use(bp.json({type: 'application/json'}));

app.get('/', function (req, res) {
  getPhotos(targetURL)
    .then((images) => {
    	res.json(JSON.parse(images));
    })
    .catch((err) => {
    	console.log('err', err);
    	res.send(err);
    });
});

function getPhotos(endpoint) {
	return new Promise((resolve, reject) => {
		https.get(endpoint, res => {
			let rawData = '';
			res.on('data', chunk => rawData += chunk);
			res.on('end', () => {
				resolve(rawData);
			});
		})
		.on('err', err => reject(err));
	});
}

app.listen(PORT, function() {
	console.log('Server listening on port', PORT);
});

module.exports = app;