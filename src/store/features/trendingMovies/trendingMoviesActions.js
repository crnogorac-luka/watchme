
// action types
export const FETCH_TRENDING_MOVIES_REQUEST = 'FETCH_TRENDING_MOVIES_REQUEST';
export const FETCH_TRENDING_MOVIES_SUCCESS = 'FETCH_TRENDING_MOVIES_SUCCESS';
export const FETCH_TRENDING_MOVIES_FAILURE = 'FETCH_TRENDING_MOVIES_FAILURE';

// action creators
export const fetchTrendingMoviesRequest = () => {
  return {
    type: FETCH_TRENDING_MOVIES_REQUEST
  };
};

export const fetchTrendingMoviesSuccess = (movies) => {
  return {
    type: FETCH_TRENDING_MOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchTrendingMoviesFailure = (error) => {
  return {
    type: FETCH_TRENDING_MOVIES_FAILURE,
    payload: error
  };
};


  