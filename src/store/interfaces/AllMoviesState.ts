import { Filters } from "../../models/Filters";
import { MoviesState } from "./MoviesState";

export interface AllMoviesState extends MoviesState {
    totalPages: number
    page: number;
    filters: Filters;
    sort: string;
}