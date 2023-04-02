import { Genre } from "../../models/Genre"

export interface GenresState {
    genres: []
    loading: boolean
    error: any
  }