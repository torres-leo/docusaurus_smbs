import React from 'react'
import PropTypes from "prop-types"

const Input = ({ type, className, placeholder, value }) => {
  return (
    <input type={type} className={`Input ${className}`} placeholder={placeholder} value={value} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
}

export default Input