var Twit = require('twit');
var T = new Twit({
	consumer_key: process.env.IN_CONSUMER_KEY,
	consumer_secret: process.env.IN_CONSUMER_SECRET,
	access_token: process.env.IN_ACCESS_TOKEN,
	access_token_secret: process.env.IN_ACCESS_TOKEN_SECRET,
});

function trendGetter(callback) {
	console.log('1 trendGetter');
	var trendArray = [];
	var name = '';
	var trends = '';

	T.get('trends/place', { id: '23424977' }, function(err, data, response) {
		if (err) {
			callback(true);
		}

		trends = data[0].trends;

		for (var i = 0; i < trends.length; i++) {
			name = trends[i].name;
			trendArray.push(name);
		}

		callback(null, trendArray);
	});
}

module.exports = trendGetter;