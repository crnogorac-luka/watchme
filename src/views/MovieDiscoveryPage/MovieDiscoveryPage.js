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



  return (
    <div className="container-page">
      <Navbar />
      <MovieSlider timeWindow="week" genre={35} />
    </div>
  );
};

export default MovieDiscoveryPage;
