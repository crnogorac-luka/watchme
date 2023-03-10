import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../store/features/trendingMovies/trendingMoviesSlice";
import { Movie } from "../../models/Movie.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ timeWindow, genre }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow, genre));
  }, [dispatch, timeWindow, genre]);

  const movies = useSelector(selectTrendingMovies);
  console.log(movies);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {movies &&
        movies.map((movieItem) => {
          const movie = createMovieInstance(movieItem);
          return (
            <div key={movie.id} className="slider-item">
              <MovieCard movie={movie} />
            </div>
          );
        })}
    </Slider>
    </div>
  );
};

const createMovieInstance = (movieData) => {
  const { id, title, poster_path } = movieData;
  console.log(movieData);
  return new Movie(
    id,
    null,
    title,
    null,
    null,
    null,
    poster_path,
    null,
    null,
    null,
    null,
    null
  );
};

export default MovieSlider;
