import React, { Component } from 'react';
import Knob from '../Knob';
import './FilterADSR.css';

class FilterADSR extends Component {
	render() {
		return(
			<div>
				<h4>FILTER ENVELOPE</h4>
				<div className="filter-grid">
					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.attack}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="attack"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="filter-control">ATTACK</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.decay}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="decay"
							min={0}
							max={5000}
							step={10}
							/>
						<label htmlFor="filter-control">DECAY</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.sustain}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="sustain"
							min={20}
							max={20000}
							step={100}
							/>
						<label htmlFor="filter-control">SUSTAIN</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.release}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="release"
							min={0}
							max={3000}
							step={10}
							/>
						<label htmlFor="filter-control">RELEASE</label>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default FilterADSR;
