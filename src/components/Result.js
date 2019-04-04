import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Result extends Component {
	constructor() {
		super();
		this.backButton = this.backButton.bind(this);
	}
	backButton() {
		this.props.history.push('/');
	}
	render() {
		return (
			<div id="res" className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
				<h3>Temp: {this.props.temperature} K</h3>
				<h3>Weather: {this.props.description}</h3>
				<h3>Humidity: {this.props.humidity}%</h3>
				<h3>Pressure: {this.props.pressure} Atm</h3>
				<h3>Wind: {this.props.wind} Km/hr</h3>
				<br />
				<button className="btn btn-outline-primary" onClick={this.backButton}>
					Go Back
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	temperature: state.weather.temp,
	description: state.weather.desc,
	humidity: state.weather.humidity,
	pressure: state.weather.pressure,
	wind: state.weather.wind
});

export default withRouter(connect(mapStateToProps)(Result));
