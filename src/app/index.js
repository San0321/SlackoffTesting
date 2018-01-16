import React, { Component, PropTypes } from 'react';
import Inputthis from './inputField';
import Category from './category';
import Popup from './modal';
import firebase from '../firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      initial: false,
      reset: false
    };
  }

  dataTransfer(loginInfo) {
    this.setState({ user: loginInfo.user, initial: loginInfo.initial, reset: loginInfo.reset });
    debugger;
  }

  render() {
    return (
      <div id="final">
        <div className="sk-title">
          <h1>How Much Can I Slack Off?</h1>
        </div>
        <div className="sk-range">
          <Inputthis />
        </div>
        <div className="category">
          <Category datatransfer={this.dataTransfer.bind(this)} emailAccount={this.state} />
        </div>
        <div>
          <Popup datatransfer={this.dataTransfer.bind(this)} />
        </div>
        <div className="result" />
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
