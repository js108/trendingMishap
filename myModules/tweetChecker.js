function tweetChecker(array, callback) {
	console.log('2.5 tweetChecker');
	var trendArray = array;

	if (trendArray.includes('error') == true) {
		console.log('tweetChecker exit waterfall');
		callback(true);
	} else {
		callback(null, trendArray);
	}
}

module.exports = tweetChecker;