import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { MoviesAction } from "../features/trendingMovies/trendingMoviesActions";



export const fetchTrendingMoviesRequest = () => {
    return {
      type: ActionType.REQUEST
    };
  };
  
  export const fetchTrendingMoviesSuccess = (movies: []) => {
    return {
      type: ActionType.SUCCESS,
      payload: movies
    };
  };
  
  export const fetchTrendingMoviesFailure = (error: string | null) => {
    return {
      type: ActionType.FAILURE,
      payload: error
    };
  };