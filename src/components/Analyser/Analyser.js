import React, { Component } from 'react';
import "./Analyser.css";


class Analyser extends Component {
	componentDidMount() {
     this.makeAnalyser();
	}

  makeAnalyser() {
        const self = this;
        const width = window.innerWidth;
    		setInterval( function() {
    					self.props.analyser.fftSize = 1024;
    					const bufferLength = self.props.analyser.frequencyBinCount;
    					const dataArray = new Uint8Array(self.props.analyser.frequencyBinCount);
    					self.props.analyser.getByteFrequencyData(dataArray);
    					const canvas = document.getElementById("canvas");
    					const ctx = canvas.getContext("2d");
    					ctx.clearRect(0, 0, width, 100);

    				  ctx.fillStyle = '#1F1C1B';
    				  ctx.fillRect(0, 0, width, 100);

    				  var barWidth = (width / bufferLength) * 2.5;
    				  var barHeight;
    				  var x = 0;
    				  for(var i = 0; i < bufferLength; i++) {
    				    barHeight = dataArray[i];

    				    ctx.fillStyle = 'rgb(148, 228, 194)';
    				    ctx.fillRect(x, 100-barHeight/3,barWidth,barHeight/2);
    				    x += barWidth + 1;
    				  }
    				}, 1);
  }

  render() {
    const width = window.innerWidth;

    return (

      <div>
        <canvas id="canvas" width={width} height="100"></canvas>
      </div>
    );
  }
}

export default Analyser;
