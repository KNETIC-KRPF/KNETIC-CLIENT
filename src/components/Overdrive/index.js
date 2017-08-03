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
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="overdrive-control">Output Gain: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="overdrive-control">Curve Amount: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="overdrive-control">Algorithm-Index: </label>
				<Knob sendDispatch={this.props.sendDispatch} />


			</div>
		);
	}
}

export default Overdrive;
