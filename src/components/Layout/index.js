import React, { Component } from 'react';
import Oscillator from '../Oscillator';
import './Layout.css';

class Layout extends Component {
	constructor(props){
		super(props);

	}
	render() {
		return(
			<div className="main-layout">
				<Oscillator sendDispatch={this.props.sendDispatch} />
				<Oscillator sendDispatch={this.props.sendDispatch} />
				<Oscillator sendDispatch={this.props.sendDispatch} />
			</div>


		)
	}
}

export default Layout;
