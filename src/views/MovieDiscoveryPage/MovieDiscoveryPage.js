import React, { useEffect } from "react";
import MovieSlider from "../../components/MovieSlider";
import Navbar from "../../layouts/Navbar";
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
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Action</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Action")
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Horror</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Horror")
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Comedy</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Comedy")
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Thriller</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Thriller")
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Drama</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              allGenres && allGenres.find((genre) => genre.name === "Drama")
            }
          />
          </section>
        </section>
      </div>
    </div>
  );
};

export default MovieDiscoveryPage;
