import React, { Component } from 'react';
import Knob from '../Knob';
import './Delay.css';

class Delay extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Delay</h2>
				<label htmlFor="delay-control">Time: </label>
					<Knob
							sendDispatch={this.props.sendDispatch}
							type="delay"
							property="time"
							min="0"
							max="10000"
							step="500"
							/>
				<br/>
				<label htmlFor="delay-control">Feedback: </label>
					<Knob
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="feedback"
						min="0"
						max="1"
						step="0.1"
						/>
				<br/>
				<label htmlFor="delay-control">Cutoff: </label>
					<Knob
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="cutoff"
						min="20"
						max="22050"
						step=""
						/>
				<br/>
				<label htmlFor="delay-control">Dry: </label>
					<Knob
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="dry"
						min="0"
						max="1"
						step="0.1"
						/>
				<br/>
				<label htmlFor="delay-control">Wet: </label>
					<Knob
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="wet"
						min="0"
						max="1"
						step="0.1"
						/>
			</div>
		);
	}
}

export default Delay;
