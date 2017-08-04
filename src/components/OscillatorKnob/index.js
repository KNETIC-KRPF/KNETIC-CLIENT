import React from 'react';

import './OscillatorKnob.css';

const Knob = (props) => {
	return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      data-degree-range="270"
      defaultValue="0"
      onChange={(event) => props.sendDispatch(props.type, props.property, event.target.value, props.id)}
      data-degree-offset="45"/>
	);
};

export default Knob;
