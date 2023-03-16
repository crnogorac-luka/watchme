import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { parseGenres } from "../services/utils/parseGenres";
import { selectGenres } from "../store/features/genres/genresSlice";
import { getReleaseYear } from "../utils/dateOperations";
import "@styles/components/movie-card.scss";
import { Movie } from "../models/Movie";
import { addToFavorites, isFavorite, removeFromFavorites } from "../services/utils/favoritesHandler";

const MovieCard = ({ movie, isExtended }) => {
  const navigate = useNavigate();
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const movieInstance = new Movie(movie.id, null, movie.title, null, movie.releaseDate, null, movie.poster_path, null, null, null, null, movie.genre_ids, isFavorite(movie.id))

  const genres = useSelector(selectGenres);

  return (
    <div className="movie-card-wrapper">
      {!isExtended && (
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
      )}
      {isExtended && (
        <div className="movie-card movie-card_extended">
          <div className="movie-card__poster">
            <img
              className="movie-card_extended__image image_card"
              src={`https://image.tmdb.org/t/p/w500${movieInstance.posterPath}`}
              alt={`${movieInstance.title} poster`}
            />
          </div>
          <div className="movie-card_extended__content">
            <p className="movie-card_extended__info">
              {getReleaseYear(movie.releaseDate)}
            </p>
            <h3 className="movie-card_extended__title">{movieInstance.title}</h3>
            <p className="movie-card_extended__info">
              {movieInstance.genreIds.map((id, index) => (
                <span key={id}>
                  {genres &&
                    parseGenres(genres).find((genre) => genre?.id === id)?.name}
                  {index === movieInstance.genreIds.length - 1 ? "" : ", "}
                </span>
              ))}
            </p>

            <FontAwesomeIcon
              icon={isIconHovered ? faHeartSolid : faHeart}
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
              onClick={() => movieInstance.isFavorite ? removeFromFavorites(movieInstance.id) : addToFavorites(movieInstance.id)}
              className="icon-small icon-white"
            />
            <button className="btn btn_card">Find out more</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
