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
      <div className="container" id="final">
        <div className="jumbotron">
          <div className="page-header">
            <h1 className="text-center">How Much Can I Slack Off?</h1>
          </div>
          <div className="sk-range">
            <Inputthis />
          </div>
          <span className="container text-justify">
            <Category datatransfer={this.dataTransfer.bind(this)} emailAccount={this.state} />
          </span>
          <div>
            <Popup className="text-center" datatransfer={this.dataTransfer.bind(this)} />
          </div>
          <div className="text-center" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
