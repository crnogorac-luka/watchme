import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { searchMovies } from "../../../services/api/api";
import { SearchResultsState } from "../../interfaces/SearchResultsState";


const initialState: SearchResultsState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  totalResults: 0,
  totalPages: 1,
  
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state: SearchResultsState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state: SearchResultsState, action: PayloadAction<any>) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.totalResults = action.payload.total_results;
      })
      .addCase(fetchSearchResults.rejected, (state: SearchResultsState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const fetchSearchResults = createAsyncThunk(
  'searchResults/fetchSearchResults',
  async ({query, page}: {query: string, page: number}) => {
    const response = await searchMovies(query, page);
    return response;
  }
);

export const selectSearchResults = (state: RootState) => {
  return state.searchResults.movies;
};

export const selectTotalPages = (state: RootState) => {
  return state.searchResults.totalPages;
};

export const selectTotalResults = (state: RootState) => {
  return state.searchResults.totalResults;
};

export const { setPage } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;