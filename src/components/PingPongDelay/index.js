import React, { Component } from 'react';
import Knob from '../Knob';
import './PingPongDelay.css';

class PingPongDelay extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Ping Pong Delay</h2>
				<label htmlFor="ping-pong-control">Feedback: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="ping-pong-control">Wet: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="ping-pong-control">Dry: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="ping-pong-control">Delay Left: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="ping-pong-control">Delay Right: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default PingPongDelay;
