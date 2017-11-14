/*

Reads a json file and passes it to express's res parameter as an array (named obj).

*/

var jsonfile = require('jsonfile');

function tweetReader(res) {
	console.log('5 tweetReader');
	var file = 'files/trend-data.json';

	jsonfile.readFile(file, function(err, obj) {
		res.json(obj);
	});
}

module.exports = tweetReader;