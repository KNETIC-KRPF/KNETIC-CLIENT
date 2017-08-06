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
              />
          </div>
          <div className="right-column grid-cell">
            <Filter
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              />
            <Compressor
              patch={this.props.patch}
              sendDispatch={this.props.sendDispatch}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
