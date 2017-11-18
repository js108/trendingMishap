/*

Recives an array of objects and passes a copy with a new truncatedText property.

the truncatedText proerty is the strippedText property with all characters > 115 deleted.

*/

function tweetTruncator(array, callback) {
	console.log('3.87 tweetTruncator');
	var trendArray = array;
	var truncatedText = '';
	var maxLength = 115;

	for (var i = 0; i < trendArray.length; i++) {
		var text = trendArray[i].strippedText;

		if (text.length > maxLength) {
			truncatedText = text.substring(0, maxLength);
			truncatedText = truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
			trendArray[i].truncatedText = truncatedText;
		} else {
			trendArray[i].truncatedText = text;
		}
	}

	callback(null, trendArray);
}

module.exports = tweetTruncator;