import React, { Component } from 'react';
import Knob from '../Knob';
import './Filter.css';

class Filter extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<label for="filter"><h2>Main Filter</h2></label>
				<label for="filter-type">Filter Type: </label>
				<select className="filter-type-selection">
					<option value="filter-type">Hi-Pass</option>
					<option value="filter-type">Lo-Pass</option>
					<option value="filter-type">Band-Pass</option>
					<option value="filter-type">All-Pass</option>
					<option value="filter-type">Lo-Shelf</option>
					<option value="filter-type">Hi-Shelf</option>
					<option value="filter-type">Notch</option>
				</select>
				<label htmlFor="frequency">Frequency: </label>
				<Knob sendDispatch={this.props.sendDispatch} />

				<label htmlFor="q-factor">QFactor: </label>
				<Knob sendDispatch={this.props.sendDispatch} />

				<label htmlFor="filter-gain">Gain: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Filter;
