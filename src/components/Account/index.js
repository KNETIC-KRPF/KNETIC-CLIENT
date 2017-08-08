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
    transform: 'translate(-50%, -50%)'
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
						className="username"
						type="text"
						name="username"
						placeholder="username"/>

					<input
						className="password"
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
