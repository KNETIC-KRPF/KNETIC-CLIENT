import React, { Component } from 'react';
import Account from '../Account';
import PatchCollection from '../PatchCollection';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<div className="header">
				<h1>KNETIC</h1>
				<PatchCollection />
				<Account />
			</div>
		);
	}
}

export default Header;
