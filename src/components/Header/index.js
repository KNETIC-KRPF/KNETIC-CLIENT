import React, { Component } from 'react';
import Account from '../Account';
import About from '../About';
import PatchCollection from '../PatchCollection';
import Knetic from '../../images/knetic.png';
import './Header.css';

class Header extends Component {
	render() {
		return(
			<header className="header">

				<img
					src={Knetic}
					alt="Knetic Logo"
					className="knetic-font"/>

				<div className="patch-select">

					<PatchCollection
						handleTextFieldFocus={this.props.handleTextFieldFocus}
						setPatchFromCollection={this.props.setPatchFromCollection}
						selectValues={this.props.selectValues}
						patch={this.props.patch}
						getPatchesFromDb={this.props.getPatchesFromDb}/>

				</div>

				<Account handleTextFieldFocus={this.props.handleTextFieldFocus}/>

				<About />

			</header>
		);
	}
}

export default Header;
