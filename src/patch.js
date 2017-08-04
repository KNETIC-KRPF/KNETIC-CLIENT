const patch = {
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
    // {
    //   type: 'convolver',
    //   highCut: 22050, //20 to 22050
    //   lowCut: 20, //20 to 22050
    //   dryLevel: 1, //0 to 1+
    //   wetLevel: 1, //0 to 1+
    //   level: 1, //0 to 1+, adjusts total output of both wet and dry
    //   impulse: "impulses/impulse_rev.wav", //the path to your impulse response
    //   bypass: 0,
    //   order: 5
    // },
	{
      type: 'bitcrusher',
      bits: 1, //1 to 16
      normfreq: 0.1, //0 to 1
      bufferSize: 256, //256 to 16384
      order: 2
    },
	{
      type: 'delay',
      feedback: 0.05, //0 to 1+
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


export default patch;
