import React, { Component } from 'react';
import Knob from '../Knob';
import './ADSR.css';

class ADSR extends Component {
	render() {
		return(
			<div>
				<h2>ADSR</h2>
				<label htmlFor="adsr-control">Attack: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="adsr"
					property="attack"
					min="0"
					max="100"
					step="1"
					/>
				<label htmlFor="adsr-control">Delay: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="adsr"
					property="decay"
					min="0"
					max="100"
					step="1"
					/>
				<label htmlFor="adsr-control">Sustain: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="adsr"
					property="sustain"
					min="0"
					max="100"
					step="1"
					/>
				<label htmlFor="adsr-control">Release: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="adsr"
					property="release"
					min="0"
					max="100"
					step="1"
					/>
			</div>
		);
	}
}

export default ADSR;
