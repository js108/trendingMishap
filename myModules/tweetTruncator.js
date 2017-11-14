/*

Recives an array of objects and passes a copy with a new truncatedText property.

the truncatedText proerty is the strippedText property with all characters > 115 deleted.

*/

function tweetTruncator(array, callback) {
	console.log('3.87 tweetTruncator');
	var trendArray = array;
	var truncatedText = '';

	for (var i = 0; i < trendArray.length; i++) {
		var text = trendArray[i].strippedText;

		if (text.length > 115) {
			truncatedText = text.substring(0, 115);
			trendArray[i].truncatedText = truncatedText;
		} else {
			trendArray[i].truncatedText = text;
		}
	}

	callback(null, trendArray);
}

module.exports = tweetTruncator;