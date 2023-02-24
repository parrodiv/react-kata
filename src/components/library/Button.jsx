import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ onClick, buttonName, ...props }) => {
  
  return (
    <button
      className={
        buttonName === 'Get Started'
          ? 'primary mt-3 px-[70px] py-[10px]'
          : 'primary px-[10px] py-[15px]'
      }
      onClick={onClick}
      {...props}
    >
      {buttonName}
    </button>
  )
}

export default Button
