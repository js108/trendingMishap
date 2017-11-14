/*

Recives an array of strings and passes an array of objects.

It searches the twitter api for the strings in the array and returns 50 results from each which are pushed to an array.

If the twitter api limits us it pushes 'twitter api error' to the array instead of the results.

*/

var Twit = require('twit');
var T = new Twit({
	consumer_key: process.env.IN_CONSUMER_KEY,
	consumer_secret: process.env.IN_CONSUMER_SECRET,
	access_token: process.env.IN_ACCESS_TOKEN,
	access_token_secret: process.env.IN_ACCESS_TOKEN_SECRET,
});

function tweetSearcher(array, callback) {
	console.log('2 tweetSearcher');

	var trendArray = [];
	var trendObject = {};
	var arrayLength = array.length;
	var trend = 'death';

	for (let i = 0; i < arrayLength; i++) {
		trend = '"' + array[i] + '"';

		T.get('search/tweets', { q: trend, count: 50 }, function(
			error,
			tweets,
			response
		) {
			if (error) {
				trendArray.push('twitter api error');
				console.log(
					'search error',
					trendArray.length,
					'/',
					arrayLength
				);
			} else {
				trendObject = {
					name: array[i],
					tweets: tweets,
				};

				trendArray.push(trendObject);
				console.log(
					'search working',
					trendArray.length,
					'/',
					arrayLength
				);
			}

			if (trendArray.length == arrayLength) {
				callback(null, trendArray);
			}
		});
	}
}

module.exports = tweetSearcher;