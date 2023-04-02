import React, { useEffect, useState } from "react";
import "@styles/components/filters.scss";
import { useAppDispatch } from "../store/hooks";
import { setFilters } from "../store/features/allMovies/allMoviesSlice"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import { Filters as FiltersObject } from "../models/Filters";



const Filters = () => {
  const dispatch = useAppDispatch()

  const [filterData, setFilterData] = useState<FiltersObject>({});

  useEffect(() => {
    dispatch(setFilters(filterData));
  }, [filterData])


  const handleInputChange = (event: any) => {
    const { key, value } = event.target;
    const updatedFilterData = { ...filterData, [key]: value };
    setFilterData(updatedFilterData);
  };

  return (
    <div className="filters">
      <h3 className="filters__title">Add or remove filters</h3>
      <form className="filters-form">
        <div className="filters-form__form-group">
          <label className="filters-form__label" htmlFor="yearReleased">
            Year release
          </label>
          <input
            className="filters-form__input"
            id="yearReleased"
            name="yearReleased"
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
            Year release
          </label>
          

        </div>
      </form>
    </div>
  );
};

export default Filters;
