import React, {Component} from 'react';
import Knob from './Knob';

class Oscillator extends Component {
  render() {
    return (
      <div>
        <select className="waveform" onChange={(event) => this.props.sendDispatch("oscillator", "waveform", event.target.value)}>
          <option value="sine">Sine</option>
          <option value="triangle">Triangle</option>
          <option value="square">Square</option>
          <option value="sawtooth">Sawtooth</option>
        </select>
        <Knob sendDispatch={this.props.sendDispatch}/>
      </div>
    );
  }
}

export default Oscillator;
