import { Movie } from "../../models/Movie"

export interface MoviesState {
    movies: Movie[]
    loading: boolean
    error: any
  }