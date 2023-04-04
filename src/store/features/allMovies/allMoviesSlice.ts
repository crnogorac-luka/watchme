import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { getAllMovies } from "../../../services/api/api";
import { AllMoviesState } from "../../interfaces/AllMoviesState";


const initialState: AllMoviesState = {
  movies: [],
  loading: false,
  error: null,
  totalPages: 1,
  page: 1,
  filters: {},
  sort: "",
};

const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setFilters: (state: AllMoviesState, action: PayloadAction<any>) => {
      state.filters = action.payload;
    }, 
    setSort: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state: AllMoviesState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state: AllMoviesState, action: PayloadAction<any>) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
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
    return response;
  }
);

export const selectAllMovies = (state: RootState) => {
  return state.allMovies.movies;
};

export const selectTotalPages = (state: RootState) => {
  return state.allMovies.totalPages;
};

export const selectFilters = (state: RootState) => {
  return state.allMovies.filters;
};

export const { setPage, setFilters, setSort } = allMoviesSlice.actions;

export default allMoviesSlice.reducer;