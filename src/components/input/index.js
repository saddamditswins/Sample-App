import React from 'react';
import PropTypes from 'prop-types';
import './input.css'; 
const Input = ({ type = 'text', value, onChange, placeholder = '', className = '', ...props }) => {
    return (
        <input 
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`common-input ${className}`}
            {...props}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export default Input;
