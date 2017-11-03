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
			console.log('botCompose error');
		} else {
			console.log('botCompose works');
		}
	});
}

module.exports = botComposer;
