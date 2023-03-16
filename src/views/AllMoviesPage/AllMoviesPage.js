import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import MovieCard from "../../components/MovieCard";
import { sortOptions, sortOptionsArray } from "../../enums/sortOptions";
import Navbar from "../../layouts/Navbar";
import {
  fetchMovies,
  selectAllMovies,
} from "../../store/features/allMovies/allMoviesSlice";
import Sidebar from "react-sidebar";
import "@styles/components/sidebar.scss";
import "./AllMoviesPage.scss";
import Filters from "../../components/Filters";
import Loading from "../../components/Loading";

const AllMoviesPage = () => {
  const [sort, setSort] = useState(sortOptions.POPULARITY_DESC);
  const [page, setPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const filters = useSelector((state) => state.allMovies.filters);

  useEffect(() => {
    // Fetch the list of movies based on the current filters and sort options
    dispatch(fetchMovies(page, filters, sort));
  }, [dispatch, page, filters, sort]);

  const handleSortChange = (newSort) => {
    setSort(newSort.value);
  };

  const handlePageChange = (newPage) => {
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
          <Link className="allmovies-header__link-filters">
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
          </Link>
          <div className="allmovies-header__sort">
            <p className="sort__label">Sorted by</p>
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
          {movies &&
            movies.map((movieItem) => {
              return (
                <MovieCard
                  key={movieItem.id}
                  movie={movieItem}
                  isExtended={false}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllMoviesPage;
