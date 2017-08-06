const patch = {
  oscillators: [
		{
	    id: 1,
	    type: 'sawtooth',
	    detune: 0,
	    octave: 3,
	    gain: 100
		},
		{
	    id: 2,
	    type: 'sawtooth',
	    detune: 0,
	    octave: 3,
	    gain: 100
  	},
		{
	    id: 3,
	    type: 'sawtooth',
	    detune: 0,
	    octave: 3,
	    gain: 100
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
  effectBus: [{
      type: 'delay',
      feedback: 0.05, //0 to 1+
      delayTime: 10, //1 to 10000 milliseconds
      wetLevel: 0.25, //0 to 1+
      dryLevel: 1, //0 to 1+
      cutoff: 2000, //cutoff frequency of the built in lowpass-filter. 20 to 22050
      bypass: 0,
      order: 6
    },
    // {
    //   type: 'convolver',
    //   highcut: 22050, //20 to 22050
    //   lowcut: 20, //20 to 22050
    //   dryLevel: 0, //0 to 1+
    //   wetLevel: 0, //0 to 1+
    //   level: 1, //0 to 1+, adjusts total output of both wet and dry
    //   // impulse: "impulses/impulse_rev.wav", //the path to your impulse response
    //   bypass: 1,
    //   order: 5
    // },
    //  {
    //   type: 'bitcrusher',
    //   bits: 0, //1 to 16
    //   normfreq: 0.1, //0 to 1
    //   bufferSize: 256, //256 to 16384
    //   order: 10
    // },
    {
      type: 'chorus',
      rate: 1.5,
      feedback: 0.2,
      delay: 0.0045,
      bypass: 1,
      order: 1
    },
    {
      type: 'moog',
      cutoff: 0.9,    //0 to 1
      resonance: 1,   //0 to 4
      bufferSize: 256,
      order: 2
    },
    {
      type: 'phaser',
      rate: 1.2, //0.01 to 8 is a decent range, but higher values are possible
      depth: 0.3, //0 to 1
      feedback: 0.2, //0 to 1+
      stereoPhase: 30, //0 to 180
      baseModulationFrequency: 700, //500 to 1500
      bypass: 0,
      order: 3
    },
    {
      type: 'ping_pong',
      wetLevel: 0, //0 to 1
      feedback: 0.3, //0 to 1
      delayTimeLeft: 200, //1 to 10000 (milliseconds)
      delayTimeRight: 200, //1 to 10000 (milliseconds)
      order: 4
    },
    {
      type: 'overdrive',
      outputGain: 0.5,         //0 to 1+
      drive: 0.7,              //0 to 1
      curveAmount: 1,          //0 to 1
      algorithmIndex: 0,       //0 to 5, selects one of our drive algorithms
      bypass: 1,
      order: 5
    }
  ],
  compressor: {
    threshold: 0, //-100 to 0
    makeupGain: 0, //0 and up (in decibels)
    attack: 20, //0 to 1000
    release: 200, //0 to 3000
    ratio: 3, //1 to 20
    knee: 6, //0 to 40
    automakeup: true, //true/false
    bypass: 0
  },
  adsr: {
    attack: 30,
    decay: 100,
    sustain: .3,
    release: 3000
  },
  masterGain: 1
}


export default patch;
