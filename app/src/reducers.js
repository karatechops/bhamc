import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

/* GENERATOR: Import all of your reducers */
import api from './containers/Api/reducer';
import announcements from './containers/Announcements/reducer';

const rootReducer = combineReducers({
  /* GENERATOR: Compile all of your reducers */
  api,
  announcements,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
