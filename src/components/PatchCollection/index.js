import React, { Component } from 'react';
import './PatchCollection.css';
import Modal from 'react-modal';
import {ROOT_URL} from '../../RootURL';

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

class PatchCollection extends Component {
	constructor(props) {
	  super(props);

		this.state = {
      modalIsOpen: false,
			newPatch: {}
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.savePatch = this.savePatch.bind(this);

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

	savePatch(e) {
		e.preventDefault();
		const typeInput = document.querySelector('#patch-type')
    const nameInput = document.querySelector('#patch-name')
		let newSettings = {...this.props.patch};
		newSettings.type = typeInput.value;
    newSettings.name = nameInput.value;

    console.log(this.state.newPatch);

		fetch(`${ROOT_URL}/patches`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(newSettings),
        mode: "cors",
        credentials: "omit"
    })
		.then(res => {
      console.log(res);
    })
	}

	render() {
		let options = false
		if(this.props.selectValues !== undefined) {
			options = this.props.selectValues.map((patch, index) => {
				return (<option key={index} value={patch.id}>{patch.name} | {patch.type}</option>);
			});
		}
		return(
			<div>
				<select className="patch-selection" onChange={(event) => this.props.setPatchFromCollection(event.target.value)}>
					{options && options}
				</select>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={signupStyle}
    contentLabel="Example Modal">
					<div className="signup">
						<form
							onSubmit={this.savePatch}>
							<input
								id="patch-name"
								className="modal"
								type="text"
								name="patch-name"
								placeholder="Patch Name"
       />
							<br/>
							<input
								id="patch-type"
								className="modal"
								type="text"
								name="patch-type"
								placeholder="type"
       />
							<br/>
							<button className="btn modal" type="submit">SUBMIT</button>
						</form>
						<button
							className="btn modal"
							onClick={this.closeModal}>CLOSE</button>
          </div>
				</Modal>
				<button className="btn save-patch" onClick={this.openModal}>Save Patch</button>
			</div>
		);
	}
}

export default PatchCollection;
