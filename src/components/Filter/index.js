import React, { Component } from 'react';
import Knob from '../Knob';
import './Filter.css';

class Filter extends Component {
	render() {
		return(
			<div>
				<label htmlFor="filter"><h2>Main Filter</h2></label>
				<label htmlFor="filter-type">Filter Type: </label>
				<select className="filter-type-selection" onChange={(event) => this.props.sendDispatch('filter', 'type', event.target.value)}>
					<option value="lowpass">Low Pass</option>
					<option value="highpass">High Pass</option>
					<option value="bandpass">Band Pass</option>
					<option value="allpass">All Pass</option>
					<option value="lowshelf">Low Shelf</option>
					<option value="highshelf">High Shelf</option>
					<option value="notch">Notch</option>
				</select>
				<label htmlFor="frequency">Frequency: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="filter"
					property="frequency"
					min="20"
					max="20000"
					step="20"
					/>

				<label htmlFor="q-factor">QFactor: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="filter"
					property="Q"
					min="0"
					max="100"
					step="1"
					/>

				<label htmlFor="filter-gain">Gain: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="filter"
					property="gain"
					min="0"
					max="100"
					step="10"
					/>
			</div>
		);
	}
}

export default Filter;
