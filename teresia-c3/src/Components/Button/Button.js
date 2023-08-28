import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label }) => {
return (
    <button className="custom-button">
    {label}
    </button>
);
};

Button.propTypes = {
label: PropTypes.oneOf(['Login', 'Signin']).isRequired,
};

export default Button;