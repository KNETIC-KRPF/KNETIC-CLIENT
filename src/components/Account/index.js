import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="account-login">
				<input className="username" type="text" name="username"/>
				<input className="email" type="text" name="email"/>
			</div>
		);
	}
}

export default Account;
