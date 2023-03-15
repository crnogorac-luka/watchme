import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { parseGenres } from "../../services/utils/parseGenres";
import { selectGenres } from "../../store/features/genres/genresSlice";
import { stringToDate } from "../../utils/dateOperations";
import "./MovieCard.scss";

const MovieCard = ({ movie, isExtended }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const genres = useSelector(selectGenres);

  return (
    <div>
      {!isExtended && (
        <div className="movie-card movie-card_simple" onClick={handleClick}>
          <div className="movie-card_poster">
            <img
              className="movie-card_simple__image image_card"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="movie-card_simple__icon icon-small icon-white"
            />
          </div>
        </div>
      )}
      {isExtended && (
        <div className="movie-card movie-card_extended">
          <div className="movie-card_poster">
            <img
              className="movie-card_extended__image image_card"
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div className="movie-card_extended__content">
            <p className="movie-card_extended__info">
              {stringToDate(movie.releaseDate).getFullYear()}
            </p>
            <h3 className="movie-card_extended__title">{movie.title}</h3>
            <p className="movie-card_extended__info">
              {movie.genreIds.map((id, index) => (
                <span key={id}>
                  {genres &&
                    parseGenres(genres).find((genre) => genre?.id === id)?.name}
                  {index === movie.genreIds.length - 1 ? "" : ", "}
                </span>
              ))}
            </p>

            <FontAwesomeIcon icon={faHeart} className="icon-small icon-white" />
            <button className="btn btn_card">Watch trailer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
