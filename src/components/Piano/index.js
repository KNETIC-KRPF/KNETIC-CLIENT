import React, {Component} from 'react';
import './Piano.css';

class Piano extends Component {
  render() {
    return (
      <div id="p-wrapper">
      	<ul id="piano">
      		<li><div className="anchor"></div></li>
      		<li><div className="anchor"></div><span></span></li>
      		<li><div className="anchor"></div><span></span></li>
      		<li><div className="anchor"></div></li>
      		<li><div className="anchor"></div><span></span></li>
      		<li><div className="anchor"></div><span></span></li>
      		<li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div><span></span></li>
          <li><div className="anchor"></div></li>
      	</ul>
      </div>
    );
  }
}

export default Piano;
