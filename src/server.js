import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} />);

  res.send(template({
    body: appString,
    title: 'How Much Can I Slack Off?',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(process.env.PORT || 8080, function () {
	console.log('listening on ' + process.env.PORT);
});

