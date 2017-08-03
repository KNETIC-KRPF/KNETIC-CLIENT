import React, { Component } from 'react';
import Knob from '../Knob';
import './Reverb.css';

class Convolver extends Component {
	render() {
		return(
			<div>
				<h2>Convolver</h2>
				<label htmlFor="reverb-control">High Cut: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="highcut"
					min="20"
					max="22050"
				step="50" />
				<br/>
				<label htmlFor="reverb-control">Low Cut: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="lowcut"
					min="20"
					max="22050"
				step="50" />
				<br/>
				<label htmlFor="reverb-control">Dry Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="dryLevel"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="reverb-control">Wet Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="wetLevel"
					min="0"
					max="1"
				step="0.05" />
				<br/>
				<label htmlFor="reverb-control">Level: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="level"
					min="0"
					max="1"
				step="0.1" />
				<br/>
				<label htmlFor="reverb-control">Bypass: </label>
				<Knob sendDispatch={this.props.sendDispatch} type="convolver"
					property="bypass"
					min="0"
					max="1"
				step="1" />
			</div>
		);
	}
}

export default Convolver;
