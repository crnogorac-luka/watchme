import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../models/Movie";
import { getTrending } from "../../../services/api/api";
import { MoviesState } from "../../interfaces/MoviesState";


const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state: MoviesState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state: MoviesState, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state: MoviesState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const fetchTrendingMovies = createAsyncThunk(
  'trendingMovies/fetchTrendingMovies',
  async (timeWindow: string) => {
    const response = await getTrending(timeWindow);
    return response.results;
  }
);

export const selectTrendingMovies = (state: any) => {
  return state.trendingMovies.movies;
};

export default trendingMoviesSlice.reducer;