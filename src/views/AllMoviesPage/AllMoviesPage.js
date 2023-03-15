import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import MovieCard from "../../components/MovieCard/MovieCard";
import { sortOptions, sortOptionsArray } from "../../enums/sortOptions";
import Navbar from "../../layouts/Navbar/Navbar";
import {
  fetchMovies,
  selectAllMovies,
} from "../../store/features/allMovies/allMoviesSlice";
import Sidebar from "react-sidebar";

import "./AllMoviesPage.scss";
import Filters from "../../components/Filters/Filters";

const AllMoviesPage = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(sortOptions.POPULARITY_DESC);
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    // Fetch the list of movies based on the current filters and sort options
    dispatch(fetchMovies(page, filters, sort));
  }, [dispatch, filters, sort, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Navbar />
      {/* Render filter and sort options here */}
      <div className="container-page">
        <div className="allmovies-header">
          <h2>All movies</h2>
          <Link className="text-link" onClick={() => setIsSidebarOpen(true)}>
            <FontAwesomeIcon
              icon={faFilter}
              className="icon-small icon-light"
            />
            <span>Filter</span>
        </Link>
          <div className="sort">
            <p>Sorted by</p>
            <Dropdown
              options={sortOptionsArray}
              defaultValue={sortOptionsArray.find(
                (option) => option.value === sort
              )}
              onChange={handleSortChange}
            />
          </div>
        </div>
        <div className="allmovies__grid">
          {
            movies && movies.map(movieItem => {
              return <MovieCard key={movieItem.id} movie={movieItem} isExtended={false} className="allmovies__item"/>
            })
          }
        </div>
      </div>
      <Sidebar
        sidebar={<Filters />}
        open={isSidebarOpen}
        onSetOpen={setIsSidebarOpen}
        sidebarClassName="sidebar"
      >
       <></>
        </Sidebar>
    </div>
  );
};

export default AllMoviesPage;
