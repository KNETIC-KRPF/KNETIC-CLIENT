import React, { Component } from 'react';
import "./Analyser.css";


class Analyser extends Component {
  constructor(props) {
    super(props);


  }

	componentDidMount() {
	   //analyser logic

		setInterval( function() {
					analyser.fftSize = 1024;
					const bufferLength = analyser.frequencyBinCount;
					const dataArray = new Uint8Array(analyser.frequencyBinCount);
					analyser.getByteFrequencyData(dataArray);
					const canvas = document.getElementById("canvas");
					const ctx = canvas.getContext("2d");
					ctx.clearRect(0, 0, 1000, 300);

				  ctx.fillStyle = 'rgb(0, 0, 0)';
				  ctx.fillRect(0, 0, 1000, 300);

				  var barWidth = (1000 / bufferLength) * 2.5;
				  var barHeight;
				  var x = 0;
				  for(var i = 0; i < bufferLength; i++) {
				    barHeight = dataArray[i];

				    ctx.fillStyle = 'rgb(148, 228, 194)';
				    ctx.fillRect(x,300-barHeight/2,barWidth,barHeight/2);
				    x += barWidth + 1;
				  }
				}, 1);
	}


  render() {

    return (

      <div>
        <canvas className="myCanvas" width="1000" height="300"></canvas>
      </div>
    );
  }
}

export default Analyser;
