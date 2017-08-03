import React, { Component } from 'react';
import Knob from '../Knob';
import './ADSR.css';

class ADSR extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>ADSR</h2>
				<label htmlFor="adsr-control">Attack: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Delay: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Sustain: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<label htmlFor="adsr-control">Release: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default ADSR;
