import { MoviesState } from "./MoviesState";

export interface SearchResultsState extends MoviesState {
    page: number
    totalResults: number
    totalPages: number
}