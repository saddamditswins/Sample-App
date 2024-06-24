import React from 'react';
import PropTypes from 'prop-types';
import './select.css'; 

const Dropdown = ({ options, selectedOption, onSelect, className = '', placeholder = 'Select an option' }) => {
    return (
        <select 
            className={`common-dropdown ${className}`} 
            value={selectedOption} 
            onChange={(e) => onSelect(e.target.value)}
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    selectedOption: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string
};

export default Dropdown;
