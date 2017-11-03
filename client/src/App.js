import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';
import './App.css';
import logo from './logo.svg';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { trends: [] };

		this.setOptionValue = this.setOptionValue.bind(this);
		this.setMedia = this.setMedia.bind(this);
		this.setText = this.setText.bind(this);
		this.handleMediaChange = this.handleMediaChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	componentDidMount() {
		fetch('/trends')
			.then(res => res.json())
			.then(trends => this.setState({ trends }))
			.then(() => this.setOptionValue());
	}

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

	setMedia(int) {
		this.setState({ mediaValue: int });
		this.setState({ mediaUrl: this.state.trends[int].mediaUrl });
		this.setState({ media: this.state.trends[int].media });
	}

	setText(int) {
		this.setState({ textValue: int });
		this.setState({ linkifiedText: this.state.trends[int].linkifiedText });
		this.setState({ escapedText: this.state.trends[int].escapedText });
	}

	handleMediaChange(event) {
		var index = event.target.value;
		this.setMedia(index);
	}

	handleTextChange(event) {
		var index = event.target.value;
		this.setText(index);
	}

	render() {
		const options = this.state.trends.map((trend, i) => (
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