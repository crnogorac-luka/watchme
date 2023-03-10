import React from "react";
import MovieSlider from "@components/MovieSlider/MovieSlider";
import Navbar from "../../layouts/Navbar/Navbar";
import "./MovieDiscoveryPage.scss";



const MovieDiscoveryPage = () => {

  return (
    <div className="container-page">
      <Navbar />
      <MovieSlider timeWindow="week" genre={35} />
    </div>
  );
};

export default MovieDiscoveryPage;
