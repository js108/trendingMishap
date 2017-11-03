import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
			<div className="tweet-button padding">
				<a
					href={
						'https://twitter.com/intent/tweet?text=' +
						this.props.text +
						' ' +
						this.props.media
					}
					target="_blank"
					rel="noopener noreferrer"
					alt="Tweet this"
				>
					<h3 className="btn-text">Tweet</h3>
				</a>
			</div>
		);
	}
}

export default Button;