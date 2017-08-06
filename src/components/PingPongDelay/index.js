import React, { Component } from 'react';
import Knob from '../Knob';
import './PingPongDelay.css';

class PingPongDelay extends Component {
	render() {
		const efxProp = this.props.patch.effectBus;
		const findPingPong = efx => efx.type === "ping_pong";
		const pingPong = efxProp.find(findPingPong);
		return(
			<div>
				<h2>Ping Pong Delay</h2>
				<div className="pingpong-grid">

					<div className="controller">
						<Knob
							patchState={pingPong.feedback}
							sendDispatch={this.props.sendDispatch}
							type="ping_pong"
							property="feedback"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="ping-pong-control">FEEDBACK</label>
					</div>

					<div className="controller">
						<Knob
							patchState={pingPong.wetLevel}
							sendDispatch={this.props.sendDispatch}
							type="ping_pong"
							property="wet"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="ping-pong-control">WET</label>
					</div>

					<div className="controller">
						<Knob
							patchState={pingPong.delayTimeLeft}
							sendDispatch={this.props.sendDispatch}
							type="ping_pong"
							property="delay_left"
							min={1}
							max={2000}
							step={50}
							/>
						<label htmlFor="ping-pong-control">DELAY L</label>
					</div>

					<div className="controller">
						<Knob
							patchState={pingPong.delayTimeRight}
							sendDispatch={this.props.sendDispatch}
							type="ping_pong"
							property="delay_right"
							min={1}
							max={2000}
							step={50}
							/>
						<label htmlFor="ping-pong-control">DELAY R</label>
					</div>

				</div>
			</div>
		);
	}
}

export default PingPongDelay;
