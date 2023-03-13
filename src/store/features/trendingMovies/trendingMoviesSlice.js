import { createSlice } from '@reduxjs/toolkit';
import { getTrending } from '../../../services/api/api';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const trendingMoviesSlice = createSlice({
    name: 'trendingMovies',
    initialState,
    reducers: {
      fetchTrendingMoviesRequest: state => {
        state.loading = true;
      },
      fetchTrendingMoviesSuccess: (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      },
      fetchTrendingMoviesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const fetchTrendingMovies = (timeWindow) => {
    return dispatch => {
      dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesRequest());
      return getTrending(timeWindow)
        .then(response => {
            console.log(response.results);
          const movies = response.results;
          dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesSuccess(movies));
        })
        .catch(error => {
          dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesFailure(error.message));
        });
    };
  };

export const selectTrendingMovies = state => {
     // log the state object to the console
    return state.trendingMovies.movies;
  };;

export default trendingMoviesSlice.reducer;