import React, {Component} from 'react';
import Layout from './Layout';
import Tuna from 'tunajs';
import {KeyFreqs} from '../keyfreqs';
import patch from '../patch';


const audioContext = new AudioContext();
const tuna = Tuna(audioContext);

const synths = [];

let pressed = false;

class Synthesizer extends Component {
  constructor(props) {
    super(props);

    this.receiveDispatch = this.receiveDispatch.bind(this);
	this.playSound = this.playSound.bind(this)
    this.state = {
      		patch,
			synths: []
		}
		qwertyKeyboard(this.playSound)
  }
  receiveDispatch(type, property, value, id) {
		if(id) {
			dispatches[type][property](value, this, id)
		} else {
			dispatches[type][property](value, this)
		}
  }

	playSound(keyFreq, keyCode) {
		console.log(this.state.synths);
	  let synth = {
	    oscillators: []
	  };
	  synth.filter = audioContext.createBiquadFilter();
	  synth.filter.type = this.state.patch.filter.type;
	  synth.filter.frequency.value = this.state.patch.filter.frequency;
	  synth.filter.Q.value = this.state.patch.filter.Q;
	  synth.filter.gain.value = this.state.patch.filter.gain;

	  this.state.patch.oscillators.forEach(osc => {
	    let newOsc = audioContext.createOscillator()
	    newOsc.type = osc.type;
	    newOsc.frequency.value = keyFreq;
	    newOsc.detune.value = osc.detune;
	    newOsc.octave = osc.octave;
	    let newGain = audioContext.createGain()
	    newGain.value = osc.gain;
	    newOsc.connect(newGain);
	    newGain.connect(synth.filter);
	    synth.oscillators.push({osc: newOsc, gain: newGain});
	  });

	  let sortedBus = this.state.patch.effectBus.slice().sort((a, b) => {
	    return a.order - b.order;
	  });

	  let lastConnection = synth.filter;
	  synth.effectBus = []
	  sortedBus.forEach(effect => {
	    let nextEffect = getConstrucedEffect(effect.type, effect);
			nextEffect.type = effect.type;

	    lastConnection.connect(nextEffect);
	    lastConnection = nextEffect;
	    synth.effectBus.push(nextEffect)
	  });

	  let newCompressor = this.state.patch.compressor
	  synth.compressor = new tuna.Compressor({newCompressor});

	  lastConnection.connect(synth.compressor);
	  synth.masterGain = audioContext.createGain();
	  synth.masterGain.gain.value = this.state.patch.masterGain
	  synth.compressor.connect(synth.masterGain);

	  synth.masterGain.connect(audioContext.destination);

	  synth.oscillators.forEach(osc => {
	    osc.osc.start(audioContext.currentTime);
	  });
	  this.state.synths.push(synth);
	//   console.log(this.state.synths.length);
	  let index = this.state.synths.length - 1;
	//   console.log(this.state.synths);
	  document.addEventListener('keyup', event => {
	    if (event.code === keyCode) {
	      synth.oscillators.forEach(oscillator => {
	        oscillator.osc.stop();
			this.state.synths.splice(index, 1);
			keysPressed[event.code] = false;
	      })
	    }
	  })
	}

  render() {
    return (
      <div>
        <Layout sendDispatch={this.receiveDispatch}/>
      </div>
    );
  }
}

const keysPressed = {

}


function qwertyKeyboard(playSound) {
	window.addEventListener('keydown', event => {
		if (pressed === false) {
			switch (event.code) {
				case 'KeyA':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.C3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyW':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.C3Sharp, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyS':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.D3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyE':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.D3Sharp, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyD':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.E3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyF':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.F3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyT':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.F3Sharp, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyG':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.G3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyY':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.G3Sharp, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyH':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.A3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyU':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.A3Sharp, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyJ':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.B3, event.code);
						keysPressed[event.code] = true;
					}
					break;
				case 'KeyK':
					if(!keysPressed[event.code]) {
						playSound(KeyFreqs.C4, event.code);
						keysPressed[event.code] = true;
					}
					break;
				default:
			}
		}
	})
}

