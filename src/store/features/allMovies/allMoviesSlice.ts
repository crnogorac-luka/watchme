import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { Filters } from "../../../models/Filters";
import { Movie } from "../../../models/Movie";
import { getAllMovies } from "../../../services/api/api";
import { parseMovies } from "../../../services/utils/parseMovies";
import { AllMoviesState } from "../../interfaces/AllMoviesState";


const initialState: AllMoviesState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  filters: {},
  sort: "",
};

const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    }, 
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state: AllMoviesState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state: AllMoviesState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state: AllMoviesState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const fetchAllMovies = createAsyncThunk(
  'allMovies/fetchAllMovies',
  async ({page, filters, sort}: {page: number, filters: any, sort: string}) => {
    const response = await getAllMovies(page, filters, sort);
    return response.results;
  }
);

export const selectAllMovies = (state: RootState) => {
  return state.allMovies.movies;
};

export const { setFilters, setSort } = allMoviesSlice.actions;

export default allMoviesSlice.reducer;