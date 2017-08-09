import React, { Component } from 'react';
import './PatchCollection.css';



class PatchCollection extends Component {
	render() {
		let options = false
		if(this.props.selectValues !== undefined) {
			options = this.props.selectValues.map((patch, index) => {
				return (<option key={index} value={patch.id}>{patch.name} | {patch.type}</option>);
			});
		}
		return(
			<div>
				<select className="patch-selection" onChange={(event) => this.props.setPatchFromCollection(event.target.value)}>
					{options && options}
				</select>
			</div>
		);
	}
}

export default PatchCollection;
