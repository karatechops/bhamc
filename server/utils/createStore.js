import { createStore, applyMiddleware } from 'redux';
import { initialState, middlewares } from '../../app/src/store';
import rootReducer from '../../app/src/reducers';

const createServerStore = () =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

export default createServerStore;