import { Genre } from "../../models/Genre"

export interface GenresState {
    genres: Genre[] | null
    loading: boolean
    error: any
  }