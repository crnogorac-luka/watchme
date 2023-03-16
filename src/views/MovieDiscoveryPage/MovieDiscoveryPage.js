import React, { useEffect } from "react";
import MovieSlider from "@components/MovieSlider/MovieSlider";
import Navbar from "../../layouts/Navbar/Navbar";
import "./MovieDiscoveryPage.scss";
import {
  fetchGenres,
  selectGenres,
} from "../../store/features/genres/genresSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieDiscoveryPage = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="container-page">
        <section className="slider-section">
          <h2 className="slider-section__title">Hot new movies</h2>
          <MovieSlider timeWindow="week" />
        </section>
        <section className="slider-section">
          <h2 className="slider-section__title">Trending by genre</h2>
          <h4 className="slider-section__subtitle">Action</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Action")
            }
          />
          <h4 className="slider-section__subtitle">Horror</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Horror")
            }
          />
          <h4 className="slider-section__subtitle">Comedy</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Comedy")
            }
          />
        </section>
      </div>
    </div>
  );
};

export default MovieDiscoveryPage;
