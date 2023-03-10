// action types
export const FETCH_ALL_MOVIES_REQUEST = 'FETCH_ALL_MOVIES_REQUEST';
export const FETCH_ALL_MOVIES_SUCCESS = 'FETCH_ALL_MOVIES_SUCCESS';
export const FETCH_ALL_MOVIES_FAILURE = 'FETCH_ALL_MOVIES_FAILURE';

// action creators
export const fetchAllMoviesRequest = () => {
  return {
    type: FETCH_ALL_MOVIES_REQUEST
  };
};

export const fetchAllMoviesSuccess = (movies) => {
  return {
    type: FETCH_ALL_MOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchAllMoviesFailure = (error) => {
  return {
    type: FETCH_ALL_MOVIES_FAILURE,
    payload: error
  };
};
  