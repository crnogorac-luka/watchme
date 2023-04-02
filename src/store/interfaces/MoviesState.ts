import { Movie } from "../../models/Movie"

export interface MoviesState {
    movies: Movie[] | null
    loading: boolean
    error: any
  }