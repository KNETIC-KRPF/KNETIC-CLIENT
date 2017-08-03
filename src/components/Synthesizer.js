import React, { Component } from 'react';
import Layout from './Layout';

const context = new AudioContext();

let OSCILLATOR_1 = context.createOscillator();

const GainNode = context.createGain();
GainNode.gain.value = 0;
<<<<<<< HEAD
GainNode.connect(context.destination)
=======
GainNode.connect(context.destination);
>>>>>>> 2512bb05b107a00e1d70329407f13cbd4d181e47



function playSound() {
	OSCILLATOR_1.frequency.value = 440;
	OSCILLATOR_1.connect(GainNode);
	OSCILLATOR_1.start();
}

// playSound();


class Synthesizer extends Component {
	constructor(props) {
		super(props);

<<<<<<< HEAD
    this.state = {
      patch: {
        oscillator: [{}, {}, {}],

      }
    }

    this.receiveDispatch = this.receiveDispatch.bind(this);
  }
=======
		this.receiveDispatch = this.receiveDispatch.bind(this);
	}
>>>>>>> 2512bb05b107a00e1d70329407f13cbd4d181e47

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
<<<<<<< HEAD
  oscillator: {
    waveform: function(input) {
      console.log(input);
      OSCILLATOR_1.type = input
    },
    gain: function(value) {
      console.log(value);
      GainNode.gain.value = value;
    },
    detune: function(value) {

    }
  }
}
=======
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
>>>>>>> 2512bb05b107a00e1d70329407f13cbd4d181e47
