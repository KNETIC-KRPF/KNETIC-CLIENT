import React from 'react';
import './RockerSwitch.css';
import SwitchButton from 'react-switch-button';
import 'react-switch-button/dist/react-switch-button.css';



class RockerSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: this.props.patchState === 1 ? false : true,
      value: this.props.patchState
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
		this.setState({
			isToggleOn: !this.state.isToggleOn,
		})

    // 	value: this.state.isToggleOn ? 0 : 1
    let value = this.props.patchState === 1 ? 0 : 1
    console.log(this.state.isToggleOn);
    this.props.sendDispatch(this.props.type, this.props.property, value);
  }

  render() {
    const isToggled = this.props.patchState === 1 ? false : true
    return (
      <div className="bypass">
        <h6 className="label-bypass">BYPASS</h6>
        <SwitchButton
          name={this.props.name}
          theme="rsbc-switch-button-flat-square"
          defaultChecked={isToggled}
          onChange={this.handleToggle}/>
      </div>
    );
  }
}

export default RockerSwitch;
