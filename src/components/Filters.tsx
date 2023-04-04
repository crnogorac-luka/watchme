import React, { useEffect, useState } from "react";
import "@styles/components/filters.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilters } from "../store/features/allMovies/allMoviesSlice"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import { Filters as FiltersObject } from "../models/Filters";



const Filters = () => {
  const dispatch = useAppDispatch()
  const currentFilterData = useAppSelector(state => state.allMovies.filters);

  //const [filterData, setFilterData] = useState<FiltersObject>({});


  const handleInputChange = (event: any) => {
    const { name, value }: {name: string, value: any} = event.target;
    const updatedFilterData = { ...currentFilterData, [name]: value };
    dispatch(setFilters(updatedFilterData));
  };

  return (
    <div className="filters">
      <h3 className="filters__title">Add or remove filters</h3>
      <form className="filters-form">
        <div className="filters-form__form-group">
          <label className="filters-form__label" htmlFor="year">
            Year release
          </label>
          <input
            className="filters-form__input"
            id="yearReleased"
            name="year"
            min="1900"
            max="2030"
            step="1"
            maxLength={4}
            defaultValue={2023}
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="filters-form__form-group">
          <label className="filters-form__label" htmlFor="gteDate">
            Released later than:
          </label>

        </div>
        <div className="filters-form__form-group">
          <label htmlFor="">Select a value:</label>
          <input type="range" id="gteRating" name="vote_average.gte" min="0" max="10" defaultValue={2}/>
          <input type="range" id="lteRating" name="vote_average.lte" min="0" max="10" defaultValue={8}/>
        </div>
      </form>
    </div>
  );
};

export default Filters;
