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
			let newSynths = [...component.state.synths]
			newSynths.forEach(synth => {
				synth.oscillators[id - 1].type = value;
			})
		  let newPatch = {...component.state.patch}
			newPatch.oscillators = [...patch.oscillators]
			newPatch.oscillators[id - 1].type = value;
		  	component.setState({
			  patch: newPatch,
			  synths: newSynths
		  })
    },
    gain(value, component, id) {
			let newSynths = [...component.state.synths]
			newSynths.forEach(synth => {
				synth.oscillators[id - 1].gain.gain.value = value;
			})
		  let newPatch = {...component.state.patch}
			newPatch.oscillators = [...patch.oscillators]
			newPatch.oscillators[id - 1].gain = value;
		  	component.setState({
			  patch: newPatch,
			  synths: newSynths
		  })
    },
    detune(value, component, id) {
			let newSynths = [...component.state.synths]
			newSynths.forEach(synth => {
				synth.oscillators[id - 1].osc.detune.value = value;
			})
		  let newPatch = {...component.state.patch}
			newPatch.oscillators = [...patch.oscillators]
			newPatch.oscillators[id - 1].gain = value;
		  	component.setState({
			  patch: newPatch,
			  synths: newSynths
		  })
    }
  },
  adsr: {
    attack(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.adsr.attack = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.adsr.attack = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    decay(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.adsr.decay = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.adsr.decay = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    sustain(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.adsr.sustain = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.adsr.sustain = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    release(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.adsr.release = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.adsr.release = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    }
  },
  filter: {
    type: (value, component) => {
		let newSynths = [...component.state.synths]
  	  	newSynths.forEach(synth => {
  		 synth.filter.type = value;
  	  })
  	  let newPatch = {...component.state.patch}
  	  newPatch.filter = {...newPatch.filter}
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
	  	let newPatch = {...component.state.patch}
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
	  let newPatch = {...component.state.patch}
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
  	  let newPatch = {...component.state.patch}
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
    threshold(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.threshold = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.threshold = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    makeUpGain(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.makeupGain.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.makeupGain = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    attack(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.attack.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.attack = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    release(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.release.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.release = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    ratio(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.ratio.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.ratio = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },
    knee(value, component) {
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.knee.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.knee = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})
    },

		//////////// THIS ONE IS MISSING FROM COMPONENT
    autoMakeUp(value, component) {
			console.log(component.state);
			let newSynths = [...component.state.synths]
	  	  	newSynths.forEach(synth => {
	  		 	synth.compressor.autoMakeUp.value = value;
	  	  })
	  	  let newPatch = {...component.state.patch}
	  	  newPatch.compressor.autoMakeUp = value;
	  	  component.setState({
	  		patch: newPatch,
	  		synths: newSynths
	  	})

		//////////////
    },


		/// THIS ONE IS MISSING TOO
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
    feedback: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'ping_pong') {
                effect.feedback = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'ping_pong') {
            effect.feedback = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    wet: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'ping_pong') {
                effect.wetLevel.gain.value = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'ping_pong') {
            effect.feedback = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    delay_left: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'ping_pong') {
                effect.delayTimeLeft = value;
                console.log(effect);
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'ping_pong') {
            effect.delayTimeLeft = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    delay_right: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'ping_pong') {
                effect.delayTimeRight = value;
                console.log(effect);
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'ping_pong') {
            effect.delayTimRight = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    order: function(value) {
      console.log("PING Order verb: ", value);
    }
  },
  phaser: {
    rate: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'phaser') {
                effect._rate = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'phaser') {
            effect.rate = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    depth: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'phaser') {
                effect._depth = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'phaser') {
            effect.depth = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    feedback: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'phaser') {
                effect._feedback = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'phaser') {
            effect.feedback = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    stereo_phase: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'phaser') {
                effect._stereoPhase = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'phaser') {
            effect.stereoPhase = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    // BMF: function(value, component) {
    //   let newSynths = [...component.state.synths]
    // 	  	newSynths.forEach(synth => {
    //         synth.effectBus.forEach(effect => {
    //           if (effect.type === 'phaser') {
    //             effect.baseModulationFrequency = value;
    //             console.log(effect);
    //           }
    //         })
    // 	  })
    // 	  let newPatch = {...component.state.patch}
    //     newPatch.effectBus.forEach(effect => {
    //       if (effect.type === 'phaser') {
    //         effect.baseModulationFrequency = value;
    //       }
    //     })
    // 	  component.setState({
    //   		patch: newPatch,
    //   		synths: newSynths
    //   	});
    // },
    bypass: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'phaser') {
                effect._bypass = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'phaser') {
            effect.bypass = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    order: function(value) {
      console.log("Phaser FX Order verb: ", value);
    }
  },
  overdrive: {
    drive: function(value, component) {
      let newSynths = [...component.state.synths]
          newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'overdrive') {
                effect.inputDrive.gain.value = value;
              }
            })
        })
        let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'overdrive') {
            effect.drive = value;
          }
        })
        component.setState({
          patch: newPatch,
          synths: newSynths
        });
    },
    output_gain: function(value, component) {
      let newSynths = [...component.state.synths]
          newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'overdrive') {
                effect.outputDrive.gain.value = value;
              }
            })
        })
        let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'overdrive') {
            effect.outputGain = value;
          }
        })
        component.setState({
          patch: newPatch,
          synths: newSynths
        });
    },
    curve_amount: function(value, component) {
      let newSynths = [...component.state.synths]
          newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'overdrive') {
                effect._curveAmount= value;
                console.log(effect);
              }
            })
        })
        let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'overdrive') {
            effect.curveAmount = value;
          }
        })
        component.setState({
          patch: newPatch,
          synths: newSynths
        });
    },
    algorithm_index(value, component) {
      let newSynths = [...component.state.synths]
          newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'overdrive') {
                effect._algorithmIndex= value;
              }
            })
        })
        let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'overdrive') {
            effect.algorithmIndex = value;
          }
        })
        component.setState({
          patch: newPatch,
          synths: newSynths
        });
    },
    bypass(value, component) {
      let newSynths = [...component.state.synths]
          newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'overdrive') {
                effect.bypass= value;
              }
            })
        })
        let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'overdrive') {
            effect.bypass = value;
          }
        })
        component.setState({
          patch: newPatch,
          synths: newSynths
        });
    },
    order(value) {
      console.log("overdrive FX Order verb: ", value);
    }
  },
  moog_filter: {
    buffer: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'moog') {
                effect.buffer = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'moog') {
            effect.buffer = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    cutoff: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'moog') {
                effect.cutoff = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'moog') {
            effect.cutoff = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    res: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'moog') {
                effect.res = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'moog') {
            effect.res = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    order: function(value) {
      console.log("Moog FX Order verb: ", value);
    }
  },
  chorus: {
    feedback: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'chorus') {
                effect.feedback = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'chorus') {
            effect.feeback = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    delay: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'chorus') {
                effect.delay = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'chorus') {
            effect.delay = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    rate: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'chorus') {
                effect.rate = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'chorus') {
            effect.rate = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    bypass: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'chorus') {
                effect.bypass = value;
                console.log(effect);
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'chorus') {
            effect._bypass = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    order: function(value) {

    }
  },
  bitcrusher: {
    bits: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'bitcrusher') {
                effect.bits = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'bitcrusher') {
            effect.bits = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    buffer: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'bitcrusher') {
                effect.buffer = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'bitcrusher') {
            effect.bufferSize = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    norm_freq: function(value, component) {
      // let newSynths = [...component.state.synths]
    	//   	newSynths.forEach(synth => {
      //       synth.effectBus.forEach(effect => {
      //         if (effect.type === 'bitcrusher') {
      //           effect.norm_freq = value;
      //         }
      //       })
    	//   })
      //   console.log(newSynths);
    	//   let newPatch = {...component.state.patch}
      //   newPatch.effectBus.forEach(effect => {
      //     if (effect.type === 'bitcrusher') {
      //       effect.normfreq = value;
      //     }
      //   })
    	//   component.setState({
      // 		patch: newPatch,
      // 		synths: newSynths
      // 	});
    }
  },
  delay: {
    time: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'delay') {
                effect.time = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'delay') {
            effect.delayTime = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    feedback: function(value, component) {
      let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'delay') {
                effect.feedback = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'delay') {
            effect.feedback = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    cutoff: function(value, component) {
  		let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'delay') {
                effect.cutoff = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'delay') {
            effect.cutoff = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    dry: function(value, component) {
  		let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'delay') {
                effect.dry.gain.value = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'delay') {
            effect.drylevel = value;
          }
        })
    	  component.setState({
      		patch: newPatch,
      		synths: newSynths
      	});
    },
    bypass: function(value, component) {
        		let newSynths = [...component.state.synths]
          	  	newSynths.forEach(synth => {
                  synth.effectBus.forEach(effect => {
                    if (effect.type === 'delay') {
                      effect.bypass = value;
                    }
                  })
          	  })
          	  let newPatch = {...component.state.patch}
              newPatch.effectBus.forEach(effect => {
                if (effect.type === 'delay') {
                  effect.wetLevel = value;
                }
              })
          	  component.setState({
            		patch: newPatch,
            		synths: newSynths
            	});
    },
    wet: function(value, component) {
  		let newSynths = [...component.state.synths]
    	  	newSynths.forEach(synth => {
            synth.effectBus.forEach(effect => {
              if (effect.type === 'delay') {
                effect.wet.gain.value = value;
              }
            })
    	  })
    	  let newPatch = {...component.state.patch}
        newPatch.effectBus.forEach(effect => {
          if (effect.type === 'delay') {
            effect.wetLevel = value;
          }
        })
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
    case 'chorus':
      return new tuna.Chorus(data);
    case 'moog':
      return new tuna.MoogFilter(data);
    case 'phaser':
      return new tuna.Phaser(data);
    case 'ping_pong':
      return new tuna.PingPongDelay(data);
    default:
      return type;
  }
}
