if ( process.env.NODE_ENV === 'development' ) {
    require('dotenv').load();
}
const express = require('express');
const path = require('path');
const app = express();
const tweetReader = require('./myModules/tweetReader');
const trendComposer = require('./myModules/trendComposer');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/trends', (req, res) => {
	tweetReader(res);
});

app.get('/' + process.env.BOT_ENDPOINT, (req, res) => {
	res.status(200).send('worked');
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
	trendComposer();
	console.log('pinged');
});

// The "catchall" handler: for any request that doesn't
// match ones above, send back React's index.html file.
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
*/

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Trending Mishap listening on ${port}`);