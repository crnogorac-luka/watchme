import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllMoviesPage from "./views/AllMoviesPage/AllMoviesPage";
import LandingPage from "./views/LandingPage/LandingPage";
import MovieDiscoveryPage from "./views/MovieDiscoveryPage/MovieDiscoveryPage";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import "./global.scss";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import FavoritesPage from "./views/FavoritesPage/FavoritesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/discover" element={<MovieDiscoveryPage />} />
          <Route path="/movies" element={<AllMoviesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
