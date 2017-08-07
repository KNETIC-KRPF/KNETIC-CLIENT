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
				<h4>DELAY</h4>
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

					<div className="controller">
						<Knob
							patchState={delay.bypass}
							sendDispatch={this.props.sendDispatch}
							type="delay"
							property="bypass"
							min={0}
							max={1}
							step={1}
							/>
						<label htmlFor="delay-control">BYPASS</label>
					</div>

				</div>
				<hr />
			</div>
		);
	}
}

export default Delay;
