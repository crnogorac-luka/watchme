import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../layouts/Navbar";
import { parseMovies } from "../../services/utils/parseMovies";
import { fetchSearchResults } from "../../store/features/searchResults/SearchResultsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./SearchResultsPage.scss"

const SearchResultsPage = () => {
  const dispatch = useAppDispatch();
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const totalPages = useAppSelector(state => state.allMovies.totalPages)

  useEffect(() => {
    if(query) {
      dispatch(fetchSearchResults({query, page}));
    }
  }, [query, page]);

  const handlePageChange = (newPage: {selected: number}) => {
    setPage(newPage.selected + 1);
  };

  let searchResults = useAppSelector(state => parseMovies(state.searchResults.movies));



  return (
    <div className="results-wrapper">
  <Navbar />
  { searchResults ? (
    <div className="container-page">
      <h2 className="results__title">Search results for: {query}</h2>
    
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        pageLinkClassName={"pagination__page__link"}
        previousLinkClassName={"pagination__previous__link"}
        nextLinkClassName={"pagination__next__link"}
        breakLinkClassName={"pagination__break__link"}
        activeLinkClassName={"pagination__page_active__link"}
      />

      {searchResults.length > 0 ? (
        <div className="results__grid">
          {searchResults.map((movieItem) => (
            <div key={`searchResult_${movieItem.id}`} className="results__grid-item">
            <MovieCard
              movie={movieItem}
            />
            </div>
          ))}
        </div>
        
      ) : (
        <div className="no-results">
          <h3>No results found for "{query}".</h3>
          </div>
        
      )}

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        pageLinkClassName={"pagination__page__link"}
        previousLinkClassName={"pagination__previous__link"}
        nextLinkClassName={"pagination__next__link"}
        breakLinkClassName={"pagination__break__link"}
        activeLinkClassName={"pagination__page_active__link"}
      />

    </div>
  ) : (
    <Loading />
  )}
</div>

  );
};

export default SearchResultsPage;
