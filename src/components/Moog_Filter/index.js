import React, { Component } from 'react';
import Knob from '../Knob';
import './Moog_Filter.css';

class Moog_Filter extends Component {
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
		const findMoog = efx => efx.type === "moog";
		const moog = efxProp.find(findMoog);

		const moogComponent = (
			<div className="moog-grid">
				<div className="controller">
					<Knob
						patchState={moog.bufferSize}
						sendDispatch={this.props.sendDispatch}
						type="moog_filter"
						property="bufferSize"
						min={256}
						max={16384}
						step={256}
						/>
					<label htmlFor="moog-filter-control">BUFFER</label>
				</div>

				<div className="controller">
					<Knob
						patchState={moog.cutoff}
						sendDispatch={this.props.sendDispatch}
						type="moog_filter"
						property="cutoff"
						min={0}
						max={1}
						step={0.1}
						/>
					<label htmlFor="moog-filter-control">CUTOFF</label>
				</div>

				<div className="controller">
					<Knob
						patchState={moog.resonance}
						sendDispatch={this.props.sendDispatch}
						type="moog_filter"
						property="res"
						min={0}
						max={4}
						step={0.5}
						/>
					<label htmlFor="moog-filter-control">RESONANCE</label>
				</div>
			</div>
		);

		return(
      <div>
				<h4 className="expand-efx" onClick={this.handleClick}>MOOG FILTER</h4>
					{this.state.isToggleOn && moogComponent}
				<hr/>
      </div>
		);
	}
}

export default Moog_Filter;
