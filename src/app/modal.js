import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import Wrapper from './wrapper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class Popup extends Component {
  // get initalState
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      signIn: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  openSignUp() {
    this.setState({ modalIsOpen: true, signIn: false });
  }

  openSignIn() {
    this.setState({ modalIsOpen: true, signIn: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openSignIn.bind(this)}>Sign In</button>
        <button onClick={this.openSignUp.bind(this)}>Sign Up</button>
        <Modal
          id="Login"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <Wrapper signIn={this.state.signIn} />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

/*

 */
