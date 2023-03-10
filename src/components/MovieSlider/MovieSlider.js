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
//import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const MovieSlider = ({ timeWindow, genre }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow, genre));
  }, [dispatch, timeWindow, genre]);

  const movies = useSelector(selectTrendingMovies);

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
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies &&
        movies.map((movieItem) => {
          const movie = createMovieInstance(movieItem);
          return (
            <SwiperSlide key={movie.id}>
            <div className="slider-item">
              <MovieCard movie={movie} />
            </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
    </div>
  );
};

const createMovieInstance = (movieData) => {
  const { id, title, poster_path } = movieData;
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
