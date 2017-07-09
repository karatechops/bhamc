import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

/* GENERATOR: Import all of your reducers */
import api from './containers/Api/reducer';
import announcements from './containers/Announcements/reducer';
import reviews from './containers/Reviews/reducer';
import doctors from './containers/Doctors/reducer';
import newsletter from './containers/Newsletter/reducer';
import articles from './containers/Articles/reducer';
import forms from './containers/Forms/reducer';
import links from './containers/Links/reducer';

const rootReducer = combineReducers({
  /* GENERATOR: Compile all of your reducers */
  api,
  announcements,
  articles,
  doctors,
  forms,
  links,
  reviews,
  newsletter,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
