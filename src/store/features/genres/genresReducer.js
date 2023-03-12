import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from './genresActions';


const initialState = {
    genres: [],
    loading: false,
    error: null,
};

const genresReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GENRES_REQUEST:
      return {
        ...state,
        loading: true
      }
      case FETCH_GENRES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loading: false
        }
      case FETCH_GENRES_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }

  export default genresReducer;