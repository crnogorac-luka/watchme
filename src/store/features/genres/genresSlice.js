import { createSlice } from '@reduxjs/toolkit';
import { getAllGenres } from '../../../services/api/api';

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
      fetchGenresRequest: state => {
        state.loading = true;
      },
      fetchGenresSuccess: (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      },
      fetchGenresFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const fetchGenres = () => {
    return dispatch => {
      dispatch(genresSlice.actions.fetchGenresRequest());
      return getAllGenres()
        .then(response => {
            console.log(response.genres);
          const genres = response.genres;
          dispatch(genresSlice.actions.fetchGenresSuccess(genres));
        })
        .catch(error => {
          dispatch(genresSlice.actions.fetchGenresFailure(error.message));
        });
    };
  };

export const selectGenres = state => {
    console.log(state); // log the state object to the console
    return state.genres.genres;
  };;

export default genresSlice.reducer;