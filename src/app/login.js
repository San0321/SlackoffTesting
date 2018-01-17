import React, { Component, PropTypes } from 'react';
import firebase, { auth, provider } from '../firebase';

export default class Login extends Component {
  // get initalState
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeId(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangePw(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    /*
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(function() {
        this.props.checking();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // ...
      });
*/
    /*
    let loginPromise = new Promise(function(resolve, reject) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          debugger;
          resolve();
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          reject();
        });
    });
*/
    let setUser = function(work, email, password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          // change the button layout
          work.props.checking();
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    };
    setUser(this, this.state.username, this.state.password);

    /*
    let loginPromise = new Promise(function(resolve, reject) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          debugger;
          resolve(firebase.auth().currentUser.email);
        } else {
          debugger;
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
          work.setState({ modalIsOpen: false, user: userEmail });
        })
        .catch(function(error) {});
    };
    setUser(this);
  */
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
          <label>
            Email address
          </label>
          <input type="text" className="form-control" id="id" onChange={this.handleChangeId.bind(this)} value={this.state.username} />
          </div>
	          
          <div className="form-group">
          <label>
            Password
          </label>
            <input
              type="password"
              id="password"
              onChange={this.handleChangePw.bind(this)}
              value={this.state.password}
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-default btn-block" value="Login" />
        </form>
      </div>
    );
  }
}
