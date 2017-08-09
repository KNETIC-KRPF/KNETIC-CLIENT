import React, { Component } from 'react';
import Knob from '../Knob';
import RockerSwitch from '../RockerSwitch';
import './Phaser.css';

class Phaser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggleOn: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		const efxProp = this.props.patch.effectBus;
		const findPhaser = efx => efx.type === "phaser";
		const phaser = efxProp.find(findPhaser);

		const phaserComponent = (
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
		);

		return(
			<div>
				<div className="bypass-container">
					<h4 className="expand-efx" onClick={this.handleClick}>PHASER<span className="arrow-down"></span></h4>
					<RockerSwitch
						patchState={phaser.bypass}
						sendDispatch={this.props.sendDispatch}
						type="phaser"
						property="bypass"
						name={phaser.type}
						/>
				</div>
				{this.state.isToggleOn && phaserComponent}
				<hr/>
			</div>
		);
	}
}

export default Phaser;
