import React from 'react';
import { render } from 'react-dom';
import App from './index';
import Modal from 'react-modal';

Modal.setAppElement('body');

render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));
