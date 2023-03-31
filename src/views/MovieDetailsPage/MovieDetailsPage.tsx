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

  const [selectedMovie, setSelectedMovie] = useState();
  const [trailerId, setTrailerId] = useState(null);

  const getGenresArray = (data) => {
    let genresArray = [];
    for (let genre in data?.genres) {
      genresArray.push(new Genre(genre.id, genre.name));
    }
    return genresArray;
  };




  

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        const movieInstance = new Movie(
          response.id,
          response.imdb_id,
          response.title,
          response.original_title,
          response.release_date,
          response.overview,
          response.poster_path,
          response.popularity,
          response.runtime,
          response.vote_average,
          response.original_language,
          response.genres,
          false
        );
        setSelectedMovie(movieInstance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    getVideos(movieId)
      .then((response) => {
        const videos = response.results;
        const trailer = videos.filter((video) => video.type === "Trailer")[0];
        setTrailerId(trailer.id);
      })
      .catch((error) => {
        console.log(error);
      });
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
                <td>{selectedMovie && selectedMovie.voteAverage.toFixed(1)}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>
                  {selectedMovie &&
                    selectedMovie.genreIds &&
                    selectedMovie.genreIds.map((genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index === selectedMovie.genreIds.length - 1
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
        <button className="btn btn_cta" onClick={() => selectedMovie.isFavorite ? removeFromFavorites(movieId) : addToFavorites(movieId)}>
          {isFavorite(movieId) ? "Remove from favorites" : "Add to favorites"}
          <FontAwesomeIcon icon={faHeart} className="icon-small icon-dark" />
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
