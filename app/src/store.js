import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import { initialState as devApi } from './containers/Api/reducer';

const api = (typeof window === 'undefined')
  ? {
    apiUrl: process.env.API_URL,
  }
  : devApi;

export const initialState = {
  api,
};

const preloadedState = (typeof window !== 'undefined')
  ? window.__PRELOADED_STATE__ // eslint-disable-line no-underscore-dangle
  : initialState;


const routingMiddleware = routerMiddleware(browserHistory);
export const middlewares = [thunk, routingMiddleware];

const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';

/* Everyone should use redux dev tools */
/* https://github.com/gaearon/redux-devtools */
/* https://medium.com/@meagle/understanding-87566abcfb7a */
const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

/* Hopefully by now you understand what a store is and how redux uses them,
 * But if not, take a look at: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * And https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
 */
const store = createStore(
  rootReducer,
  preloadedState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
