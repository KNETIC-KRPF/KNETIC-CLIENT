import React, { Component } from 'react';
import Knob from '../Knob';
import './Compressor.css';

class Compressor extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Compressor</h2>
				<label htmlFor="compressor-control">Attack: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="attack"
						min="0"
						max="1000"
						step="10"
						/>
				<label htmlFor="compressor-control">Release: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="release"
						min="0"
						max="3000"
						step="10"/>
				<label htmlFor="compressor-control">Make Up Gain: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="makeUpGain"
						min="0"
						max="1"
						step="0.1"/>
					<label htmlFor="compressor-control">Auto Make Up Gain: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="ratio"
						min="0"
						max="1"
						step="1"/>
				<label htmlFor="compressor-control">Threshold: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="threshold"
						min="-100"
						max="0"
						step="1"/>
				<label htmlFor="compressor-control">Knee: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="knee"
						min="0"
						max="40"
						step="1"/>
				<label htmlFor="compressor-control">Ratio: </label>
				<Knob
						sendDispatch={this.props.sendDispatch}
						type="compressor"
						property="ratio"
						min="0"
						max="20"
						step="1"/>
			</div>
		);
	}
}

export default Compressor;
