/*

the button that posts the tweet on click

*/

import React from 'react';

const Button = ({text, media}) => (		
	<button className="tweet-button padding">
		<a
			href={
				'https://twitter.com/intent/tweet?text=' +
				text +
				' ' +
				media
			}
			target="_blank"
			rel="noopener noreferrer"
			alt="Tweet this"
		>
			<h3 className="btn-text">Tweet</h3>
		</a>
	</button>
)


export default Button;