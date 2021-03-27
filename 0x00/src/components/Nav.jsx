import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to={'/'} >inicio</Link>
      <Link to={'/exercise1'} >ejercicio 1</Link>
      <Link to={'/exercise2'} >ejercicio 2</Link>
      <Link to={'/exercise3'} >ejercicio 3</Link>
    </nav>
  )
}

export default Nav
