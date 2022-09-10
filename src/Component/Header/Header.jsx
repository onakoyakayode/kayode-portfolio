import React from 'react';
import Intro from '../Intro/Intro';
import NavBar from '../Navbar/NavBar';
import "./Header.css"


const Header = () => {
  return (
    <header className='header'>
      <NavBar />
      <Intro />
    </header>
  )
}

export default Header;