import React, { Component } from 'react';
import "./Analyser.css";


class Analyser extends Component {
  constructor(props) {
    super(props);
    // this.drawSpectrum = this.drawSpectrum.bind(this);

    this.state = ({
      hasLoaded: false
    })

  }

  drawSpectrum() {
    hasLoaded = true;
   }

  componentDidMount() {
    this.state.hasLoaded = true;
    this.render();
    }

  render() {

    if (this.state.hasLoaded == true) {
      this.drawSpectrum();
    }

    return (

      <div>
        <canvas className="myCanvas" width="1000" height="300"></canvas>
      </div>
    );
  }
}

export default Analyser;
