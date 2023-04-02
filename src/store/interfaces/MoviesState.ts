import { Movie } from "../../models/Movie"

export interface MoviesState {
    movies: []
    loading: boolean
    error: any
  }