import React, { Component } from 'react';
import Knob from '../Knob';
import './Phaser.css';

class Phaser extends Component {
	render() {
		return(
			<div>
				<h2>Phaser</h2>
				<div className="phaser-grid">

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="rate"
							min={0}
							max={8}
							step={1}
							/>
						<label htmlFor="phaser-control">RATE</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="depth"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="phaser-control">DEPTH</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="feedback"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="phaser-control">FEEDBACK</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="stereo_phase"
							min={0}
							max={180}
							step={2}
							/>
						<label htmlFor="phaser-control">STEREO PHASE</label>
					</div>

					{/* <label htmlFor="phaser-control">BMF: </label>
					<Knob sendDispatch={this.props.sendDispatch}
					type="phaser"
					property="BMF"
					min="500"
					max="1500"
					step="10" /> */}

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="bypass"
							min={0}
							max={1}
							step={1}
							/>
						<label htmlFor="phaser-control">BYPASS</label>
					</div>

				</div>
			</div>
		);
	}
}

export default Phaser;
