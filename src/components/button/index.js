import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; 

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button 
            className={`common-button ${className}`} 
            onClick={onClick} 
            type={type} 
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;