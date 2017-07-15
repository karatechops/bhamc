/* global System b:true */
import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { RootApp } from 'containers';
import store, { history } from './store';

/* eslint-disable */
// Polyfill for the System.import
if (typeof System === 'undefined') {
  var System = {
    import(path) {
      return Promise.resolve(require(path));
    },
  };
}
/* eslint-enable */

function hashLinkScroll() {
  if (typeof window !== 'undefined') {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }
}

// Switching to system.import to make use of dynamic tree shaking
// https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9#.msrxv8fwd
const errorLoading = err =>
  console.error(`Dynamic loading error ${err} stack: ${JSON.stringify(err.stack)}`); // eslint-disable-line

const loadRoute = cb =>
  module =>
    cb(null, module.default);

export const routes = [
  {
    component: RootApp,
    path: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    getComponent(location, callback) {
      System.import('./containers/RootApp') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch(err => errorLoading(err));
    },
    childRoutes: [
      {
        path: '/home',
        getComponent(location, callback) {
          System.import('./pages/HomePage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
      {
        path: '/doctors',
        getComponent(location, callback) {
          System.import('./pages/DoctorsPage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
      {
        path: '/doctor/:id',
        getComponent(location, callback) {
          System.import('./pages/DoctorPage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
      {
        path: '/news',
        getComponent(location, callback) {
          System.import('./pages/NewsPage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
      {
        path: '/pet-care',
        getComponent(location, callback) {
          System.import('./pages/PetCarePage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
      {
        path: '/links',
        getComponent(location, callback) {
          System.import('./pages/LinksPage')  // eslint-disable-line block-scoped-var
            .then(loadRoute(callback))
            .catch(err => errorLoading(err));
        },
      },
    ],
  },
];

const RouterApp = props => (
  <Provider {...props} store={store}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => {
        hashLinkScroll();
      }}
    />
  </Provider>
);

export default RouterApp;