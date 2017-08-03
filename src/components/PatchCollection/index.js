import React, { Component } from 'react';
import './PatchCollection.css';

class PatchCollection extends Component {
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
