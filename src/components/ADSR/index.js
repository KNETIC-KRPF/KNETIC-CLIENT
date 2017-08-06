import React, { Component } from 'react';
import Knob from '../Knob';
import './ADSR.css';

class ADSR extends Component {
	render() {
		return(
			<div>
				<h2>ADSR</h2>
				<div className="adsr-grid">
					<div className="knob">
						<Knob
							patchState={this.props.patch.adsr.attack}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="attack"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="adsr-control">ATTACK</label>
					</div>

					<div className="knob">
						<Knob
							patchState={this.props.patch.adsr.decay}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="decay"
							min={0}
							max={2000}
							step={10}
							/>
						<label htmlFor="adsr-control">DELAY</label>
					</div>

					<div className="knob">
						<Knob
							patchState={this.props.patch.adsr.sustain}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="sustain"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="adsr-control">SUSTAIN</label>
					</div>

					<div className="knob">
						<Knob
							patchState={this.props.patch.adsr.release}
							sendDispatch={this.props.sendDispatch}
							type="adsr"
							property="release"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="adsr-control">RELEASE</label>
					</div>
				</div>

			</div>
		);
	}
}

export default ADSR;
