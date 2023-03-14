import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  loading: false,
  error: null,
  filters: {},
  sort: {},
};

export const allMoviesSlice = createSlice({
  name: 'allMovies',
  initialState,
  reducers: {
    fetchMoviesRequest: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});


export const fetchMovies = (filters, sort) => async (dispatch) => {
  dispatch(allMoviesSlice.actions.fetchMoviesRequest());
  try {
    // Fetch the list of movies based on the filters and sort options
    const response = await fetch(`/api/movies?filters=${JSON.stringify(filters)}&sort=${JSON.stringify(sort)}`);
    const data = await response.json();
    dispatch(allMoviesSlice.actions.fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(allMoviesSlice.actions.fetchMoviesFailure(error.message));
  }
};

export const selectAllMovies = state => {
    //console.log(state);
      return state.allMovies;
    };;
  
  export default allMoviesSlice.reducer;