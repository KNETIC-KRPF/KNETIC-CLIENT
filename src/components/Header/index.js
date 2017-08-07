import React, { Component } from 'react';
import Account from '../Account';
import PatchCollection from '../PatchCollection';
import Knetic from '../../images/knetic.png';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<header className="header">
				<img src={Knetic} alt="Knetic Logo" className="knetic-font"/>
				<div className="patch-select">
					<PatchCollection />
				</div>
				<Account />
			</header>
		);
	}
}

export default Header;
