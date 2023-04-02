import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import MovieCard from "../../components/MovieCard";
import { SortOption, SortOptions, sortOptionsArray } from "../../enums/sortOptions";
import Navbar from "../../layouts/Navbar";
import {
  fetchAllMovies
} from "../../store/features/allMovies/allMoviesSlice";
import Sidebar from "react-sidebar";
import "@styles/components/sidebar.scss";
import "./AllMoviesPage.scss";
import Filters from "../../components/Filters";
import Loading from "../../components/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React from "react";

const AllMoviesPage = () => {
  const [sort, setSort] = useState(SortOptions.POPULARITY_DESC);
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.allMovies.movies);
  const filters = useAppSelector(state => state.allMovies.filters);

  useEffect(() => {
    // Fetch the list of movies based on the current filters and sort options
    dispatch(fetchAllMovies({page, filters, sort}));
  }, [dispatch, page, filters, sort]);

  const handleSortChange = (newSort: SortOption | any) => {
    setSort(newSort);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (!movies) {
    return <Loading />;
  }

  return (
    <div>
      <Sidebar
        sidebar={<Filters />}
        open={isSidebarOpen}
        onSetOpen={() => setIsSidebarOpen(false)}
        sidebarClassName="sidebar"
        overlayClassName="sidebar-overlay"
        contentClassName="sidebar-content"
        rootClassName={
          isSidebarOpen ? "sidebar-wrapper--visible" : "sidebar-wrapper"
        }
      >
        <div></div>
      </Sidebar>

      <Navbar />
      {/* Render filter and sort options here */}
      <div className="container-page container-page_allmovies">
        <div className="allmovies-header">
          <h2 className="allmovies-header__title">All movies</h2>
          <button className="allmovies-header__link-filters">
            <FontAwesomeIcon
              icon={faFilter}
              className="link-filters__icon icon-small icon-light"
            />
            <span
              className="link-filters__label"
              onClick={() => setIsSidebarOpen(true)}
            >
              Filters
            </span>
          </button>
          <div className="allmovies-header__sort">
            <p className="sort__label">Sorted by</p>
            <Dropdown
              options={sortOptionsArray}
              defaultValue={sortOptionsArray.find(
                (option) => option.value === sort
              ) || sortOptionsArray[0]}
              onChange={handleSortChange}
            />
          </div>
        </div>
        <div className="allmovies__grid">
          {movies &&
            movies.map((movieItem) => {
              return (
                <div key={movieItem.id} className="allmovies__grid-item">
                <MovieCard
                  movie={movieItem}
                />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllMoviesPage;
