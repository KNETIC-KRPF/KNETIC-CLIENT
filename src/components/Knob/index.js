import React from 'react';

import './Knob.css';

const Knob = (props) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      data-degree-range="270"
      step="1"
      defaultValue="0"
      onChange={(event) => props.sendDispatch("oscillator", "gain", event.target.value)}
      data-degree-offset="45"/>
  );
}

export default Knob;
