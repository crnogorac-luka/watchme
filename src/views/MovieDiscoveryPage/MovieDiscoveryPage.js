import React, { useEffect } from "react";
import MovieSlider from "@components/MovieSlider/MovieSlider";
import Navbar from "../../layouts/Navbar/Navbar";
import "./MovieDiscoveryPage.scss";
import { fetchGenres, selectGenres } from "../../store/features/genres/genresSlice";
import { useDispatch, useSelector } from "react-redux";


const MovieDiscoveryPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const genres = useSelector(selectGenres);
  console.log(genres);

  if (!genres) {
    return <div>Loading genres...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container-page">
        <h2>Hot new movies</h2>
      <MovieSlider timeWindow="week" />
      <h2>Trending by category</h2>
      <MovieSlider timeWindow="day" genre={genres && genres.find(genre => genre?.name === "Comedy")} />
      </div>
      
    </div>
  );
};

export default MovieDiscoveryPage;
