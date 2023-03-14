import { combineReducers } from '@reduxjs/toolkit';
import genresReducer from './features/genres/genresSlice';
import trendingMoviesReducer from './features/trendingMovies/trendingMoviesSlice';
import allMoviesReducer from './features/allMovies/allMoviesSlice';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  genres: genresReducer,
  allMovies: allMoviesReducer
});

export default rootReducer;
