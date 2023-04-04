import React, { useEffect, useState } from "react";
import "./MovieDetailsPage.scss";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import { getMovie, getVideos } from "../../services/api/api";
import { Movie } from "../../models/Movie";
import { Genre } from "../../models/Genre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getReleaseYear } from "../../utils/dateOperations";
import { addToFavorites, isFavorite, removeFromFavorites } from "../../services/utils/favoritesHandler";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerId, setTrailerId] = useState<string | null>(null);

  const getGenresArray = (data: { genres: Record<string, any>[] }) => {
    return data?.genres.map(genre => new Genre(genre.id, genre.name)) || [];
  };


  const createMovieInstance = (movieData: any) => {
    return new Movie(
      movieData.id,
      movieData.title,
      movieData.release_date,
      movieData.poster_path,
      false,
      movieData.imdb_id,
      movieData.original_title,
      movieData.overview,
      movieData.popularity,
      movieData.runtime,
      movieData.vote_average,
      movieData.original_language,
      movieData.genres,
    );
  }

  useEffect(() => {
    const fetchMovie = async () => {
        if (movieId) {
          const response = await getMovie(movieId);
          const movieInstance = createMovieInstance(response);
          setSelectedMovie(movieInstance);
        }
    }
    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    const fetchVideos = async () => {

        if (movieId) {
          const response = await getVideos(movieId);
          const videos = response.results;
          const trailer = videos.filter((video: { type: string, id: string }) => video.type === "Trailer")[0];
          setTrailerId(trailer?.id || null);
        }
    }
    fetchVideos();
  }, [movieId]);

  return (
    <div>
      <Navbar />
      <div className="video-trailer">
        <iframe
          src={`http://www.youtube.com/embed/${trailerId}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube trailer for the movie"
          className="video-trailer__iframe"
        />
      </div>
      <div className="container-page container-page_movie-details">
        <div className="movie-details-content">
          <h2 className="movie-details-content__title">{selectedMovie && selectedMovie.title}</h2>
          <p className="movie-details-content__subtitle">
            (
            {selectedMovie &&
              getReleaseYear(selectedMovie.releaseDate)}
            )
          </p>
          <p className="movie-details-content__overview-text">
            {selectedMovie && selectedMovie.overview}
          </p>
          <table>
            <tbody>
              <tr>
                <td>Rating</td>
                <td>{selectedMovie && selectedMovie.voteAverage && selectedMovie.voteAverage.toFixed(1)}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>
                  {selectedMovie &&
                    selectedMovie.genreIds &&
                    selectedMovie.genreIds.map((genre: Record<string, any>, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        { selectedMovie && selectedMovie.genreIds && index === selectedMovie.genreIds.length - 1
                          ? ""
                          : ", "}
                      </span>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{selectedMovie && selectedMovie.runtime} min</td>
              </tr>

            </tbody>
          </table>
        </div>
        <button className="btn btn_cta" onClick={() => selectedMovie && selectedMovie.isFavorite ? movieId && removeFromFavorites(parseInt(movieId)) : movieId && addToFavorites(parseInt(movieId))}>
          {movieId && isFavorite(parseInt(movieId)) ? "Remove from favorites" : "Add to favorites"}
          <FontAwesomeIcon icon={faHeart} className="icon-small icon-dark" />
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
