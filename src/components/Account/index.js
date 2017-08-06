import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
	render() {
		return (
			<div className="account">
				<form>
					<input className="username" type="text" name="username" placeholder="username"/>
					<input className="password" type="password" name="password" placeholder="password"/>
					<button>LOGIN</button>
				</form>
				<button>SIGNUP</button>
			</div>
		);
	}
}

export default Account;
