import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Portfolio.css'
import PortfolioData from '../../Data/Portfolio/Portfolio.json'
import { Link } from 'react-router-dom'




const Portfolio = () => {

   
    
  return (
    <section>
        <NavBar />
        <div className='portfolio'>
            <h2 className='portfolio-title animate__animated animate__fadeInLeft animate__delay'>My Previous Work</h2>
            <div className='portfolio-details'>
                {PortfolioData.map((data, index) => ( 
                    <div className='portfolio-detail animate__animated animate__fadeInUp animate__delay-2s'>
                        <div className='portfolio-img'>
                            <img src={data.image} alt='work' className='portfolio-img-img' />
                        </div>
                        <div className='portfolio-link'>
                            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
                        </div>
                    </div>
                    ))
                }
            </div>
            <Link className='resume-link animate__animated animate__fadeInLeft animate__delay-3s' to='/resume'>
                <button className="resume-button">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Resume</span>
                </button>
            </Link>
        </div>
    </section>
  )
}

export default Portfolio