import { combineReducers } from '@reduxjs/toolkit';
import trendingMoviesReducer from './features/trendingMovies/trendingMoviesSlice';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer
});

export default rootReducer;
