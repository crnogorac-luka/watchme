import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select from "react-select";
import '@styles/components/dropdown.scss'

const Dropdown = ({options, defaultValue, onChange}) => {

  const styles = {
    control: (provided) => ({
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
            onChange={onChange}
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