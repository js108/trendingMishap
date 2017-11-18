/* 

Recives a string and posts it via the twitter api.

This is how the bot tweets.

*/

var Twit = require('twit');
var T = new Twit({
	consumer_key: process.env.OUT_CONSUMER_KEY,
	consumer_secret: process.env.OUT_CONSUMER_SECRET,
	access_token: process.env.OUT_ACCESS_TOKEN,
	access_token_secret: process.env.OUT_ACCESS_TOKEN_SECRET,
});

function botTweeter(string, callback) {
	console.log('10 botTweeter');
	console.log('string', string);
  
	T.post('statuses/update', { status: string }, function(err, data, response) {
		callback(null);
	});

}  

module.exports = botTweeter;