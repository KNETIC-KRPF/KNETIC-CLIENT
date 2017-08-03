import React, { Component } from 'react';
import Knob from '../Knob';
import './Chorus.css';

class Chorus extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Chorus</h2>
                <label htmlFor="chorus-control">Feedback: </label>
                <Knob sendDispatch={this.props.sendDispatch} />
                <br/>
                <label htmlFor="chorus-control">Delay: </label>
                <Knob sendDispatch={this.props.sendDispatch} />
                <br/>
                <label htmlFor="chorus-control">Depth: </label>
                <Knob sendDispatch={this.props.sendDispatch} />
                <br/>
                <label htmlFor="chorus-control">Rate: </label>
                <Knob sendDispatch={this.props.sendDispatch} />
            </div>
        );
    }
}

export default Chorus;
