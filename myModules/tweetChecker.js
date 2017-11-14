/* 

Recives and array of strings and either passes it or calls the main trendComposer.js ansyc.waterfall function.

If the array of strings contains the phrase 'twitter api error' it exists the trendComposer.js ansyc.waterfall function via calling its main function.

If the array of strings doesn't contains the phrase 'twitter api error' it passes it.

*/

function tweetChecker(array, callback) {
	console.log('2.5 tweetChecker');
	var trendArray = array;

	if (trendArray.includes('twitter api error') == true) {
		console.log('tweetChecker exit waterfall');
		callback(true);
	} else {
		callback(null, trendArray);
	}
}

module.exports = tweetChecker;