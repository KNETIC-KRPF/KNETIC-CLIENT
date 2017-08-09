import React, {Component} from 'react';
import Modal from 'react-modal';

const style = {
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

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="account">
        <button className="btn" onClick={this.openModal}>ABOUT</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="About Section">
          <div className="about">
            
            <button
              className="btn modal"
              onClick={this.closeModal}>CLOSE</button>
          </div>
        </Modal>

      </div>
    );
  }
}

export default About;
