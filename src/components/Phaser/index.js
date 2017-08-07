import React, { Component } from 'react';
import Knob from '../Knob';
import RockerSwitch from '../RockerSwitch';
import './Phaser.css';

class Phaser extends Component {
	render() {
		const efxProp = this.props.patch.effectBus;
		const findPhaser = efx => efx.type === "phaser";
		const phaser = efxProp.find(findPhaser);
		return(
			<div>
				<div className="bypass-container">
					<h4>PHASER</h4>
					<RockerSwitch
						patchState={phaser.bypass}
						sendDispatch={this.props.sendDispatch}
						type="phaser"
						property="bypass"
						/>
				</div>
				<div className="phaser-grid">
					<div className="controller">
						<Knob
							patchState={phaser.rate}
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
							patchState={phaser.depth}
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
							patchState={phaser.feedback}
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
							patchState={phaser.stereoPhase}
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="stereo_phase"
							min={0}
							max={180}
							step={2}
							/>
						<label htmlFor="phaser-control">STEREO</label>
					</div>

					{/*<div className="controller">
						<Knob
							patchState={phaser.BMF}
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="BMF"
							min="500"
							max="1500"
							step="10"
							/>
					 <label htmlFor="phaser-control">BMF</label>
					</div>*/}

					{/*<div className="controller">
						<Knob
							patchState={phaser.bypass}
							sendDispatch={this.props.sendDispatch}
							type="phaser"
							property="bypass"
							min={0}
							max={1}
							step={1}
							/>
						<label htmlFor="phaser-control">BYPASS</label>
					</div>*/}

				</div>
				<hr/>
			</div>
		);
	}
}

export default Phaser;
