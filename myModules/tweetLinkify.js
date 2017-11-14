/* 

Receives an array of objects and passes a copy + a new linkifiedText proerty.

The linkifiedText proerty is the truncatedText proerty with the links linkified.

*/

function tweetLinkify(array, callback) {
	console.log('3.75 tweetLinkify');
	var trendArray = array;
	var i = 0;

	for (i = 0; i < trendArray.length; i++) {
		var text = trendArray[i].truncatedText;
		if (text) {
			text = text.replace(
				/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
				function(url) {
					var full_url = url;
					if (!full_url.match('^https?://')) {
						full_url = 'http://' + full_url;
					}
					return (
						'<a href="' +
						full_url +
						'" target="_blank">' +
						url +
						'</a>'
					);
				}
			);
		}
		trendArray[i].linkifiedText = text;
	}
	callback(null, trendArray);
}

module.exports = tweetLinkify;