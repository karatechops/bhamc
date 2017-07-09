import * as ActionTypes from './constants';

const initialState = {
  request: false,
  error: '',
  data: [],
};

export function links(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_DATA_INITIATION:
      return {
        ...state,
        request: true,
      };
    case ActionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        request: false,
        data: action.data,
      };
    case ActionTypes.LOAD_DATA_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default links;