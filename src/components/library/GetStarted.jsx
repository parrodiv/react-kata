import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Button from './Button'

const GetStarted = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-center'>
      <img src={logo} className='w-full max-w-[550px]' alt='logo' />
      <p className='text-black max-w-[450px] leading-7 py-4'>
        Lithia Motors wants to put you in full control of your car-owning
        experience by provifing easy to book service appointments from the
        comfort of your own home!
      </p>
      <Link to='/services'>
        <Button buttonName={'Get Started'} />
      </Link>
    </div>
  )
}

export default GetStarted
