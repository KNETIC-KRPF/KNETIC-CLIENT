import React, { Component } from 'react';
import './PatchCollection.css';

import {ROOT_URL} from '../../RootURL';

class PatchCollection extends Component {
	constructor(props) {
	  super(props);

		this.state = {
			patches: []
		}

		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		fetch(`${ROOT_URL}/patches`)
		.then(res => res.json())
		.then(res => {
			const newState = res;
			this.setState({
				patches: newState
			});
		});
	}

	handleSelect() {
		
	}

	render() {
		const options = this.state.patches.map((patch, index) => {
			return (<option key={index} value={patch.name}>{patch.name} | {patch.type}</option>);
		});
		return(
			<div>
				<select className="patch-selection" onChange={this.handleSelect}>
					{options}
				</select>
			</div>
		);
	}
}

export default PatchCollection;
