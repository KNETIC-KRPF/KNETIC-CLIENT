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
		// this.setState(prevState => ({
		// 	isToggleOn: !prevState.isToggleOn
		// }));
    // if (this.state.isToggleOn) {
    //   this.setState({value: 0});
    // } else {
    //   this.setState({value: 1});
    // }

		this.setState({
			isToggleOn: !this.state.isToggleOn,
		})
		this.setState({
			value: this.state.isToggleOn ? 1 : 0
		})
    console.log(this.state.isToggleOn);
		console.log(this.state.value);
    this.props.sendDispatch(this.props.type, this.props.property, this.state.value);
  }

  render() {
		// console.log(this.state.isToggleOn);
    return (
      <div className="bypass">
        <h6 className="label-bypass">BYPASS</h6>
        <SwitchButton
          name={this.props.name}
          theme="rsbc-switch-button-flat-square"
          defaultChecked={this.state.isToggleOn}
          onChange={this.handleToggle}/>
      </div>
    );
  }
}

export default RockerSwitch;
