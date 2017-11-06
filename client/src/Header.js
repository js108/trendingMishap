import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>Trending Mishap</h1>
				<h3>#Trend + #Trend = Mishap</h3>
				<h5>
					Follow{' '}
					<a href="https://twitter.com/trending_mishap">the bot</a> /
					See <a href="https://github.com/js108/trendingMishap">the c0de</a> / Contact{' '}
					<a href="http://joeschoech.com">Joe</a>
				</h5>
			</div>
		);
	}
}

export default Header;