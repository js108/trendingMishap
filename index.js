/*

This is the node app. It handles routing and calls modlues.

*/

if ( process.env.NODE_ENV === 'development' ) {
    require('dotenv').load();
}
const express = require('express');
const path = require('path');
const app = express();
const tweetReader = require('./myModules/tweetReader');
const trendComposer = require('./myModules/trendComposer');
const botComposer = require('./myModules/botComposer');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// When someone visits the site the React app gets the trends from here via tweetReader.js
app.get('/trends', (req, res) => {
	tweetReader(res);
});

// The endpoint that makes the dang bot tweet via botComposer.js, set it up in .env-example
// It replies to the pinger with a 200 status and React's index.html file
app.get('/' + process.env.BOT_ENDPOINT, (req, res) => {
	res.status(200).send('worked');
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
	botComposer();
	console.log('bot endpoint pinged');
});

// The endpoint that makes app search for trends via trendComposer, set it up in .env-example
// It replies to the pinger with a 200 status and React's index.html file
app.get('/' + process.env.TREND_ENDPOINT, (req, res) => {
	res.status(200).send('worked');
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
	trendComposer();
	console.log('trend getting endpoint pinged');
});

// The "catchall" handler: for any request that doesn't match ones above
// It replies to the pinger with a 200 status and React's index.html file
app.get('*', (req, res) => {
	res.status(200).send('worked');
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Trending Mishap listening on ${port}`);