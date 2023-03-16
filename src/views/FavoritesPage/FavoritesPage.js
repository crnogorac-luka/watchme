import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../layouts/Navbar";
import { getMovie } from "../../services/api/api";

const FavoritesPage = () => {
  const { favoriteMovies, setFavoriteMovies } = useState([{}]);

  useEffect(() => {
    const idList = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    for(let itemId in idList) {
      getMovie(itemId)
      .then((response) => {
        setFavoriteMovies(
          response);
      })
      .catch((error) => {
        return [];
      })
    }
    
    
  }, [favoriteMovies]);

  if (!favoriteMovies) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />

      <div className="container-page">
        <h2 className="favorites__title">Favorite movies</h2>

        <div className="favorites__grid">
          {favoriteMovies &&
            favoriteMovies.map((movieItem) => {
              return favoriteMovies.size() > 0 ? (
                <MovieCard
                  key={movieItem.id}
                  movie={movieItem}
                  isExtended={false}
                />
              ) : (
                <h3>You have no favorite movies selected.</h3>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
