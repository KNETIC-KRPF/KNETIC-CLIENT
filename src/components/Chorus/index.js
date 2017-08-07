import React, {Component} from 'react';
import Knob from '../Knob';
import './Chorus.css';

class Chorus extends Component {
  render() {
    const efxProp = this.props.patch.effectBus;
		const findChorus = efx => efx.type === "chorus";
		const chorus = efxProp.find(findChorus);
    return (
      <div>
        <h4>CHROUS</h4>
        <div className="chorus-grid">

          <div className="controller">
            <Knob
              patchState={chorus.feedback}
              sendDispatch={this.props.sendDispatch}
              type="chorus"
              property="feedback"
              min={0}
              max={1}
              step={0.1}
              />
            <label htmlFor="chorus-control">FEEDBACK</label>
          </div>

          <div className="controller">
            <Knob
              patchState={chorus.delay}
              sendDispatch={this.props.sendDispatch}
              type="chorus"
              property="delay"
              min={0}
              max={1}
              step={0.005}
              />
            <label htmlFor="chorus-control">DELAY</label>
          </div>

          <div className="controller">
            <Knob
              patchState={chorus.rate}
              sendDispatch={this.props.sendDispatch}
              type="chorus"
              property="rate"
              min={0}
              max={8}
              step={0.5}
              />
            <label htmlFor="chorus-control">RATE</label>
          </div>

          <div className="controller">
            <Knob
              patchState={chorus.bypass}
              sendDispatch={this.props.sendDispatch}
              type="chorus"
              property="bypass"
              min={0}
              max={1}
              step={1}
              />
            <label htmlFor="chorus-control">BYPASS</label>
          </div>

        </div>
        <hr/>
      </div>
    );
  }
}

export default Chorus;
