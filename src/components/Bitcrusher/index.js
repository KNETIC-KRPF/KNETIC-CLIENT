import React, { Component } from 'react';
import Knob from '../Knob';
import './Bitcrusher.css';

class Bitcrusher extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>Bitcrusher</h2>
				<label htmlFor="bitcrusher-control">Bits: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="bitcrusher-control">Buffer: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
				<br/>
				<label htmlFor="bitcrusher-control">Norm Freq: </label>
				<Knob sendDispatch={this.props.sendDispatch} />
			</div>
		);
	}
}

export default Bitcrusher;
