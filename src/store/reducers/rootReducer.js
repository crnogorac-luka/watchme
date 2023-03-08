import { combineReducers } from 'redux';
import trendingMoviesReducer from './trendingMoviesReducer';
import topRatedMoviesReducer from './topRatedMoviesReducer';
import genreMoviesReducer from './genreMoviesReducer';
import allMoviesReducer from './allMoviesReducer';
import searchMoviesReducer from './searchMoviesReducer';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  genreMovies: genreMoviesReducer,
  allMovies: allMoviesReducer,
  searchMovies: searchMoviesReducer,
});

export default rootReducer;
