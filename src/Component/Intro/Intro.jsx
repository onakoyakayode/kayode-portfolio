import React from 'react'
import './Intro.css'
import MainImage from '../../Images/Main-img.jpg'
import { Link } from 'react-router-dom'



const Intro = () => {
  return (
    <div className='intro'>
        <div className='brief-intro'>
            <h2 className='intro-heading animate__animated animate__fadeInLeft animate__delay-1s'>Hi, I am <span>Onakoya Kayode</span></h2>
            <p className='intro-description animate__animated animate__fadeIn animate__delay-2s'>A Frontend Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing</p>
            <Link className='intro-button animate__animated animate__fadeInUp animate__delay-3s' to='/portfolio'>
              <button className='intro-btn' alt="hire me">
                <i>h</i>
                <i>i</i>
                <i>r</i>
                <i>e</i>
                <i>&nbsp;</i>
                <i>m</i>
                <i>e</i>
              </button>
            </Link>
        </div>
        <div className='intro-img '>
            <img src={MainImage} alt='MyImage' className='intro-image animate__animated animate__fadeIn animate__delay-4s' />
        </div>
    </div>
  )
}

export default Intro