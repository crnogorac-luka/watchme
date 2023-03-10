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

  export const fetchTrendingMovies = (timeWindow, genreId) => {
    return dispatch => {
      dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesRequest());
      return getTrending(timeWindow)
        .then(response => {
            console.log(response.results);
          const movies = response.results;
          let filteredMovies = movies;
        if (genreId) {
            filteredMovies = movies.filter(movie => movie.genre_ids?.includes(genreId) ?? false);
        }
          dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesSuccess(filteredMovies));
        })
        .catch(error => {
          dispatch(trendingMoviesSlice.actions.fetchTrendingMoviesFailure(error.message));
        });
    };
  };

export const selectTrendingMovies = state => {
    console.log(state); // log the state object to the console
    return state.trendingMovies.movies;
  };;

export default trendingMoviesSlice.reducer;