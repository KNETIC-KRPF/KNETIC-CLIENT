import React, { Component } from 'react';
import './PatchCollection.css';

import {ROOT_URL} from '../../RootURL';

class PatchCollection extends Component {
	constructor(props) {
	  super(props);

		this.state = {
			patches: []
		}
	}

	componentDidMount() {
		fetch(`${ROOT_URL}/patches`)
		.then(res => res.json())
		.then(res => {
			const newState = [...this.state.patches];
			newState.concat(res)
			this.setState({
				patches: newState
			});
		})
	}

	renderOptions() {
		this.state.patches.map((patch, i) => {
			return <option value={this.state.patches.name}></option>
		});
	}

	render() {
		return(
			<div>
				<select className="patch-selection">
					<option value="test-patch">Rosscillator</option>
					<option value="test-patch">Jakeillator</option>
					<option value="test-patch">Mattillator</option>
					<option value="test-patch">Lexillator</option>
				</select>
			</div>
		);
	}
}

export default PatchCollection;
