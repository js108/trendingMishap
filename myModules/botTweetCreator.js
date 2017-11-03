function botTweetCreator(array, callback) {
	console.log('9 botTweetCreator');

	var arrayLength = array.length;
	var intA = Math.floor(Math.random() * arrayLength);
	var intB = Math.floor(Math.random() * arrayLength);
	var tweetText = '';
	var tweetMedia = '';
	var fullTweet = '';

	while (intA === intB) {
		intB = Math.floor(Math.random() * arrayLength);
	}

	tweetText = array[intA].truncatedText;
	tweetMedia = array[intB].media;
	fullTweet = tweetText + ' ' + tweetMedia;

	callback(null, fullTweet);
}

module.exports = botTweetCreator;