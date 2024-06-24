import React from 'react';
import PropTypes from 'prop-types';
import './spinner.css'; 

const Spinner = ({ size = 'medium', color = '#007bff', className = '' }) => {
    const spinnerSize = {
        small: '20px',
        medium: '40px',
        large: '60px',
    };

    const spinnerStyle = {
        width: spinnerSize[size],
        height: spinnerSize[size],
        borderColor: color,
        borderTopColor: 'transparent',
    };

    return <div className={`spinner ${className}`} style={spinnerStyle}></div>;
};

Spinner.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Spinner;
