import * as ActionTypes from './constants';

export const loadDataInitiation = () => ({
  type: ActionTypes.LOAD_DATA_INITIATION,
});

export const loadDataSuccess = data => ({
  type: ActionTypes.LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailure = error => ({
  type: ActionTypes.LOAD_DATA_FAILURE,
  error,
});

export const buildQuery = (id, category) => {
  let query = '';
  if (id) query = `id=${id}`;
  if (category) query = `category=${category}`;
  if (id && category) query = `id=${id}&category=${category}`;
  return query;
};

export const loadData = (id, category) =>
  (dispatch, getState) => {
    const { apiUrl } = getState().api;
    dispatch(loadDataInitiation());
    return fetch(`${apiUrl}/articles.json?${buildQuery(id, category)}`)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json,
        })),
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          const error = json.error || 'There was an error processing your request.';
          return dispatch(loadDataFailure(error));
        }

        return dispatch(loadDataSuccess(json));
      }, error =>
        dispatch(
          loadDataFailure(`There was an error processing your request: ${error}`),
        ),
    );
  };