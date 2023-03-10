import React from "react";
import "./MovieDetailsPage.scss";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
};

export default MovieDetailsPage;
