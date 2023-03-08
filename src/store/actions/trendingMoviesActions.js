export const fetchTrendingMoviesRequest = () => ({
    type: 'FETCH_TRENDING_MOVIES_REQUEST',
  });
  
  export const fetchTrendingMoviesSuccess = (movies) => ({
    type: 'FETCH_TRENDING_MOVIES_SUCCESS',
    payload: movies,
  });
  
  export const fetchTrendingMoviesFailure = (error) => ({
    type: 'FETCH_TRENDING_MOVIES_FAILURE',
    payload: error,
  });
  