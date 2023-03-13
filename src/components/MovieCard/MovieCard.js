import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectGenres } from "../../store/features/genres/genresSlice";
import { stringToDate } from "../../utils/dateOperations";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const genres = useSelector(selectGenres);

  return (
    <div className="movie-card-container" onClick={handleClick}>
      <div className="poster-container">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-card-body">
        <div className="movie-card-text">
          <p>
            {stringToDate(movie.releaseDate).getFullYear()}
          </p>
          <h3>{movie.title}</h3>
          <p>
            {movie.genreIds.map((id, index) => (
              <span key={id}>
                {genres.find(genre => genre.id === id)}
                {index === movie.genreIds.length - 1 ? "" : ", "}
              </span>
            ))}
          </p>
        </div>
        <FontAwesomeIcon icon={faHeart} className="icon-small icon-white" />
        <button className="btn btn-card">Watch trailer</button>
      </div>
    </div>
  );
};

export default MovieCard;
