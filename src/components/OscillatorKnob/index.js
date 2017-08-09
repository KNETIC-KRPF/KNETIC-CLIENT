import React, { Component } from 'react';
import KnobComp from 'react-canvas-knob';

class Knob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.patchState
    }
		this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.patchState
    });
  }

  handleChange = (newValue) => {
		this.props.sendDispatch(this.props.type, this.props.property, newValue, this.props.id);
  };

  shouldComponentUpdate(nextProps) {
    return this.state.value !== nextProps.patchState;
  }

  handleChangeEnd(event) {
  };

  render() {
    return (
      <KnobComp
        value={this.props.patchState}
        onChange={this.handleChange}
        onChangeEnd={this.handleChangeEnd}
        thickness={0.5}
        width={40}
        height={40}
        stopper={true}
        angleArc={270}
        angleOffset={-135}
        disableMouseWheel={true}
        displayInput={false}
        fgColor="#94E4C2"
        bgColor="#999797"
        inputColor="#94E4C2"
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
      />
    );
  }
}

export default Knob;
