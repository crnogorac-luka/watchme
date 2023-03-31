import { MoviesState } from "./MoviesState";

export interface AllMoviesState extends MoviesState {
    page: number;
    filters: {};
    sort: string;
}