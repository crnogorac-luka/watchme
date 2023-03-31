import { Genre } from "../../models/Genre"

export interface GenresState {
    genres: Genre[]
    loading: boolean
    error: any
  }