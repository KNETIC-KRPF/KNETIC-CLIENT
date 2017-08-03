import React, { Component } from 'react';
import Knob from '../Knob';
import './Reverb.css';

class Reverb extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Reverb</h2>
				<label htmlFor="reverb-control">High Cut: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="reverb-control">Low Cut: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="reverb-control">Dry Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="reverb-control">Wet Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="reverb-control">Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Reverb;
