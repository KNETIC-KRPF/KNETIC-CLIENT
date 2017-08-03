import React, { Component } from 'react';
import Knob from '../Knob';
import './Compressor.css';

class Compressor extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Compressor</h2>
				<label htmlFor="adsr-control">Attack: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Release: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Gain: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Threshold: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Knee: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Ratio: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Compressor;
