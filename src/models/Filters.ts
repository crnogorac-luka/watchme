export class Filters {
    year?: number
    gteDate?: string
    lteDate?: string
    genres?: []
    gteVote?: number
    lteVote?: number

    constructor(year?: number, gteDate?: string, lteDate?: string, genres?: [], gteVote?: number, lteVote?: number) {
        this.year = year;
        this.gteDate = gteDate;
        this.lteDate = lteDate;
        this.genres = genres;
        this.gteVote = gteVote;
        this.lteVote = lteVote
    }
  }