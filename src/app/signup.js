import React, { Component, PropTypes } from 'react';

export default class SignUp extends Component {
  // get initalState
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label>ID</label>
        <input type="text" id="id" />
        <label>Password</label>
        <input type="text" id="password" />
        <button>Sign Up</button>
      </div>
    );
  }
}
