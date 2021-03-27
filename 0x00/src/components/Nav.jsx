import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to={'/'} className='link'>inicio</Link>
      <Link to={'/exercise1'} className='link'>ejercicio 1</Link>
      <Link to={'/exercise2'} className='link'>ejercicio 2</Link>
      <Link to={'/exercise3'} className='link'>ejercicio 3</Link>
    </nav>
  )
}

export default Nav
