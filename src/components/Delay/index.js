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
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="delay-control">Feedback: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="delay-control">Cutoff: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="delay-control">Dry: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="delay-control">Wet: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Delay;
