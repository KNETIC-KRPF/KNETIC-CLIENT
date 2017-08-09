import React, {Component} from 'react';
import Modal from 'react-modal';
import './Account.css';

import {ROOT_URL} from '../../RootURL';

function fetchRequest(request, callback) {
  return fetch(request)
    .then(res => res.json())
    .then(json => {
      callback(json);
    })
    .catch()
}

function setIdRedirect(response) {
  localStorage.account_id = response.id;
  window.location = `/account/${response.id}`
}

// document.addEventListener("DOMContentLoaded", function(event) {
//   redirectIfLoggedIn();
//   const LOGIN_URL = BASE_URL + `/auth/login`;
//
//   function getUserLoginInfo() {
//     return {
//       email: document.getElementById('login-email').value.toLowerCase(),
//       password: document.getElementById('login-password').value
//     }
//   }
//
//   function submitLoginForm() {
//     const loginButton = document.getElementById('login-button');
//     loginButton.addEventListener('click', event => {
//       event.preventDefault();
//       const userInfo = getUserLoginInfo();
//       if (validPassword(userInfo.password) === true && validEmailAddress(userInfo.email) === true) {
//         const request = postRequest(LOGIN_URL, userInfo, "omit");
//         fetchRequest(request, setJWTLogin)
//       } else {
//         alert("Invalid Email and/or Password")
//       }
//     });
//   }
//
//   function setJWTLogin(response) {
//     localStorage.token = response.token;
//     localStorage.account_id = response.id;
//     if (response.error) {
//       alert(response.message)
//     } else if (response.token) {
//       setIdRedirect(response);
//     }
//   }
//
//   submitLoginForm();
//
// });

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
    width: '400px',
    borderRadius: '5%',
    zIndex: '1'
  }
}

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      login: {
        email: '',
        password: ''
      },
      signup: {
        email: '',
        username: '',
        password: ''
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.onLoginSubmit = this.onLoginSubmit.bind(this);
		this.submitSignup = this.submitSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
}

	onLoginSubmit(event) {
    event.preventDefault();
    const accountLogin = {
      email: this.state.login.email,
      password: this.state.login.password
    }
    // const request = 1;
    // fetchRequest(request, this.setJWTLogin);
	}

  setJWTLogin(response) {
    localStorage.token = response.token;
    localStorage.account_id = response.id;
    if (response.error) {
      alert(response.message)
    } else if (response.token) {
      setIdRedirect(response);
    }
  }

  setIdRedirect() {

  }

  submitSignup() {

	}

  render() {
    return (
			<div className="account">

				<form className="login" onSubmit={this.submitLogin}>

					<input
            onFocus={() => this.props.handleTextFieldFocus(true)}
            onBlur={() => this.props.handleTextFieldFocus(false)}
            id="login-email"
						className="login-input"
						type="text"
						name="email"
						placeholder="email"
            onChange={this.handleInputChange}
            value={this.state.login.email}
            />

					<input
            onFocus={() => this.props.handleTextFieldFocus(true)}
            onBlur={() => this.props.handleTextFieldFocus(false)}
            id="login-password"
						className="login-input"
						type="password"
						name="password"
						placeholder="password"
            onChange={this.handleInputChange}
            value={this.state.login.password}
            />

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
                onFocus={() => this.props.handleTextFieldFocus(true)}
                onBlur={() => this.props.handleTextFieldFocus(false)}
                id="signup-email"
								className="modal"
								type="text"
								name="email"
								placeholder="email"
                value={this.state.signup.email}
                />
							<br/>
							<input
                onFocus={() => this.props.handleTextFieldFocus(true)}
                onBlur={() => this.props.handleTextFieldFocus(false)}
                id="signup-username"
								className="modal"
								type="text"
								name="username"
								placeholder="username"
                value={this.state.signup.username}
                />
							<br/>
							<input
                onFocus={() => this.props.handleTextFieldFocus(true)}
                onBlur={() => this.props.handleTextFieldFocus(false)}
                id="signup-password"
								className="modal"
								type="password"
								name="password"
								placeholder="password"

                value={this.state.signup.password}
                />
							<br/>
							<button className="btn modal" type="submit">SUBMIT</button>
						</form>
						<button
							className="btn modal"
							onClick={this.closeModal}>CLOSE</button>
					</div>
				</Modal>

			</div>
    );
  }
}

export default Account;
