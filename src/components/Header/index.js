import React, { Component } from 'react';
import Account from '../Account';
import PatchCollection from '../PatchCollection';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<div>
				<h1>Header</h1>
				<label htmlFor="login-info">Login/Account Info</label>
				<Account />
				<label htmlFor="patch-collection">Patches</label>
				<PatchCollection />
			</div>
		);
	}
}

export default Header;
