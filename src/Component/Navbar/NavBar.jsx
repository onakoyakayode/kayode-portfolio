import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const styles = {
    left: toggleDisplay ? '0' : '-100%', 
  }




  return (
    <nav className='navbar section'>
        <div className='navbar-icon'>
        <label htmlFor="check" className="bar">
            <input onClick={() => setToggleDisplay(!toggleDisplay)} id="check" type="checkbox" />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </label>
        </div>
        <div className='navbar-logo'>
            <Link to = '/' className='navbar-logo-link'>
              <h2>April<span>26</span></h2>
            </Link>
        </div>
        {toggleDisplay && <ul style={styles} className='navbar-items'>
          <Link to='/'>Home</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
        }
        
    </nav>
  )
}



export default NavBar;
