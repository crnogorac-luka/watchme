import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import { fetchMovies, selectAllMovies } from '../../store/features/allMovies/allMoviesSlice';

import './AllMoviesPage.scss'

const AllMoviesPage = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    // Fetch the list of movies based on the current filters and sort options
    dispatch(fetchMovies(filters, sort));
  }, [dispatch, filters, sort]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <div>
      {/* Render filter and sort options here */}
      {movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMoviesPage;