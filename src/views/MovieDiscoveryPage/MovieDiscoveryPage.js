import React, { useEffect } from "react";
import MovieSlider from "@components/MovieSlider/MovieSlider";
import Navbar from "../../layouts/Navbar/Navbar";
import "./MovieDiscoveryPage.scss";
import { fetchGenres, selectGenres } from "../../store/features/genres/genresSlice";
import { useDispatch, useSelector } from "react-redux";
import { createGenre, parseGenres } from "../../services/utils/parseGenres";


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
        <h2>Hot new movies</h2>
      <MovieSlider timeWindow="week" />
      <h2>Trending by genre</h2>
      <h4>Action</h4>
      <MovieSlider timeWindow="day" genre={allGenres && allGenres.find(genre => genre.name === "Action")} />
      <h4>Horror</h4>
      <MovieSlider timeWindow="day" genre={allGenres && allGenres.find(genre => genre.name === "Horror")} />
      <h4>Comedy</h4>
      <MovieSlider timeWindow="day" genre={allGenres && allGenres.find(genre => genre.name === "Comedy")} />
      </div>
      
    </div>
  );
};

export default MovieDiscoveryPage;
