import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import expressSanitized from 'express-sanitized';
import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { routes } from '../app/src/routes';
import Html from './utils/Html';
import manifest from './public/manifest.json';
import createServerStore from './utils/createStore';

const app = express();
const debug = process.env.DEBUG || false;
const SERVER_PORT = process.env.SERVER_PORT;
const IP = process.env.IP;
const ASSET_URL = process.env.ASSET_URL;

if (debug) {
  // app.use(morgan('combined'));
} else {
  app.use(compression());
}

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb',
}));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(expressSanitized());
app.use(cookieParser());

app.use(express.static(`${__dirname}/public`));

// Allow external calls to API.
app.use((req, res, next) => {
  const origin = req.headers.origin || req.headers.host;
  const allowedOrigins = [
    process.env.BASE_URL
  ];
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('X-Frame-Options', 'deny');
  next();
});

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
        res.status(500);
      } else if (renderProps) {
        const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
        const promiseArray = [];
        const serverStore = createServerStore();

        renderProps.components.map((component) => { // eslint-disable-line
          if (component && component.fetchData) {
            const { params } = renderProps;
            const fetchPromises = component.fetchData(params);
            fetchPromises.forEach((promise) => {
              promiseArray.push(serverStore.dispatch(promise));
            });
          }
        });

        Promise.all(promiseArray).then(() => {
          const component = (
            <Provider store={serverStore}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          const content = renderToString(component);
          let initialState = Object.assign({}, serverStore.getState());

          const html = (
            <Html
              content={content}
              scriptHash={manifest['/main.js']}
              vendorHash={manifest['/vendor.js']}
              cssHash={manifest['/main.css']}
              styles={styles}
              state={initialState}
            />
          );
          res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
        })
        .catch(err => console.log(err));
      } else {
        res.status(404).send('Not found');
      }
    });
});

/* eslint-disable no-console */
app.listen(SERVER_PORT, (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`App running on ${IP}:${SERVER_PORT}`);
});