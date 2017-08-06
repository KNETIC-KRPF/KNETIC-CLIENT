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
import Bitcrusher from '../Bitcrusher';
import Delay from '../Delay';
import Sidebar from '../Sidebar';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
<<<<<<< HEAD
        <div className="container">
          <Header/>
          <div className="grid">
            <div className="left-column grid-cell">
              <label htmlFor="oscillator-one">Oscillator 1</label>
              <Oscillator
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
                id={1}
              />
              <label htmlFor="oscillator-two">Oscillator 2</label>
              <Oscillator
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
                id={2}
              />
              <label htmlFor="oscillator-three">Oscillator 3</label>
              <Oscillator
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
                id={3}
=======
      <div className="container">
        <Header/>
        <div className="grid">
          <Sidebar/>
          <div className="left-column grid-cell">
            <label htmlFor="oscillator-one">OSC</label>
            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={1}
              />
            <label htmlFor="oscillator-two">OSC</label>
            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={2}
              />
            <label htmlFor="oscillator-three">OSC</label>
            <Oscillator
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              id={3}
>>>>>>> 2a20db6521b697d96b4008042b3a09c3adfd63c0
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
              <Reverb
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
              />
<<<<<<< HEAD
              <PingPongDelay
                sendDispatch={this.props.sendDispatch}
              />
              <Phaser
                sendDispatch={this.props.sendDispatch}
              />
              <Overdrive
                sendDispatch={this.props.sendDispatch}
              />
              <MoogFilter
                sendDispatch={this.props.sendDispatch}
              />
              <Chorus
                sendDispatch={this.props.sendDispatch}
              />
              <Bitcrusher
                sendDispatch={this.props.sendDispatch}
=======
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
            <Bitcrusher
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
>>>>>>> 2a20db6521b697d96b4008042b3a09c3adfd63c0
              />
            </div>
            <div className="right-column grid-cell">
              <Filter
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
              />
<<<<<<< HEAD
              <Compressor
                patch={this.props.patch}
                sendDispatch={this.props.sendDispatch}
=======
            <FilterADSR
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              />
            <Compressor
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
>>>>>>> 2a20db6521b697d96b4008042b3a09c3adfd63c0
              />
          </div>
          <Sidebar/>
        </div>
      </div>
    );
  }
}

export default Layout;
