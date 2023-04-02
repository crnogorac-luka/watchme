import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { Genre } from "../../../models/Genre";
import { getAllGenres } from "../../../services/api/api";
import { parseGenres } from "../../../services/utils/parseGenres";
import { GenresState } from "../../interfaces/GenresState";


const initialState: GenresState = {
  genres: [],
  loading: false,
  error: null,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state: GenresState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state: GenresState, action: PayloadAction<[]>) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state: GenresState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres',
  async () => {
    const response = await getAllGenres();
    return response.genres;
  }
);

export const selectGenres = (state: RootState) => {
  return state.genres.genres;
};

export default genresSlice.reducer;