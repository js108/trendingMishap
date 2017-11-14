/* 

Reads a cashed json file for testing purposes because the twitter api is limited.

Not part of the actual app.

*/

var jsonfile = require('jsonfile');

function testReader(callback) {
	console.log('0 testReader');
	var file = 'files/trend-full2.json';

	jsonfile.readFile(file, function(err, obj) {
		callback(null, obj);
	});
}

module.exports = testReader;