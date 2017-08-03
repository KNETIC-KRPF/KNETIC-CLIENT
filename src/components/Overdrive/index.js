import React, { Component } from 'react';
import Knob from '../Knob';
import './Overdrive.css';

class Overdrive extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Overdrive</h2>
				<label htmlFor="overdrive-control">Drive: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="overdrive"
					property="drive"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="overdrive-control">Output Gain: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="overdrive"
					property="output_gain"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="overdrive-control">Curve Amount: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="overdrive"
					property="curve_amount"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="overdrive-control">Algorithm-Index: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="overdrive"
					property="algorithm_index"
					min="0"
					max="5"
				step="1" />


			</div>
		);
	}
}

export default Overdrive;
