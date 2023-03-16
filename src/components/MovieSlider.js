import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrendingMovies,
  selectTrendingMovies,
} from "../store/features/trendingMovies/trendingMoviesSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@styles/components/movie-slider.scss";
import MovieCard from "./MovieCard";
import useViewport from "../utils/useViewport";
import {breakpoints} from "../enums/breakpoints";
import Loading from "./Loading";

const MovieSlider = ({ timeWindow, genre}) => {
  const dispatch = useDispatch();

  const screenWidth = useViewport()

  useEffect(() => {
    dispatch(fetchTrendingMovies(timeWindow));
    //console.log(genre);
  }, [dispatch, timeWindow, genre]);

  let movies = useSelector(selectTrendingMovies);
  
  if (!movies) {
    return <Loading />;
  }

  if(genre) {
    movies = movies.filter(movie => movie.genre_ids?.includes(genre.id) ?? false);
    //console.log("GENRE " + genre)
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
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 20

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
    containerClass=""
    removeArrowOnDeviceType={["mobile"]}
    dotListClass="slider-list"
    itemClass="slider-item"
    >
      {movies &&
        movies.map((movieItem) => {
          return (
              <MovieCard key={movieItem.id} movie={movieItem} isExtended={screenWidth > breakpoints.MD} />
          );
        })}
    </Carousel>
  );
};


export default MovieSlider;
