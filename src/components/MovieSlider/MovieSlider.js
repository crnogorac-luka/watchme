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
import useViewport from "../../utils/useViewport";
import { breakpoints } from "../../enums/breakpoints";

const MovieSlider = ({ timeWindow, genre}) => {
  const dispatch = useDispatch();

  const screenWidth = useViewport()

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow));
    //console.log(genre);
  }, [dispatch, timeWindow, genre]);

  let movies = useSelector(selectTrendingMovies);
  
  if (!movies) {
    return <div>Loading...</div>;
  }

  if(genre) {
    movies = movies.filter(movie => movie.genre_ids?.includes(genre.id) ?? false);
    //console.log("GENRE " + genre)
  }



  const responsive = {
    desktop: {
      breakpoint: { max: breakpoints.LG, min: breakpoints.MD },
      items: 5,
      slidesToSlide: 4,
      partialVisibilityGutter: 50,
      additionalTransfrom: -50
    },
    tablet: {
      breakpoint: { max: breakpoints.MD, min: breakpoints.SM },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 20,
      additionalTransfrom: -20
    },
    mobile: {
      breakpoint: { max: breakpoints.MD, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
      additionalTransfrom: -20
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
    removeArrowOnDeviceType={["mobile"]}
    dotListClass="slider-list"
    itemClass="slider-item"
    >
      {movies &&
        movies.map((movieItem) => {
          const movie = createMovieInstance(movieItem);
          return (
              <MovieCard key={movie.id} movie={movie} isExtended={screenWidth > breakpoints.SM} />
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
