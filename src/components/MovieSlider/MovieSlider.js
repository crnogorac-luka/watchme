import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../../store/features/trendingMovies/trendingMoviesSlice";
import { Movie } from "../../models/Movie.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.scss";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ timeWindow, genre }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow, genre));
  }, [dispatch, timeWindow, genre]);

  const movies = useSelector(selectTrendingMovies);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
      partialVisibilityGutter: 60,
      additionalTransfrom: -60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 50,
      additionalTransfrom: -50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
      additionalTransfrom: -30
    },
  };

  return (
    <Carousel
    responsive={responsive}
    infinite={false}
    autoPlay={false}
    keyBoardControl={true}
    partialVisible={true}
    containerClass=""
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="slider-list"
    itemClass="slider-item"
    >
      {movies &&
        movies.map((movieItem) => {
          const movie = createMovieInstance(movieItem);
          return (
              <MovieCard key={movie.id} movie={movie} />
          );
        })}
    </Carousel>
  );
};

const createMovieInstance = (movieData) => {
  const { id, title, poster_path, release_date, genre_ids } = movieData;
  return new Movie(
    id,
    null,
    title,
    null,
    release_date,
    null,
    poster_path,
    null,
    null,
    null,
    null,
    genre_ids,
    false
  );
};

export default MovieSlider;
