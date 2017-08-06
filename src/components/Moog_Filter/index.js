import React, { Component } from 'react';
import Knob from '../Knob';
import './Moog_Filter.css';

class Moog_Filter extends Component {
	render() {
		return(
      <div>
				<h2>Moog Filter</h2>
				<div className="moog-grid">

					<div className="controller">
						<Knob sendDispatch={this.props.sendDispatch}
							type="moog_filter"
							property="buffer"
							min={256}
							max={16384}
							step={256}
							/>
						<label htmlFor="moog-filter-control">BUFFER</label>
					</div>

					<div className="controller">
						<Knob sendDispatch={this.props.sendDispatch}
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
							sendDispatch={this.props.sendDispatch}
							type="moog_filter"
							property="res"
							min={0}
							max={4}
							step={0.5}
							/>
						<label htmlFor="moog-filter-control">RES</label>
					</div>

				</div>
      </div>
		);
	}
}

export default Moog_Filter;
