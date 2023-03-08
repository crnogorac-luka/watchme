export const fetchAllMoviesRequest = () => ({
    type: 'FETCH_ALL_MOVIES_REQUEST',
  });
  
  export const fetchAllMoviesSuccess = (movies) => ({
    type: 'FETCH_ALL_MOVIES_SUCCESS',
    payload: movies,
  });
  
  export const fetchAllMoviesFailure = (error) => ({
    type: 'FETCH_ALL_MOVIES_FAILURE',
    payload: error,
  });
  