/* 

Recieves an array of objects and passes a string based on two random numbers.

The string is our bot's tweet.

*/

function botTweetCreator(array, callback) {
	console.log('9 botTweetCreator');

	var arrayLength = array.length;
	var tweetText = '';
	var tweetMedia = '';
	var fullTweet = '';

	function botTweetAssigner() {
		var intA = Math.floor(Math.random() * arrayLength);
		var intB = Math.floor(Math.random() * arrayLength);

		if (intA != intB) {
			console.log('ints diff, carry on');
			tweetText = array[intA].truncatedText;
			tweetMedia = array[intB].media;
			fullTweet = tweetText + ' ' + tweetMedia;
			callback(null, fullTweet);
		}
		else {
			console.log('ints same, redo bro');
			botTweetAssigner();
		}
	}

	botTweetAssigner();
	
}

module.exports = botTweetCreator;