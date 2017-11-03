var jsonfile = require('jsonfile');

function tweetReader(res) {
	console.log('5 tweetReader');
	var file = 'files/trend-data.json';

	jsonfile.readFile(file, function(err, obj) {
		res.json(obj);
	});
}

module.exports = tweetReader;