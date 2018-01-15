import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import Wrapper from './wrapper';
import firebase from 'firebase';

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
      signIn: false,
      user: null
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount() {
    //   let loginState = this.state.user;
    let loginPromise = new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(firebase.auth().currentUser.email);
        } else {
          // No user is signed in.
          reject();
        }
      });
    });
    let setUser = function(work) {
      loginPromise
        .then(function(userEmail) {
          // assign user email to the state
          work.setState({ user: userEmail });
        })
        .catch(function(error) {});
    };
    setUser(this);
    /*
    firebase.auth().onAuthStateChanged(this, function(user) {
      if (user) {
        debugger;
        this.setState({ user: firebase.auth().currentUser.email });
        //this.setState({ user: loginState });
        //  debugger;
        // state({ user: loginState });
      } else {
        // No user is signed in.
      }
    });
    */
    //    this.setState({ user: loginState });
    /*
    let isLogin = false;
    let emailAddress = '';
    isLogin = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //  debugger;
        emailAddress = firebase.auth().currentUser.email;
        return true;
        //  this.state = { user: firebase.auth().currentUser.email };
      } else {
        // No user is signed in.
        return false;
      }
    });
    debugger;
    if (isLogin) {
      this.setState({ user: emailAddress });
    }
*/
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
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  logOut() {
    let logOutPromise = new Promise(function(resolve, reject) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          resolve();
        })
        .catch(function(error) {
          reject(error);
        });
    });
    let setUser = function(work) {
      logOutPromise
        .then(function() {
          // assign empty user to the state
          work.setState({ modalIsOpen: false, user: null });
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    setUser(this);
    /*
    debugger;
    let flag = firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.\
        debugger;
        return true;
      })
      .catch(function(error) {
        //   debugger;
        console.log(error);
        return false;
      });
    if (flag) {
      this.setState({ modalIsOpen: false, user: null });
    }
    */
    /*
    debugger;
    if (loginState === null) {
      this.setState({ user: loginState });
    }
    */
  }

  checkLogin() {
    /*
    let loginState = this.state.user;

    loginState = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user has been logged out');
        return firebase.auth().currentUser.email;
        //this.setState({ user: loginState });
        //  debugger;
        // state({ user: loginState });
      } else {
        return null;
        // No user is signed in.
      }
    });

    this.setState({ user: loginState });
        */
    let loginPromise = new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // pass it to then
          resolve(firebase.auth().currentUser.email);
        } else {
          // No user is signed in.
          reject();
        }
      });
    });
    let setUser = function(work) {
      loginPromise
        .then(function(userEmail) {
          // assign user email to the state
          debugger;
          work.props.datatransfer({ user: userEmail, initial: true });
          work.setState({ modalIsOpen: false, user: userEmail });
          debugger;
        })
        .catch(function(error) {});
    };
    setUser(this);
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <button onClick={this.logOut.bind(this)}>Log Out</button>
        ) : (
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
              <button onClick={this.openSignIn.bind(this)}> Sign-In Tab </button>
              <button onClick={this.openSignUp.bind(this)}> Sign-Up Tab </button>
              <Wrapper signIn={this.state.signIn} checking={this.checkLogin.bind(this)} />
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

/*

 */
