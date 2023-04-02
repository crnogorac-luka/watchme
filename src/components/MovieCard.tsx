import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/components/movie-card.scss";
import { Movie } from "../models/Movie";
import { addToFavorites, removeFromFavorites } from "../services/utils/favoritesHandler";

const MovieCard = ({ movie }: {movie: Movie}) => {
  const navigate = useNavigate();
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const markFavorite = () => {
    movie.isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie.id);
  }

 


  return (
    <div className="movie-card-wrapper">
        <div className="movie-card movie-card_simple">
        <FontAwesomeIcon
              icon={isIconHovered || movie.isFavorite ? faHeartSolid : faHeart}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
              onClick={markFavorite}
              className="movie-card_simple__icon icon-small icon-light"
            />
          <div className="movie-card__poster movie-card__poster_has-icon" onClick={handleClick}>
            <img
              className="movie-card_simple__image image_card"
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={`${movie.title} poster`}
            />
          </div>
        </div>
    </div>
  );
};

export default MovieCard;
