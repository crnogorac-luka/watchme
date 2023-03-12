import React from "react";
import "./MovieDetailsPage.scss";
import { useParams } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return <div>
    <Navbar />
    <div className="container-page">
        
    </div>
  </div>;
};

export default MovieDetailsPage;
