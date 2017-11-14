/* 

Receives an array of objects and passes a new array of objects containing the proerties name, text, media, and mediaURl.

It takes the vast nested info returned by the twitter api and teases out the stuff we are looking for.

*/

function tweetExtractor(array, callback) {
	console.log('3 tweetExtractor');

	var trendArray = [];
	var trendObject = {};
	var name = '';
	var text = '';
	var stats = '';
	var media = '';
	var mediaUrl = '';
	var i = 0;

	for (i in array) {
		name = array[i].name;

		if (array[i].tweets.statuses[0] != undefined) {
			text = array[i].tweets.statuses[0].text;
			stats = array[i].tweets.statuses;

			for (i in stats) {
				if (stats[i].entities.hasOwnProperty('media') == true) {
					media = stats[i].entities.media[0].display_url;
					mediaUrl = stats[i].entities.media[0].media_url;
					break;
				} else {
					media = 'pic.twitter.com/C95qOuynhe';
					mediaUrl =
						'https://pbs.twimg.com/media/DB6dKHDXcAIZGPg.jpg';
				}
			}
		} else {
			text = name + ' is die';
			media = 'pic.twitter.com/C95qOuynhe';
			mediaUrl = 'https://pbs.twimg.com/media/DB6dKHDXcAIZGPg.jpg';
		}

		trendObject = {
			name: name,
			text: text,
			media: media,
			mediaUrl: mediaUrl,
		};

		trendArray.push(trendObject);
	}

	callback(null, trendArray);
}

module.exports = tweetExtractor;