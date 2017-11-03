var jsonfile = require('jsonfile');

function tweetWriter(array, callback) {
	console.log('4 tweetWriter');
	var file = 'files/trend-data.json';

	jsonfile.writeFile(file, array, function(err) {
		callback(null);
	});
}

module.exports = tweetWriter;