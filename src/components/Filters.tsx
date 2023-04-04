import React from "react";
import "@styles/components/filters.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilters } from "../store/features/allMovies/allMoviesSlice"
import 'react-date-range/dist/styles.css';
import ReactSlider from 'react-slider'
import "@styles/components/slider.scss";



const Filters = () => {
  const dispatch = useAppDispatch()
  const currentFilterData = useAppSelector(state => state.allMovies.filters);

  //const [filterData, setFilterData] = useState<FiltersObject>({});


  const handleInputChange = (event: any) => {
    const { name, value }: { name: string, value: any } = event.target;
    const updatedFilterData = { ...currentFilterData, [name]: value };
    dispatch(setFilters(updatedFilterData));
  };

  const handleSliderChange = (values: number[]) => {
    const updatedFilterData = { ...currentFilterData, "vote_average.gte": values[0], "vote_average.lte": values[1] };
    dispatch(setFilters(updatedFilterData));
  }

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
          <label className="filters-form__label">Rating</label>
          <ReactSlider
            className="slider slider_range"
            thumbClassName="slider__thumb"
            trackClassName="slider__track"
            defaultValue={[0.0, 10.0]}
            ariaLabel={['Min. rating', 'Max. rating']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}><span className="slider__thumb__value">{state.valueNow}</span></div>}
            pearling
            minDistance={0.5}
            min={0}
            max={10}
            step={0.1}
            onAfterChange={handleSliderChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Filters;
