import React, { Component } from 'react';
import Knob from '../Knob';
import './Phaser.css';

class Phaser extends Component {
	render() {
		return(
			<div>
				<h2>Phaser</h2>
				<label htmlFor="phaser-control">Rate: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="rate"
					min={0}
					max={8}
					step={1}
					/>
				<label htmlFor="phaser-control">Depth: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="depth"
					min={0}
					max={1}
					step={0.1}
				/>
				<label htmlFor="phaser-control">Feedback: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="feedback"
					min={0}
					max={1}
					step={0.1}
					/>
				<label htmlFor="phaser-control">Stereo-Phase: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="stereo_phase"
					min={0}
					max={180}
					step={2}
					/>
				{/* <label htmlFor="phaser-control">BMF: </label>
					<Knob sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="BMF"
					min="500"
					max="1500"
				step="10" /> */}
				<label htmlFor="phaser-control">Bypass: </label>
				<Knob
					sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="bypass"
					min={0}
					max={1}
					step={1}
					/>
			</div>
		);
	}
}

export default Phaser;
