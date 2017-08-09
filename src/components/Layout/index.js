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
import Piano from '../Piano';

import Delay from '../Delay';
import Sidebar from '../Sidebar';
import Analyser from '../Analyser/Analyser.js';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

  render() {
    return (
      <div className="container">
        <div className="wrapper">

          <div className="wood-grain-left">
            <Sidebar />
          </div>

          <div className="center-header">
            <Header setPatchFromCollection={this.props.setPatchFromCollection} selectValues={this.props.selectValues}/>
          </div>

          <div className="center-analyser">
            <Analyser analyser={this.props.analyser} />
          </div>

          <div className="left-column grid-cell">
            <Oscillator patch={this.props.patch} sendDispatch={this.props.sendDispatch} id={1}/>
            <Oscillator patch={this.props.patch} sendDispatch={this.props.sendDispatch} id={2}/>
            <Oscillator patch={this.props.patch} sendDispatch={this.props.sendDispatch} id={3}/>
            <ADSR patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
          </div>

          <div className="middle-column grid-cell">
            <Chorus patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <Delay patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <MoogFilter patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <Overdrive patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <Phaser patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <PingPongDelay patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <Reverb patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
          </div>

          <div className="right-column grid-cell">
            <Filter patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <FilterADSR patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            <Compressor patch={this.props.patch} sendDispatch={this.props.sendDispatch}/>
            
          </div>

          <div className="wood-grain-right">
            <Sidebar/>
          </div>

          <div className="piano">
            {this.state.isToggleOn && <Piano handleKeyboardClick={this.props.handleKeyboardClick}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
