import { Movie } from "../../models/Movie";

export const parseMovies = (data: any[]) => {
    return data ? data.map((movie: any) => createMovie(movie)) : null;
};

export const createMovie = ({ id, title, release_date, poster_path, original_title, imdb_id, overview, popularity, runtime, vote_average, original_language, genre_ids }: {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    isFavorite: boolean,
    original_title?: string,
    imdb_id?: number,
    overview ?: string,
    popularity ?: number,
    runtime ?: string,
    vote_average ?: number,
    original_language ?: string,
    genre_ids ?: []
    }): Movie => {
        return new Movie(id, title, release_date, poster_path, false, original_title, imdb_id, overview, popularity, runtime, vote_average, original_language, genre_ids);
}


