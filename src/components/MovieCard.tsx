import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/components/movie-card.scss";
import { Movie } from "../models/Movie";
import { addToFavorites, removeFromFavorites } from "../services/utils/favoritesHandler";
import moviePosterPlaceholder from "@assets/movie-poster-placeholder.png"

const MovieCard = ({ movie }: {movie: Movie}) => {
  const navigate = useNavigate();
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [isIconSolid, setIsIconSolid] = useState(movie.isFavorite);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const markFavorite = () => {
    movie.isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie.id);
    setIsIconSolid(!movie.isFavorite)
  }

 
  return (
    <div className="movie-card-wrapper">
        <div className="movie-card movie-card_simple">
          
          <div className="movie-card__poster movie-card__poster_has-icon" onClick={handleClick}>
            <img
              className="movie-card_simple__image image_card"
              src={movie.posterPath ? `https://image.tmdb.org/t/p/w500${movie.posterPath}` : moviePosterPlaceholder}
              alt={`${movie.title} poster`}
            />
          </div>
          <FontAwesomeIcon
            icon={isIconHovered || isIconSolid ? faHeartSolid : faHeart}
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            onClick={markFavorite}
            className="movie-card_simple__icon icon-small icon-light"
          />
        </div>
    </div>
  );
};

export default MovieCard;
