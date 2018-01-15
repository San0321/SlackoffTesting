import React, { Component, PropTypes } from 'react';

export default class SignUp extends Component {
  // get initalState
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    let setUser = function(work, email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
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
    const accountRef = firebase.database().ref('account');
    const item = {
      title: this.state.username,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
    */
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ID
            <input type="text" id="id" onChange={this.handleChangeId.bind(this)} value={this.state.username} />
          </label>
          <label>
            Password
            <input
              type="password"
              id="password"
              onChange={this.handleChangePw.bind(this)}
              value={this.state.password}
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
