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
          <Login />
        </div>
      );
    } else {
      return (
        <div>
          <SignUp />
        </div>
      );
    }

    // check what to render between sign in and sign up
  }
}
/*

 */
