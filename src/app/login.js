import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
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
        <button>Login</button>
      </div>
    );
  }
}
