import React, {Component} from 'react';
import './Piano.css';

class Piano extends Component {
	constructor(props) {
		super();
	}
  render() {
    return (
			<div id="p-wrapper">

				<ul id="piano">

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(65.40639132514966)}
							className="anchor">
						</div>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(73.41619197935188)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(69.29565774421802)}>
						</span>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(82.4068892282175)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(77.78174593052023)}>
						</span>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(87.30705785825097)}
							className="anchor">
						</div>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(97.99885899543733)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(92.4986056779086)}>
						</span>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(110)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(103.82617439498628)}>
						</span>
					</li>

					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(123.47082531403103)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(116.54094037952248)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(130.8127826502993)}
							className="anchor">
						</div>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(146.8323839587038)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(138.59131548843604)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(164.81377845643496)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(155.56349186104046)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(174.61411571650194)}
							className="anchor">
						</div>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(195.99771799087463)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(184.9972113558172)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(220)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(207.65234878997256)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(246.94165062806206)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(233.08188075904496)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(261.6255653005986)}
							className="anchor">
						</div>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(293.6647679174076)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(277.1826309768721)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(329.6275569128699)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(311.1269837220809)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(349.2282314330039)}
							className="anchor">
						</div>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(391.99543598174927)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(369.9944227116344)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(440)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(415.3046975799451)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(493.8833012561241)}
							className="anchor">
						</div>
						<span onMouseDown={() => this.props.handleKeyboardClick(466.1637615180899)}>
						</span>
					</li>
					<li>
						<div
							onMouseDown={() => this.props.handleKeyboardClick(523.2511306011972)}
							className="anchor">
						</div>
					</li>

				</ul>
			</div>
    );
  }
}

export default Piano;
