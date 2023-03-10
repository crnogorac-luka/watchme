import { FETCH_ALL_MOVIES_REQUEST, FETCH_ALL_MOVIES_SUCCESS, FETCH_ALL_MOVIES_FAILURE } from '../../features/allMovies/allMoviesActions';


const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const allMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_MOVIES_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_ALL_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loading: false
        }
      case FETCH_ALL_MOVIES_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }

  export default allMoviesReducer