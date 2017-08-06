import React, { Component } from 'react';
import Knob from '../Knob';
import './Delay.css';

class Delay extends Component {
	render() {
		const efxProp = this.props.patch.effectBus;
		const findDelay = efx => efx.type === "delay";
		const delay = efxProp.find(findDelay);
		return(
			<div>
				<h2>Delay</h2>
				<label htmlFor="delay-control">Time: </label>
				<Knob
					patchState={delay.delayTime}
					sendDispatch={this.props.sendDispatch}
					type="delay"
					property="time"
					min={1}
					max={2000}
					step={25}
					/>
				<label htmlFor="delay-control">Feedback: </label>
					<Knob
						patchState={delay.feedback}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="feedback"
						min={0}
						max={1}
						step={0.1}
						/>
				<label htmlFor="delay-control">Cutoff: </label>
					<Knob
						patchState={delay.cutoff}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="cutoff"
						min={20}
						max={22050}
						step={10}
						/>
				<label htmlFor="delay-control">Dry: </label>
					<Knob
						patchState={delay.dryLevel}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="dry"
						min={0}
						max={1}
						step={0.1}
						/>
				<label htmlFor="delay-control">Wet: </label>
					<Knob
						patchState={delay.wetLevel}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="wet"
						min={0}
						max={1}
						step={0.1}
						/>
					<label htmlFor="delay-control">Bypass: </label>
					<Knob
						patchState={delay.bypass}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="bypass"
						min={0}
						max={1}
						step={1}
						/>
			</div>
		);
	}
}

export default Delay;
