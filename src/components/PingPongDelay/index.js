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
				<Knob sendDispatch={this.props.sendDispatch} type="ping_pong"
					property="feedback"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="ping-pong-control">Wet: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="ping_pong"
					property="wet"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="ping-pong-control">Delay Left: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="ping_pong"
					property="delay_left"
					min="1"
					max="10000"
				step="100" />
				<br/>
				<label htmlFor="ping-pong-control">Delay Right: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="ping_pong"
					property="delay_right"
					min="1"
					max="10000"
				step="100" />
			</div>
		);
	}
}

export default PingPongDelay;