export default Synthesizer;

const dispatches = {
  oscillator: {
    waveform(value, component, id) {
			console.log(id);
			let newSynths = [...component.state.synths]
			newSynths.forEach(synth => {
				synth.oscillators[id - 1].type = value;
			})
		  let newPatch = {...patch}
			newPatch.oscillators = [...patch.oscillators]
			newPatch.oscillators[id - 1].type = value;
			console.log(newPatch);
		  	component.setState({
			  patch: newPatch,
			  synths: newSynths
		  	})
			console.log(component.state);
    },
    gain(value, component, id) {
      console.log("OSC Gain: ", value);
    },
    detune: function(value) {
      console.log("OSC Detune: ", value);
    }
  },
  adsr: {
    attack: function(value) {
      console.log("Master Attack: ", value);
    },
    decay: function(value) {
      console.log("Master Decay: ", value);
    },
    sustain: function(value) {
      console.log("Master Sustain: ", value);
    },
    release: function(value) {
      console.log("Master Release: ", value);
    }
  },
  filter: {
    type: (value, component) => {
		let newSynths = [...component.state.synths]
  	  	newSynths.forEach(synth => {
  		 synth.filter.type = value;
  	  })
  	  let newPatch = {...patch}
  	  newPatch.filter = {...patch.filter}
  	  newPatch.filter.type = value;
  	  component.setState({
  		patch: newPatch,
  		synths: newSynths
  	})
    },
    frequency(value, component) {
	  	let newSynths = [...component.state.synths]
		newSynths.forEach(synth => {
			synth.filter.frequency.value = value;
		})
	  	let newPatch = {...patch}
		newPatch.filter = {...patch.filter}
		newPatch.filter.frequency = value;
	  	component.setState({
		  patch: newPatch,
		  synths: newSynths
	  })
    },
    Q: function(value, component) {
	  let newSynths = [...component.state.synths]
	  newSynths.forEach(synth => {
		  synth.filter.Q.value = value;
	  })
	  let newPatch = {...patch}
	  newPatch.filter = {...patch.filter}
	  newPatch.filter.Q = value;
	  component.setState({
		patch: newPatch,
		synths: newSynths
	})
    },
    gain: function(value, component) {
		let newSynths = [...component.state.synths]
  	  	newSynths.forEach(synth => {
  		synth.filter.gain.value = value;
  	  })
  	  let newPatch = {...patch}
  	  newPatch.filter = {...patch.filter}
  	  newPatch.filter.gain = value;
  	  component.setState({
  		patch: newPatch,
  		synths: newSynths
  	})
    }
  },
  lfo: {
    type: function(input) {
      console.log("LFO type: ", input);
    },
    frequency: function(value) {
      console.log("LFO frequency: ", value);
    },
    modGain: function(value) {
      console.log("Mod Gain: ", value);
    }
  },
  compressor: {
    threshold: function(value) {
      console.log("comp threshold: ", value);
    },
    makeUpGain: function(value) {
      console.log("comp makeUpGain: ", value);
    },
    attack: function(value) {
      console.log("comp attack: ", value);
    },
    release: function(value) {
      console.log("comp release: ", value);
    },
    ratio: function(value) {
      console.log("comp ratio: ", value);
    },
    knee: function(value) {
      console.log("comp knee: ", value);
    },
    autoMakeUp: function(boolean) {
      console.log("automakeup compressor: ", boolean);
    },
    bypass: function(value) {
      console.log("compressor bypass: ", value);
    }
  },
  convolver: {
    highcut: function(value) {
      console.log("HC verb: ", value);
    },
    lowcut: function(value) {
      console.log("LC verb: ", value);
    },
    dryLevel: function(value) {
      console.log("dryLevel verb: ", value);
    },
    wetLevel: function(value) {
      console.log("wetLevel verb: ", value);
    },
    level: function(value) {
      console.log("Level verb: ", value);
    },
    bypass: function(value) {
      console.log("bypass verb: ", value);
    },
    order: function(value) {
      console.log("FX Order verb: ", value);
    }
  },
  ping_pong: {
    feedback: function(value) {
      console.log("Ping Pong Feedback: ", value);
    },
    wet: function(value) {
      console.log("Ping Pong wet: ", value);
    },
    delay_left: function(value) {
      console.log("Ping Pong Feedback: ", value);
    },
    delay_right: function(value) {
      console.log("Ping Pong Feedback: ", value);
    },
    order: function(value) {
      console.log("PING Order verb: ", value);
    }
  },
  phaser: {
    rate: function(value) {
      console.log("Phaser rate: ", value);
    },
    depth: function(value) {
      console.log("Phaser depth: ", value);
    },
    feedback: function(value) {
      console.log("Phaser feedback: ", value);
    },
    stereo_phase: function(value) {
      console.log("Phaser stereo_phase: ", value);
    },
    BMF: function(value) {
      console.log("Phaser BMF: ", value);
    },
    bypass: function(value) {
      console.log("Phaser Bypass: ", value);
    },
    order: function(value) {
      console.log("Phaser FX Order verb: ", value);
    }
  },
  overdrive: {
    drive: function(value) {
      console.log("overdrive drive: ", value);
    },
    output_gain: function(value) {
      console.log("overdrive output_gain: ", value);
    },
    curve_amount: function(value) {
      console.log("overdrive curve_amount: ", value);
    },
    algorithm_index(value, component) {
      console.log("overdrive algorithm_index: ", value);
    },
    bypass(value, component) {
      console.log("Overdrive Bypass: ", value);
    },
    order(value) {
      console.log("overdrive FX Order verb: ", value);
    }
  },
  moog_filter: {
    buffer: function(value) {
      console.log("Moog buffer: ", value);
    },
    cutoff: function(value) {
      console.log("Moog cutoff: ", value);
    },
    res: function(value) {
      console.log("Moog res: ", value);
    },
    order: function(value) {
      console.log("Moog FX Order verb: ", value);
    }
  },
  chorus: {
    feedback: function(value) {
      console.log("Chorus feedback: ", value);
    },
    delay: function(value) {
      console.log("Chorus delay: ", value);
    },
    rate: function(value) {
      console.log("Chorus rate: ", value);
    },
    bypass: function(value) {
      console.log("Chorus Bypass: ", value);
    },
    order: function(value) {
      console.log("Chorus FX Order verb: ", value);
    }
  },
  bitcrusher: {
    bits: function(value, component) {
  		let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            console.log(synth);
    		    // synth.effectBus[0].wet.gain.value = value;
    	  })
    	  let newPatch = {...patch}
    	  newPatch.bitcrusher = {...patch.bitcrusher}
    	  newPatch.bitcrusher.bits = value;
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    buffer: function(value) {
      console.log("Bits buffer: ", value);
    },
    norm_freq: function(value) {
      console.log("Bits norm_freq: ", value);
    }
  },
  delay: {
    time: function(value) {
      console.log("Delay time: ", value);
    },
    feedback: function(value) {
      console.log("Delay feedback: ", value);
    },
    cutoff: function(value) {
      console.log("Delay cuttoff: ", value);
    },
    dry: function(value) {
      console.log("Delay dry: ", value);
    },
    bypass: function(value) {

    },
    wet: function(value, component) {
  		let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            console.log(synth);
    		    synth.effectBus[0].wet.gain.value = value;
    	  })
    	  let newPatch = {...patch}
    	  newPatch.delay = {...patch.delay}
    	  newPatch.delay.wet = value;
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    }
  }
}

function getConstrucedEffect(type, data) {
  switch (type) {
    case 'bitcrusher':
      return new tuna.Bitcrusher(data);
    case 'overdrive':
      return new tuna.Overdrive(data);
    case 'filter':
      return new tuna.Filter(data);
    case 'convolver':
      return new tuna.Convolver(data);
    case 'tremolo':
      return new tuna.Tremolo(data);
    case 'delay':
      return new tuna.Delay(data);
    default:
      return type;
  }
}
