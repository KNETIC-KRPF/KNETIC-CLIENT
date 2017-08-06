import React, { Component } from 'react';
import Knob from '../Knob';
import './Overdrive.css';

class Overdrive extends Component {
	render() {
		return(
			<div>
				<h2>Overdrive</h2>
				<div className="overdrive-grid">

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="drive"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">DRIVE</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="output_gain"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">GAIN</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="curve_amount"
							min={0}
							max={1}
							step={0.1}
							/>
						<label htmlFor="overdrive-control">CURVE AMOUNT</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="algorithm_index"
							min={0}
							max={5}
							step={1}
							/>
						<label htmlFor="overdrive-control">ALGORITHM INDEX</label>
					</div>

					<div className="controller">
						<Knob
							sendDispatch={this.props.sendDispatch}
							type="overdrive"
							property="bypass"
							min={0}
							max={1}
							step={1}
							/>
						<label htmlFor="overdrive-control">BYPASS</label>
					</div>

				</div>
			</div>
		);
	}
}

export default Overdrive;
