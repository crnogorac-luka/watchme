import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../../../services/api/api";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  filters: {},
  sort: "",
};

export const allMoviesSlice = createSlice({
  name: "allMovies",
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const fetchMovies = (page, filters, sort) => {
  return (dispatch) => {
    dispatch(allMoviesSlice.actions.fetchMoviesRequest());

    // Fetch the list of movies based on the filters and sort options
    return getAllMovies(page, filters, sort)
      .then((response) => {
        console.log(response.results);
        dispatch(allMoviesSlice.actions.fetchMoviesSuccess(response.results));
      })

      .catch((error) => {
        dispatch(allMoviesSlice.actions.fetchMoviesFailure(error.message));
      });
  };
};

export const selectAllMovies = (state) => {
  //console.log(state);
  return state.allMovies.movies;
};

export default allMoviesSlice.reducer;
