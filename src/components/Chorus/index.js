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
                <Knob
                  sendDispatch={this.props.sendDispatch}
                  type="chorus"
                  property="feedback"
                  min="0"
                  max="1"
                  step="0.01"
                  />
                <br/>
                <label htmlFor="chorus-control">Delay: </label>
                <Knob
                  sendDispatch={this.props.sendDispatch}
                  type="chorus"
                  property="delay"
                  min="0"
                  max="1"
                  step="0.005"
                  />
                <br/>
                <label htmlFor="chorus-control">Bypass: </label>
                <Knob sendDispatch={this.props.sendDispatch}
                  type="chorus"
                  property="bypass"
                  min="0"
                  max="1"
                  step="1"
                  />
                <br/>
                <label htmlFor="chorus-control">Rate: </label>
                <Knob sendDispatch={this.props.sendDispatch}
                  type="chorus"
                  property="rate"
                  min="0"
                  max="8"
                  step="0.5"
                  />
            </div>
        );
    }
}

export default Chorus;
