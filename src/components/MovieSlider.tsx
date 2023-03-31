import React, { Dispatch, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../store/features/trendingMovies/trendingMoviesSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@styles/components/movie-slider.scss";
import MovieCard from "./MovieCard";
import {breakpoints} from "../enums/breakpoints";
import Loading from "./Loading";

const MovieSlider = ({ timeWindow, genre}: {timeWindow: string, genre: any}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchTrendingMovies(timeWindow));
    //console.log(genre);
  }, []);

  let movies = useSelector(selectTrendingMovies);
  
 

  if(genre) {
    movies = movies.filter((movie: any) => movie.genre_ids?.includes(genre.id) ?? false);
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
