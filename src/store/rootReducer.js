import { combineReducers } from '@reduxjs/toolkit';
import genresReducer from './features/genres/genresSlice';
import trendingMoviesReducer from './features/trendingMovies/trendingMoviesSlice';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  genres: genresReducer
});

export default rootReducer;
