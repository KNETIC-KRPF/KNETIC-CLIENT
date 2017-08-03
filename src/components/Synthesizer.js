import React, {Component} from 'react';
import Layout from './Layout';
import Tuna from 'tunajs';
import Synth from '../synthClass';


const patch = {
  oscillators: [
    {
      type: 'sawtooth',
      detune: 0,
      octave: 3,
      gain: .5
    }, {
      type: 'sawtooth',
      detune: 0,
      octave: 3,
      gain: .3
    }, {
      type: 'sawtooth',
      detune: -.1,
      octave: 3,
      gain: .6
    }
  ],
  filter: {
    type: 'lowpass',
    frequency: 600,
    Q: 1,
    gain: 1,
    attack: 1000,
    decay: 3000,
    sustain: .4,
    release: 300
  },
  effectBus: [
    {
      type: 'convolver',
      highCut: 22050, //20 to 22050
      lowCut: 20, //20 to 22050
      dryLevel: 1, //0 to 1+
      wetLevel: 1, //0 to 1+
      level: 1, //0 to 1+, adjusts total output of both wet and dry
      impulse: "impulses/impulse_rev.wav", //the path to your impulse response
      bypass: 0,
      order: 5
    }, {
      type: 'tremolo',
      intensity: 0.3, //0 to 1
      rate: 4, //0.001 to 8
      stereoPhase: 0, //0 to 180
      bypass: 0,
      order: 1
    }, {
      type: 'bitcrusher',
      bits: 10, //1 to 16
      normfreq: 0.1, //0 to 1
      bufferSize: 16384, //256 to 16384
      order: 2
    }, {
      type: 'delay',
      feedback: 0.45, //0 to 1+
      delayTime: 400, //1 to 10000 milliseconds
      wetLevel: 0.25, //0 to 1+
      dryLevel: 1, //0 to 1+
      cutoff: 2000, //cutoff frequency of the built in lowpass-filter. 20 to 22050
      bypass: 0,
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
}

const audioContext = new AudioContext();
const tuna = Tuna(audioContext);
// const synth = new Synth(audioContext, tuna, patch)

// console.log(synth);

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
    },
    attack: function(value) {
      console.log("Filter Attack: ", value);
    },
    decay: function(value) {
      console.log("Filter Decay: ", value);
    },
    sustain: function(value) {
      console.log("Filter Sustain: ", value);
    },
    release: function(value) {
      console.log("Filter Release: ", value);
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
    dry: function(value) {
      console.log("Ping Pong Feedback: ", value);
    },
    delay_left: function(value) {
      console.log("Ping Pong Feedback: ", value);
    },
    delay_right: function(value) {
      console.log("Ping Pong Feedback: ", value);
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
    }
  },
  moog_fliter: {
    buffer: function(value) {
      console.log("Moog buffer: ", value);
    },
    cuttoff: function(value) {
      console.log("Moog cutoff: ", value);
    },
    res: function(value) {
      console.log("Moog res: ", value);
    }
  },
  chorus: {
    feedback: function(value) {
      console.log("Chorus feedback: ", value);
    },
    delay: function(value) {
      console.log("Chorus delay: ", value);
    },
    depth: function(value) {
      console.log("Chorus depth: ", value);
    },
    rate: function(value) {
      console.log("Chorus rate: ", value);
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
    cuttoff: function(value) {
      console.log("Delay cuttoff: ", value);
    },
    dry: function(value) {
      console.log("Delay dry: ", value);
    },
    wet: function(value) {
      console.log("Delay wet: ", value);
    }
  }
}
