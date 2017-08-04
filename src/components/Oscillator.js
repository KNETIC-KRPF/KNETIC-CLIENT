import React, {Component} from 'react';
import OscillatorKnob from './OscillatorKnob';

class Oscillator extends Component {
	render() {
		return (
      <div>
				<select className="waveform" onChange={(event) => this.props.sendDispatch('oscillator', 'waveform', event.target.value, this.props.id)}>
					<option value="sine">Sine</option>
          <option value="triangle">Triangle</option>
          <option value="square">Square</option>
          <option value="sawtooth">Sawtooth</option>
        </select>
				<label>Gain: </label>
        <OscillatorKnob
					id={this.props.id}
					sendDispatch={this.props.sendDispatch}
					type="oscillator"
					property="gain"
					min={0}
					max={100}
				step={1}/>

			<label>Detune: </label>
				<OscillatorKnob
					id={this.props.id}
					sendDispatch={this.props.sendDispatch}
					type="oscillator"
					property="detune"
					min={0}
					max={100}
				step={1}/>
      </div>
		);
	}
}

export default Oscillator;
