import { Genre } from "./Genre"

export class Movie {

    id: number
    title: string
    releaseDate: string
    posterPath: string
    isFavorite: boolean

    originalTitle?: string
    imdbId?: number
    overview?: string
    popularity?: number
    runtime?: string
    voteAverage?: number
    originalLanguage?: string
    genreIds?: any[]
    
    constructor(id: number, title: string, releaseDate: string, posterPath: string, isFavorite: boolean, originalTitle?: string, imdbId?: number, overview?: string,  popularity?: number, runtime?: string, voteAverage?: number, originalLanguage?: string, genreIds?: any[] ) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
        this.isFavorite = isFavorite
        this.originalTitle = originalTitle;
        this.imdbId = imdbId;
        this.overview = overview;
        this.popularity = popularity;
        this.runtime = runtime;
        this.voteAverage = voteAverage;
        this.originalLanguage = originalLanguage;
        this.genreIds = genreIds;
    }
}