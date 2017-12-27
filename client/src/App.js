/*

tha apppp

*/

import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';
import './App.css';
import logo from './logo.svg';

let index
let options
let loader

class App extends Component {

	// bind all the methods and so forth
	constructor(props) {
		super(props);
		this.state = { trends: [] };

		this.setOptionValue = this.setOptionValue.bind(this);
		this.setMedia = this.setMedia.bind(this);
		this.setText = this.setText.bind(this);
		this.handleMediaChange = this.handleMediaChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.removeLoader = this.removeLoader.bind(this);
	}

	// get the trends array from the /index.js (not to be confused with /client/index.js)
	// then put it in state, remove the loading animation, and randomly set the dropdown lists values
	componentDidMount() {
		fetch('/trends')
			.then(res => res.json())
			.then(trends => this.setState({ trends }))
			.then(this.removeLoader)
			.then(() => this.setOptionValue());
	}

	//remove loading animation
	removeLoader() {
		loader = document.getElementsByClassName('loader')
		loader[0].classList.remove('loader')
	}

	// generate two random numbers that are between zero and the length of the trend array
	// then call the setMedia and setText methods to set the values of the dropdown list, Button.js, and the display tweet
	setOptionValue() {
		var arrayLength = this.state.trends.length;
		var intA = Math.floor(Math.random() * arrayLength);
		var intB = Math.floor(Math.random() * arrayLength);

		while (intA === intB) {
			intB = Math.floor(Math.random() * arrayLength);
		}

		this.setMedia(intA);
		this.setText(intB);
	}

	// take an integer and set state for media based on it
	// mediaValue is used to select the dropdown list, mediaUrl Button.js, and media the display tweet
	setMedia(int) {
		this.setState({ mediaValue: int });
		this.setState({ mediaUrl: this.state.trends[int].mediaUrl });
		this.setState({ media: this.state.trends[int].media });
	}

	// same as setMedia except for the text
	setText(int) {
		this.setState({ textValue: int });
		this.setState({ linkifiedText: this.state.trends[int].linkifiedText });
		this.setState({ escapedText: this.state.trends[int].escapedText });
	}

	// event handler for the media dropdown list
	handleMediaChange(event) {
		index = event.target.value;
		this.setMedia(index);
	}

	// event handler for the text dropdown list
	handleTextChange(event) {
		index = event.target.value;
		this.setText(index);
	}	

	// the dang layout
	render() {

		// map the trends array to dropdown list options and put it in a variable since it gets used twice
		options = this.state.trends.map((trend, i) => (
			<option key={i} value={i}>
				{trend.name}
			</option>
		));

		return (
			<div className="app padding">
				<div className="grid-container center padding">
					<div className="grid-child-0">
						<img className="logo" alt='logo' src={logo} />
					</div>

					<div className="grid-child-1">
						<Header />
					</div>
					<div className="grid-child-2">
						<select
							value={this.state.mediaValue}
							onChange={this.handleMediaChange}
						>
							{options}
						</select>
					</div>
					<div className="grid-child-3">
						<select
							value={this.state.textValue}
							onChange={this.handleTextChange}
						>
							{options}
						</select>
					</div>
					<div className="grid-child-4">
						<div className="tweet center">
							<div className="tweet-content">
								<div className='loader'>
									<img
										id="display-image"
										alt="trend"
										src={this.state.mediaUrl}
									/>
									<div className="tweet-text padding">
										<p
											dangerouslySetInnerHTML={{
												__html: this.state.linkifiedText,
											}}
										/>
									</div>
								</div>
							</div>
							<Button
								text={this.state.escapedText}
								media={this.state.media}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;