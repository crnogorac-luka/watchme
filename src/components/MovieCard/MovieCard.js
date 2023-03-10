import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card-container" onClick={handleClick}>
      <FontAwesomeIcon icon="fa-regular fa-heart" className="icon-favorite" />
      <img
        className="movie-card-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
