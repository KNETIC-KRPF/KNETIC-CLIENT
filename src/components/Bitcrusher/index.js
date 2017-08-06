import React, {Component} from 'react';
import Knob from '../Knob';
import './Bitcrusher.css';

class Bitcrusher extends Component {
  render() {
    const efxProp = this.props.patch.effectBus;
    const findBitcrusher = efx => efx.type === "bitcrusher";
    const bitcrusher = efxProp.find(findBitcrusher);
    return (
      <div>
        <h2>Bitcrusher</h2>
        <div className="bitcrusher-grid">

          {/*<div className="controller">
            <Knob
              patchState={bitcrusher.bits}
              sendDispatch={this.props.sendDispatch}
              type="bitcrusher"
              property="bits"
              min={0}
              max={16}
              step={1}
              />
            <label htmlFor="bitcrusher-control">BITS</label>
          </div>

          <div className="controller">
            <Knob
              patchState={bitcrusher.buffer}
              sendDispatch={this.props.sendDispatch}
              type="bitcrusher"
              property="buffer"
              min={256}
              max={1024}
              step={256}
              />
            <label htmlFor="bitcrusher-control">BUFFER</label>
          </div>

          <div className="controller">
            <Knob
              patchState={bitcrusher.norm_freq}
              sendDispatch={this.props.sendDispatch}
              type="bitcrusher"
              property="norm_freq"
              min={0}
              max={1}
              step={0.1}
              />
            <label htmlFor="bitcrusher-control">NORM FREQ</label>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Bitcrusher;
