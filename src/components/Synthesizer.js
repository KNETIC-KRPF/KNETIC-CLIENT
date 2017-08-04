import React, {Component} from 'react';
import Layout from './Layout';
import Tuna from 'tunajs';
import {KeyFreqs} from '../keyfreqs';

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
      patch: {
        oscillators: [
          {
            type: 'sine',
            detune: 0,
            octave: 3,
            gain: .5
          }, {
            type: 'sawtooth',
            detune: 0,
            octave: 3,
            gain: .3
          }, {
            type: 'square',
            detune: -.1,
            octave: 3,
            gain: .6
          }
        ],
        filter: {
          type: 'lowpass',
          frequency: 10000,
          Q: 1,
          gain: 1,
          attack: 1000,
          decay: 3000,
          sustain: .4,
          release: 300
        },
        effectBus: [
          {
            type: 'delay',
            feedback: 0.05, //0 to 1+
            delayTime: 400, //1 to 10000 milliseconds
            wetLevel: 0.25, //0 to 1+
            dryLevel: 1, //0 to 1+
            cutoff: 2000, //cutoff frequency of the built in lowpass-filter. 20 to 22050
            bypass: 1,
            order: 4
          }
        ],
        compressor: {
          threshold: -1, //-100 to 0
          makeupGain: 1, //0 and up (in decibels)
          attack: 1000, //0 to 1000
          release: 3000, //0 to 3000
          ratio: 20, //1 to 20
          knee: 40, //0 to 40
          automakeup: true, //true/false
          bypass: 0
        },
        adsr: {
          attack: 1000,
          decay: 2000,
          sustain: .4,
          release: 300
        },
        masterGain: 1
      },
			dispatches: dispatches
		}
		qwertyKeyboard(this.playSound)
  }

  receiveDispatch(type, property, value, id) {
    this.state.dispatches[type][property](value)
  }

	playSound(keyFreq, keyCode) {
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
	  synths.push(synth);
	  document.addEventListener('keyup', event => {
	    if (event.code === keyCode) {
	      synth.oscillators.forEach(oscillator => {
	        oscillator.osc.stop();
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



function qwertyKeyboard(playSound) {
	window.addEventListener('keydown', event => {
		if (pressed === false) {
			switch (event.code) {
				case 'KeyA':
					playSound(KeyFreqs.C3, event.code);
					break;
				case 'KeyW':
					playSound(KeyFreqs.C3Sharp, event.code);
					break;
				case 'KeyS':
					playSound(KeyFreqs.D3, event.code);
					break;
				case 'KeyE':
					playSound(KeyFreqs.D3Sharp, event.code);
					break;
				case 'KeyD':
					playSound(KeyFreqs.E3, event.code);
					break;
				case 'KeyF':
					playSound(KeyFreqs.F3, event.code);
					break;
				case 'KeyT':
					playSound(KeyFreqs.F3Sharp, event.code);
					break;
				case 'KeyG':
					playSound(KeyFreqs.G3, event.code);
					break;
				case 'KeyY':
					playSound(KeyFreqs.G3Sharp, event.code);
					break;
				case 'KeyH':
					playSound(KeyFreqs.A3, event.code);
					break;
				case 'KeyU':
					playSound(KeyFreqs.A3Sharp, event.code);
					break;
				case 'KeyJ':
					playSound(KeyFreqs.B3, event.code);
					break;
				case 'KeyK':
					playSound(KeyFreqs.C4, event.code);
					break;
				default:
			}
		}
	})
}

export default Synthesizer;

const dispatches = {
  oscillator: {
    waveform: function(input) {
      console.log("Oscillator waveform: ", input);
    },
    gain: function(value) {
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
    type: function(input) {
      console.log("filter type: ", input);
    },
    frequency: function(value) {
      console.log("frequency: ", value);
    },
    Q: function(value) {
      console.log("Q: ", value);
    },
    gain: function(value) {
      console.log("gain: ", value);
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
    algorithm_index: function(value) {
      console.log("overdrive algorithm_index: ", value);
    },
    bypass: function(value) {
      console.log("Overdrive Bypass: ", value);
    },
    order: function(value) {
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
    bits: function(value) {
      console.log("Bit bits: ", value);
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
      console.log("Delay Bypass: ", value);
    },
    wet: function(value) {
      console.log("Delay wet: ", value);
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
