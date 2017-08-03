import React, {Component} from 'react';
import Header from '../Header';
import Oscillator from '../Oscillator';
import Filter from '../Filter';
import ADSR from '../ADSR';
import Compressor from '../Compressor';
import Reverb from '../Reverb';
import PingPongDelay from '../PingPongDelay';
import Phaser from '../Phaser';
import Overdrive from '../Overdrive';
import MoogFilter from '../Moog_Filter';
import Chorus from '../Chorus';
import Bitcrusher from '../Bitcrusher';
import Delay from '../Delay';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="main-layout">
        <Header/>
        <label htmlFor="oscillators">
          <h2>Oscillators</h2>
        </label>
        <label htmlFor="oscillator-one">Oscillator 1</label>
        <Oscillator sendDispatch={this.props.sendDispatch}/>
        <label htmlFor="oscillator-two">Oscillator 2</label>
        <Oscillator sendDispatch={this.props.sendDispatch}/>
        <label htmlFor="oscillator-three">Oscillator 3</label>
        <Oscillator sendDispatch={this.props.sendDispatch}/>
        <Filter sendDispatch={this.props.sendDispatch}/>
        <ADSR sendDispatch={this.props.sendDispatch}/>
        <Compressor sendDispatch={this.props.sendDispatch}/>

        <div className="effect-rack">
          <Reverb sendDispatch={this.props.sendDispatch}/>
          <PingPongDelay sendDispatch={this.props.sendDispatch}/>
          <Phaser sendDispatch={this.props.sendDispatch}/>
          <Overdrive sendDispatch={this.props.sendDispatch}/>
          <MoogFilter sendDispatch={this.props.sendDispatch}/>
          <Chorus sendDispatch={this.props.sendDispatch}/>
          <Bitcrusher sendDispatch={this.props.sendDispatch}/>
          <Delay sendDispatch={this.props.sendDispatch}/>
        </div>
      </div>
    );
  }
}

export default Layout;
