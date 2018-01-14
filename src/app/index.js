import React, { Component, PropTypes } from 'react';
import Inputthis from './inputField';
import Category from './category';
import Popup from './modal';

export default class App extends Component {
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
          <Category />
        </div>
        <div>
          <Popup />
        </div>
        <div className="result" />
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
