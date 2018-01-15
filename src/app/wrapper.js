import React, { Component, PropTypes } from 'react';
import Login from './login';
import SignUp from './signup';

export default class Wrapper extends Component {
  // get initalState
  constructor(props) {
    super(props);
    this.state = {
      signIn: this.props.signIn
    };
  }

  checkTab() {
    // if sign in assgin signin
    // if sign up assgin signup
  }

  render() {
    if (this.props.signIn) {
      return (
        <div>
          <h2>Sign-In</h2>
          <Login checking={this.props.checking} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Sign-Up</h2>
          <SignUp checking={this.props.checking} />
        </div>
      );
    }

    // check what to render between sign in and sign up
  }
}
/*

 */
