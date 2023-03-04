export class Movie {
    constructor(id, imdbId, title, originalTitle, releaseDate, overview, posterPath, popularity, runtime, voteAverage, originalLanguage, genreIds) {
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
    }
}