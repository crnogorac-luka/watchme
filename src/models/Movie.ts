export class Movie {

    id: number
    imdbId: number
    title: string
    originalTitle: string
    releaseDate: string
    overview: string
    posterPath: string
    popularity: number
    runtime: string
    voteAverage: number
    originalLanguage: string
    genreIds: []
    isFavorite: boolean

    constructor(id: number, imdbId: number, title: string, originalTitle: string, releaseDate: string, overview: string, posterPath: string, popularity: number, runtime: string, voteAverage: number, originalLanguage: string, genreIds: [], isFavorite: boolean) {
        this.id = id;
        this.imdbId = imdbId;
        this.title = title;
        this.originalTitle = originalTitle;
        this.releaseDate = releaseDate;
        this.overview = overview;
        this.posterPath = posterPath;
        this.popularity = popularity;
        this.runtime = runtime;
        this.voteAverage = voteAverage;
        this.originalLanguage = originalLanguage;
        this.genreIds = genreIds;
        this.isFavorite = isFavorite
    }
}