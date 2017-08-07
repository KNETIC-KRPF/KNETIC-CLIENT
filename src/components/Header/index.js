import React, { Component } from 'react';
import Account from '../Account';
import Signup from '../Signup';
import PatchCollection from '../PatchCollection';
import Knetic from '../../images/knetic.png';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<header className="header">
				<img src={Knetic} alt="Knetic Logo" className="knetic-font"/>
				<PatchCollection />
				<Account />
				<Signup />
			</header>
		);
	}
}

export default Header;
