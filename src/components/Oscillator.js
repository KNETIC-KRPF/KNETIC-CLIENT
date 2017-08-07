import React, {Component} from 'react';
import OscillatorKnob from './OscillatorKnob';

class Oscillator extends Component {
	render() {
		const oscillators = this.props.patch.oscillators;
		const findOsc = osc => osc.id === this.props.id;
		const oscillator = oscillators.find(findOsc);
		return (
      <div>
				<h4>OSCILLATOR {this.props.id}</h4>
				<div className="osc-grid">
					<div className="osc-controller">
						<select className="waveform" defaultValue={oscillator.type} onChange={(event) => this.props.sendDispatch('oscillator', 'waveform', event.target.value, this.props.id)}>
							<option value="sine">Sine</option>
							<option value="triangle">Triangle</option>
							<option value="square">Square</option>
							<option value="sawtooth">Sawtooth</option>
						</select>
					</div>

					<div className="osc-controller">
						<OscillatorKnob
							id={this.props.id}
							patchState={oscillator.gain}
							sendDispatch={this.props.sendDispatch}
							type="oscillator"
							property="gain"
							min={0}
							max={100}
							step={1}
							/>
						<label>GAIN</label>
					</div>

					<div className="osc-controller">
						<OscillatorKnob
							id={this.props.id}
							patchState={oscillator.detune}
							sendDispatch={this.props.sendDispatch}
							type="oscillator"
							property="detune"
							min={-50}
							max={50}
							step={1}
							/>
						<label>DETUNE</label>
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}

export default Oscillator;
