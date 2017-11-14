/* 

Recives an array of objects and passes a copy + a new strippedText property.

The strippedText proprty is the text property with retweets stripped out — eg "RT @on3ness:" will be removed if it appears at the begining of a tweet

*/

function retweetStripper(array, callback) {
	console.log('3.5 retweetStripper');
	var trendArray = array;
	var strippedText = '';

	for (var i = 0; i < trendArray.length; i++) {
		var text = trendArray[i].text;

		if (text.startsWith('RT @')) {
			strippedText = text.substring(text.indexOf(':') + 2);
			trendArray[i].strippedText = strippedText;
		} else {
			trendArray[i].strippedText = text;
		}
	}

	callback(null, trendArray);
}

module.exports = retweetStripper;