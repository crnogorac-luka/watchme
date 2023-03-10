import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllMoviesPage from "./views/AllMoviesPage/AllMoviesPage";
import LandingPage from "./views/LandingPage/LandingPage";
import MovieDiscoveryPage from "./views/MovieDiscoveryPage/MovieDiscoveryPage";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import "./global.scss";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/discover" element={<MovieDiscoveryPage />} />
          <Route exact path="/movies" element={<AllMoviesPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
