var jsonfile = require('jsonfile');

function botTweetReader(callback) {
	console.log('8 botTweetReader');
	var file = 'files/trend-data.json';

	jsonfile.readFile(file, function(err, obj) {
		callback(null, obj);
	});
}

module.exports = botTweetReader;