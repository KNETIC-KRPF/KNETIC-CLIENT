import React, { Component } from 'react';
import Knob from '../Knob';
import RockerSwitch from '../RockerSwitch';
import './Delay.css';

class Delay extends Component {
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
		const findDelay = efx => efx.type === "delay";
		const delay = efxProp.find(findDelay);

		const delayComponent = (
			<div className="delay-grid">
				<div className="controller">
					<Knob
						patchState={delay.delayTime}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="time"
						min={1}
						max={2000}
						step={25}
						/>
					<label htmlFor="delay-control">TIME</label>
				</div>

				<div className="controller">
					<Knob
						patchState={delay.feedback}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="feedback"
						min={0}
						max={1}
						step={0.1}
						/>
					<label htmlFor="delay-control">FEEDBACK</label>
				</div>

				<div className="controller">
					<Knob
						patchState={delay.cutoff}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="cutoff"
						min={20}
						max={22050}
						step={10}
						/>
					<label htmlFor="delay-control">CUTOFF</label>
				</div>

				<div className="controller">
					<Knob
						patchState={delay.dryLevel}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="dry"
						min={0}
						max={1}
						step={0.1}
						/>
					<label htmlFor="delay-control">DRY</label>
				</div>

				<div className="controller">
					<Knob
						patchState={delay.wetLevel}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="wet"
						min={0}
						max={1}
						step={0.1}
						/>
					<label htmlFor="delay-control">WET</label>
				</div>
			</div>
		);

		return(
			<div>
				<div className="bypass-container">
					<h4 className="expand-efx" onClick={this.handleClick}>DELAY</h4>
					<RockerSwitch
						patchState={delay.bypass}
						sendDispatch={this.props.sendDispatch}
						type="delay"
						property="bypass"
						/>
				</div>
				{this.state.isToggleOn && delayComponent}
				<hr />
			</div>
		);
	}
}

export default Delay;
