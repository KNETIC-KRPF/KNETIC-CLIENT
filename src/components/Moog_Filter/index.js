import React, { Component } from 'react';
import Knob from '../Knob';
import './Moog_Filter.css';

class Moog_Filter extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
      <div>
          <h2>Moog Filter</h2>
          <label htmlFor="moog-filter-control">Buffer: </label>
          <Knob sendDispatch={this.props.sendDispatch} />
          <br/>
          <label htmlFor="moog-filter-control">Cutoff: </label>
          <Knob sendDispatch={this.props.sendDispatch} />
          <br/>
          <label htmlFor="moog-filter-control">Res: </label>
          <Knob sendDispatch={this.props.sendDispatch} />
      </div>
		);
	}
}

export default Moog_Filter;
