import { combineReducers } from '@reduxjs/toolkit';
import genresReducer from './features/genres/genresSlice';
import trendingMoviesReducer from './features/trendingMovies/trendingMoviesSlice';
import allMoviesReducer from './features/allMovies/allMoviesSlice';
import SearchResultsRed from './features/searchResults/SearchResultsSlice';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  genres: genresReducer,
  allMovies: allMoviesReducer,
  searchResults: SearchResultsRed
});

export default rootReducer;
