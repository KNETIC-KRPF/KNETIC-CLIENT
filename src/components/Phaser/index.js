import React, { Component } from 'react';
import Knob from '../Knob';
import './Phaser.css';

class Phaser extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Phaser</h2>
				<label htmlFor="phaser-control">Rate: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="phaser-control">Depth: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="phaser-control">Feedback: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="phaser-control">Stereo-Phase: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="phaser-control">BMF: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Phaser;
