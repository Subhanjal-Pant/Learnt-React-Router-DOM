/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types';

const Button = ({ text, onClick, bgColor="900" }) => {
  return (
    <button onClick={onClick} className='submit-button mx-3 border-black border-2 bg-violet-800 active:scale-95 active:bg-violet-900 w-20'>{ text }</button>
  )
}

export default Button;