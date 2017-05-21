import React from 'react';
import { render } from 'react-dom';
import { match } from 'react-router';
import 'isomorphic-fetch';
import '../styles/styles.scss';
import { history } from './store';
import RouterApp, { routes } from './routes';

const isProduction = process.env.NODE_ENV === 'production';

match({ history, routes, location },
  (error, redirectLocation, renderProps) => {
    if (error) {
      console.error('Universal rendering error on client'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });

if (!isProduction) {
  /* eslint-disable */
  if (module.hot) {
    module.hot.accept('./routes', () => {
      const NewRouterApp = require('./routes').default;
      render(<NewRouterApp />, document.getElementById('app'));
    });
  }
  /* eslint-enable */
}

/* eslint-disable */
/*if ('serviceWorker' in navigator) {
  if (isProduction) {
    const runtime = require('serviceworker-webpack-plugin/lib/runtime');
    runtime.register();
  }
}*/
/* eslint-enable */
