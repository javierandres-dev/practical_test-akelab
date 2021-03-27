import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
      <figure className='logo'>
        <img src="./logo.png" alt="Akelab logo"/>
      </figure>
      <Nav />
    </header>
  )
}

export default Header
