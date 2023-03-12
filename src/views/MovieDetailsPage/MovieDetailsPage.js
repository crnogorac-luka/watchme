import React, { useEffect, useState } from "react";
import "./MovieDetailsPage.scss";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import { getMovie, getVideos } from "../../services/api/api";
import { Movie } from "../../models/Movie";
import { Genre } from "../../models/Genre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { stringToDate } from "../../utils/dateOperations";

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
    }

    const getMovieInstance = (data) => {
        const movieInstance = new Movie(
            data.id,
            data.imdb_id,
            data.title,
            data.original_title,
            data.release_date,
            data.overview,
            data.poster_path,
            data.popularity,
            data.runtime,
            data.vote_average,
            data.original_language,
            data.genres,
            false
          );
        return movieInstance;
    }

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        setSelectedMovie(getMovieInstance(response));
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
    />
    </div>
      <div className="container-page">
        <div className="movie-info-text">
          <h2>{selectedMovie && selectedMovie.title}</h2>
          <p className="subtitle">
            ({selectedMovie && stringToDate(selectedMovie.releaseDate).getFullYear()})
          </p>
          <p className="overview-text">
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
                <td>{selectedMovie && selectedMovie.genreIds && selectedMovie.genreIds.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index === selectedMovie.genreIds.length - 1 ? "" : ", "}
              </span>
            ))}</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{selectedMovie && selectedMovie.runtime} min</td>
              </tr>
              <tr>
                <td>Director</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-cta">Add to favorites<FontAwesomeIcon icon={faHeart} className="icon-small icon-dark" /></button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
