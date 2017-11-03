function tweetEscaper(array, callback) {
	console.log('3.93 tweetEscaper');
	var trendArray = array;

	for (var i = 0; i < trendArray.length; i++) {
		var text = trendArray[i].truncatedText;
		var escapedText = text
			.replace(/#/g, '%23')
			.replace(/&/g, "'n")
			.replace(/;/g, '%3B');

		trendArray[i].escapedText = escapedText;
	}

	callback(null, trendArray);
}

module.exports = tweetEscaper;