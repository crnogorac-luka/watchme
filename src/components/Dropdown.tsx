import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select from "react-select";
import '@styles/components/dropdown.scss'
import { SortOption } from "../enums/sortOptions";

const Dropdown = ({options, defaultValue, onChange}: { options: SortOption[], defaultValue: SortOption, onChange?: ((value: SortOption) => void) | undefined }) => {

  const styles = {
    control: (provided: Record<string, any>) => ({
      ...provided,
        backgroundColor: "transparent",
        border: 0,
        outline: "none !important",
        color: "$airBlue",
        '&:focus': {
          backgroundColor: 'lightgray',
        }
    })
    
    
  }

    return (
        <Select
            options={options}
            defaultValue={defaultValue}
            onChange={(option) => onChange && onChange(option as SortOption)}
            isClearable={false}
            isSearchable={false}
            classNames={{
                singleValue: () => 'dropdown-text',
                control: () => 'dropdown-control',
                container: () => 'dropdown-container'
            }}
            
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => <FontAwesomeIcon icon={faCaretDown} className="icon-small icon-air" />
            }}
styles={styles}
          />
    )
}

export default Dropdown;