var jsonfile = require('jsonfile');

function testReader(callback) {
	console.log('0 testReader');
	var file = 'files/trend-full2.json';

	jsonfile.readFile(file, function(err, obj) {
		callback(null, obj);
	});
}

module.exports = testReader;