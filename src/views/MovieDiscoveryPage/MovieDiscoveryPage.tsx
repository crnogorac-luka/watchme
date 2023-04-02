import React, { useEffect } from "react";
import MovieSlider from "../../components/MovieSlider";
import Navbar from "../../layouts/Navbar";
import "./MovieDiscoveryPage.scss";
import { fetchGenres } from "../../store/features/genres/genresSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { parseGenres } from "../../services/utils/parseGenres";

const MovieDiscoveryPage = () => {
  const dispatch = useAppDispatch()
  const allGenres = useAppSelector(state => parseGenres(state.genres.genres))

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-page">
        <section className="slider-section">
          <h2 className="slider-section__title">Hot new movies</h2>
          <MovieSlider timeWindow="week" genre={null} />
        </section>
        <section className="slider-section">
          <h2 className="slider-section__title">Trending by genre</h2>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Action</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              (allGenres && allGenres.find((genre) => genre.name === "Action")) || null
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Horror</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              (allGenres && allGenres.find((genre) => genre.name === "Horror")) || null
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Comedy</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              (allGenres && allGenres.find((genre) => genre.name === "Comedy")) || null
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Thriller</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              (allGenres && allGenres.find((genre) => genre.name === "Thriller")) || null
            }
          />
          </section>
          <section className="slider-section__subsection">
          <h4 className="slider-section__subtitle">Drama</h4>
          <MovieSlider
            timeWindow="day"
            genre={
              (allGenres && allGenres.find((genre) => genre.name === "Drama")) || null
            }
          />
          </section>
        </section>
      </div>
    </div>
  );
};

export default MovieDiscoveryPage;
