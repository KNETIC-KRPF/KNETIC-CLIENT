import React, {Component} from 'react';
import Modal from 'react-modal';
import './Account.css';

const signupStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#6c2505',
    backgroundSize: '40px 160px, 60px 29px, 27px 27px',
    backgroundImage: 'linear-gradient(94deg, rgba(91, 33, 5, 0.1) 0%, rgba(83, 29, 4, 0.32) 23%, rgba(74, 24, 3, 0.41) 47%, rgba(80, 27, 5, 0.44) 70%, rgba(81, 27, 5, 0.59) 74%, rgba(93, 33, 4, 0.2) 83%, rgba(115, 43, 3, 0.5) 100%), linear-gradient(90deg, #541c09 50%, transparent 50%), linear-gradient(90deg, #7a2e00 50%, #632401 50%)',
    width: '400px'
  }
}

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
		this.submitSignup = this.submitSignup.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

	submitLogin() {

	}

  submitSignup() {

	}

  render() {
    return (
			<div className="account">

				<form className="login" onSubmit={this.submitLogin}>

					<input
						className="login-input"
						type="text"
						name="username"
						placeholder="username"/>

					<input
						className="login-input"
						type="password"
						name="password"
						placeholder="password"/>

					<button type="submit" className="btn">LOGIN</button>

				</form>

				<button type="button" className="btn" onClick={this.openModal}>SIGNUP</button>

			<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={signupStyle}
					contentLabel="Example Modal">
					<div className="signup">
						<form
							onSubmit={this.submitSignup}>
							<input
								className="modal"
								type="text"
								name="email"
								placeholder="email"/>
							<br/>
							<input
								className="modal"
								type="text"
								name="username"
								placeholder="username"/>
							<br/>
							<input
								className="modal"
								type="password"
								name="password"
								placeholder="password"/>
							<br/>
							<button className="btn modal" type="submit">Submit</button>
						</form>
						<button
							className="btn modal"
							onClick={this.closeModal}>Close</button>
					</div>
				</Modal>

			</div>
    );
  }
}

export default Account;
