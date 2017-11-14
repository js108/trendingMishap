/* 

Uses the async.waterfall library to compose functions that will make the bot tweet.

*/

var async = require('async');
var botTweetReader = require('./botTweetReader');
var botTweetCreator = require('./botTweetCreator');
var botTweeter = require('./botTweeter');

function botComposer() {
	async.waterfall([botTweetReader, botTweetCreator, botTweeter], function(
		err,
		result
	) {
		if (err) {
			console.log('botCompose failed');
		} else {
			console.log('botCompose succeeded');
		}
	});
}

module.exports = botComposer;
