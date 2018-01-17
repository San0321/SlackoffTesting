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
        <div className="row">
            <Popup className="text-center col-lg-1" datatransfer={this.dataTransfer.bind(this)} />
            <h1 className="page-header text-center">How Much Can I Slack Off?</h1>
        </div>
        <div className="row container text-justify">
            <Category datatransfer={this.dataTransfer.bind(this)} emailAccount={this.state} />
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
