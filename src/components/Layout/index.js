import React, {Component} from 'react';
import Header from '../Header';
import Oscillator from '../Oscillator';
import Filter from '../Filter';
import ADSR from '../ADSR';
import FilterADSR from '../FilterADSR';
import Compressor from '../Compressor';
import Reverb from '../Reverb';
import PingPongDelay from '../PingPongDelay';
import Phaser from '../Phaser';
import Overdrive from '../Overdrive';
import MoogFilter from '../Moog_Filter';
import Chorus from '../Chorus';
// import Bitcrusher from '../Bitcrusher';
import Delay from '../Delay';
import Sidebar from '../Sidebar';
import Analyser from '../Analyser/Analyser.js';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Analyser analyser={this.props.analyser} />
        <div className="grid">
          <Sidebar/>
          <div className="left-column grid-cell">

            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={1}
            />
            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={2}
            />

            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={3}
            />
            <ADSR
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
          </div>

          <div className="middle-column grid-cell">
            <Delay
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <PingPongDelay
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <Phaser
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <Overdrive
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <MoogFilter
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <Chorus
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <Reverb
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
          </div>
          <div className="right-column grid-cell">
            <Filter
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <FilterADSR
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
            <Compressor
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
            />
          </div>
          <Sidebar/>
        </div>
      </div>
    );
  }
}

export default Layout;
