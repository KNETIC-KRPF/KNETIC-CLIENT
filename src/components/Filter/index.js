import React, { Component } from 'react';
import Knob from '../Knob';
import './Filter.css';

class Filter extends Component {
	render() {
		return(
			<div>
				<h3>FILTER</h3>
				<div className="filter-grid">

				<div className="controller">
					<select className="" defaultValue={this.props.patch.filter.type} onChange={(event) => this.props.sendDispatch('filter', 'type', event.target.value)}>
						<option value="lowpass">Low Pass</option>
						<option value="highpass">High Pass</option>
						<option value="bandpass">Band Pass</option>
						<option value="allpass">All Pass</option>
						<option value="lowshelf">Low Shelf</option>
						<option value="highshelf">High Shelf</option>
						<option value="notch">Notch</option>
					</select>
					<label htmlFor="filter-type">FILTER</label>
				</div>

				<div className="controller">
					<Knob
						patchState={this.props.patch.filter.frequency}
						sendDispatch={this.props.sendDispatch}
						type="filter"
						property="frequency"
						min={20}
						max={19999}
						step={100}
						/>
					<label htmlFor="frequency">FREQUENCY</label>
				</div>

				<div className="controller">
					<Knob
						patchState={this.props.patch.filter.Q}
						sendDispatch={this.props.sendDispatch}
						type="filter"
						property="Q"
						min={0}
						max={20}
						step={1}
						/>
					<label htmlFor="q-factor">Q</label>
				</div>

					<div className="controller">
						<Knob
							patchState={this.props.patch.filter.gain}
							sendDispatch={this.props.sendDispatch}
							type="filter"
							property="gain"
							min={0}
							max={100}
							step={10}
							/>
						<label htmlFor="filter-gain">GAIN</label>
					</div>

				</div>

			</div>
		);
	}
}

export default Filter;
