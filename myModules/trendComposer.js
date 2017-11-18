/* 

Uses the async.waterfall library to compose functions that search the twitter api, clean up the data, and save it to json.

*/

var async = require('async');
var trendGetter = require('./trendGetter');
var tweetSearcher = require('./tweetSearcher');
var tweetChecker = require('./tweetChecker');
var tweetExtractor = require('./tweetExtractor');
var retweetStripper = require('./retweetStripper');
var tweetTruncator = require('./tweetTruncator');
var tweetEscaper = require('./tweetEscaper');
var tweetLinkify = require('./tweetLinkify');
var tweetWriter = require('./tweetWriter');
var botComposer = require('./botComposer');

function trendComposer() {
	
	async.waterfall(
		[
			trendGetter,
			tweetSearcher,
			tweetChecker,
			tweetExtractor,
			retweetStripper,
			tweetTruncator,
			tweetEscaper,
			tweetLinkify,
			tweetWriter,
		],
		function(err, result) {
			if (err) {
				console.log('trendComposer failed, prob due to twiter api limtiing');
			}
			else {
				console.log('trendComposer succeeded');
			}
		}
	);
}

module.exports = trendComposer;