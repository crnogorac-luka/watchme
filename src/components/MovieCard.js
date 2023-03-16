import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/components/movie-card.scss";
import { Movie } from "../models/Movie";
import { addToFavorites, isFavorite, removeFromFavorites } from "../services/utils/favoritesHandler";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const movieInstance = new Movie(movie.id, null, movie.title, null, movie.release_date, null, movie.poster_path, null, null, null, null, null, isFavorite(movie.id))


  return (
    <div className="movie-card-wrapper">
        <div className="movie-card movie-card_simple" onClick={handleClick}>
          <div className="movie-card__poster movie-card__poster_has-icon">
            <img
              className="movie-card_simple__image image_card"
              src={`https://image.tmdb.org/t/p/w500${movieInstance.posterPath}`}
              alt={`${movieInstance.title} poster`}
            />
            <FontAwesomeIcon
              icon={isIconHovered || movieInstance.isFavorite ? faHeartSolid : faHeart}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
              onClick={() => movieInstance.isFavorite ? removeFromFavorites(movieInstance.id) : addToFavorites(movieInstance.id)}
              className="movie-card_simple__icon icon-small icon-light"
            />
          </div>
        </div>
    </div>
  );
};

export default MovieCard;
