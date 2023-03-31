import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../layouts/Navbar";
import { getMovie } from "../../services/api/api";
import './FavoritesPage.scss';

const FavoritesPage = () => {
  const [ favoriteMovies, setFavoriteMovies ] = useState([]);

  useEffect(() => {
    const idList = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  Promise.all(idList.map(id => getMovie(id)))
    .then((responses) => {
      const favoriteMovies = responses.filter(Boolean);
      setFavoriteMovies(prevState => [...prevState, ...favoriteMovies]);
    })
    .catch((error) => {
      console.log(error)
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
