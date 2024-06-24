import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const Calendar = ({ selectedDate, onChange, className = '', ...props }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            className={`common-calendar ${className}`}
            {...props}
        />
    );
};

Calendar.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Calendar;
