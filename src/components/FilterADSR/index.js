import React, { Component } from 'react';
import Knob from '../Knob';
import './FilterADSR.css';

class FilterADSR extends Component {
	render() {
		return(
			<div>
				<h3>FILTER ENV</h3>
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
							max={1}
							step={0.1}
							/>
						<label htmlFor="filter-control">DELAY</label>
					</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.sustain}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="sustain"
							min={0}
							max={1}
							step={0.1}
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

			</div>
		);
	}
}

export default FilterADSR;
