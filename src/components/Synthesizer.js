import React, { Component } from 'react';
import Layout from './Layout';

const context = new AudioContext();

let OSCILLATOR_1 = context.createOscillator();

const GainNode = context.createGain();
GainNode.gain.value = 0;
GainNode.connect(context.destination);



function playSound() {
	OSCILLATOR_1.frequency.value = 440;
	OSCILLATOR_1.connect(GainNode);
	OSCILLATOR_1.start();
}

// playSound();


class Synthesizer extends Component {
	constructor(props) {
		super(props);

		this.receiveDispatch = this.receiveDispatch.bind(this);
	}

	receiveDispatch(type, property, value, id) {
		dispatches[type][property](value);
	}

	render() {
		return (
      <div>
        <Layout sendDispatch={this.receiveDispatch}/>
      </div>
		);
	}
}

export default Synthesizer;

const dispatches = {
	oscillator: {
		waveform: function(input) {
			console.log(input);
			OSCILLATOR_1.type = input;
		},
		gain: function(value) {
			console.log(value);
			GainNode.gain.value = value;
		}
	}
};
