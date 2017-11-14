/* 

Receives and array of objects and passes a copy + a new escapedText property.

The escapedText property is the truncatedText property with 3 common characters (#, &, ;) escaped.

*/

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