import React from "react";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../layouts/Navbar";
import { Movie } from "../../models/Movie";
import { getMovie } from "../../services/api/api";
import './FavoritesPage.scss';

const FavoritesPage = () => {
  const [ favoriteMovies, setFavoriteMovies ] = useState<Movie[]>([]);

  useEffect(() => {
    const idList: number[] = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    if (idList.length === 0) {
      return;
    }
    Promise.all(idList.map((id: number) => getMovie(id)))
      .then((responses) => {
        const favoriteMovies: Movie[] = responses;
        setFavoriteMovies(favoriteMovies);
      })
      .catch((error) => {
        console.error("Error loading favorite movies:", error);
      })
  }, []);

  return (
    <div className="favorites-wrapper">
  <Navbar />
  { favoriteMovies ? (
    <div className="container-page">
      <h2 className="favorites__title">Favorite movies</h2>
      {favoriteMovies.length > 0 ? (
        <div className="favorites__grid">
          {favoriteMovies.map((movieItem) => (
            <div key={`favorite_${movieItem.id}`} className="favorites__grid-item">
            <MovieCard
              movie={movieItem}
            />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>You have no favorite movies selected.</h3>
          </div>
        
      )}
    </div>
  ) : (
    <Loading />
  )}
</div>

  );
};

export default FavoritesPage;
