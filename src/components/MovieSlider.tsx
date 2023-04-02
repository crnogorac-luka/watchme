import React, { useEffect } from "react";
import {
  fetchTrendingMovies
} from "../store/features/trendingMovies/trendingMoviesSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@styles/components/movie-slider.scss";
import MovieCard from "./MovieCard";
import {breakpoints} from "../enums/breakpoints";
import Loading from "./Loading";
import { Movie } from "../models/Movie";
import { Genre } from "../models/Genre";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { parseMovies } from "../services/utils/parseMovies";

const MovieSlider = ({ timeWindow, genre}: {timeWindow: string, genre: Genre | null}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow));
  }, []);

  let movies = useAppSelector(state => parseMovies(state.trendingMovies.movies))
  
  if (genre && movies) {
    movies = movies.filter((movie: Movie) => movie.genreIds ? movie.genreIds.includes(genre.id) : false);
  }
  

  const responsive = {

    desktop: {
      breakpoint: { max: breakpoints.XL, min: breakpoints.MD },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 50

    },
    tablet: {
      breakpoint: { max: breakpoints.MD, min: breakpoints.SM },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 30

    },
    mobile: {
      breakpoint: { max: breakpoints.SM, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20

    },
  };

  return (
    <Carousel
    responsive={responsive}
    infinite={false}
    autoPlay={false}
    keyBoardControl={true}
    partialVisible={true}
    containerClass="slider-container"
    removeArrowOnDeviceType={["mobile"]}
    dotListClass="slider-list"
    sliderClass="slider-list-inner"
    itemClass="slider-item"
    slidesToSlide={4}
    >
      {movies &&
        movies.map((movieItem: any) => {
          return (
              <MovieCard key={movieItem.id} movie={movieItem} />
          );
        })}
    </Carousel>
  );
};


export default MovieSlider;
