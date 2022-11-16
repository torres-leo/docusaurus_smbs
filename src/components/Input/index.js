import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder, value, onChange }) => {
	return (
		<input type={type} className={`Input ${className}`} placeholder={placeholder} value={value} onChange={onChange} />
	);
};

Input.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.any,
};

export default Input;
