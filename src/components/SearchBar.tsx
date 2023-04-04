import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { parseMovies } from '../services/utils/parseMovies';
import { fetchSearchResults } from '../store/features/searchResults/SearchResultsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import MovieCard from './MovieCard';
import "@styles/layout/movies-grid.scss";
import "@styles/components/search-bar.scss";



const SearchBar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchSearchResults({query: searchQuery, page: 1}));
    }, [searchQuery]);

    const handleInputChange = (event: any) => {
            setSearchQuery(event.target.value)
    }

    const handleSubmit = (event: any) => {
        navigate(`/search/${searchQuery}`);
    }

    let searchResults = useAppSelector(state => parseMovies(state.searchResults.movies));


    return (
        <div className="search-bar-wrapper">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-form__input" type="text" placeholder="Search for movies" value={searchQuery} onChange={handleInputChange} />
                <button className="search-form__button" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-form__icon icon-white icon-tiny" />
                </button>
            </form>
            <div className="">
                {searchResults && searchResults.length > 0 && (
                    <div className="movies-grid results-list">
                        {searchResults &&
                            searchResults.map((movieItem, index) => {
                                while(index < 4) {
                                    return (
                                        <div key={movieItem.id} className="results-list__item">
                                            <MovieCard
                                                movie={movieItem}
                                            />
                                        </div>
                                    );
                                }
                            })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
