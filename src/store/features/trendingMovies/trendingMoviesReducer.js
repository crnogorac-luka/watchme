import { FETCH_TRENDING_MOVIES_REQUEST, FETCH_TRENDING_MOVIES_SUCCESS, FETCH_TRENDING_MOVIES_FAILURE } from './trendingMoviesActions';


const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const trendingMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRENDING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true
      }
      case FETCH_TRENDING_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loading: false
        }
      case FETCH_TRENDING_MOVIES_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }

  export default trendingMoviesReducer;