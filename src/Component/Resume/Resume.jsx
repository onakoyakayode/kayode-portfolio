import React from 'react'
import NavBar from '../Navbar/NavBar';
import './Resume.css'
import resume from '../../Resume/Resume.pdf'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <section>
        <NavBar />
        <div className='resume-container'>
            <h2 className='resume-title animate__animated animate__fadeInLeft animate__delay'>Resume</h2>
            <div className='resume-details'>
                {/* <p className='resume-description'>A Frontend Developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing</p> */}
                <div className='resume-experience animate__animated animate__fadeInUp animate__delay-1s'>
                    <h2 className='role-company one'>The Sole Company</h2>
                    <div className='role'>
                        <h4 className='role-heading'>Frontend Developer<span>Lagos, Nigeria</span></h4>
                        <h5 className='role-date'>Nov 2021 - April 2022</h5>
                    </div>
                    <div className='responsibilities'>
                        <ul>
                            <li>Built a responsive catering Webiste with mobile-first approach</li>
                            <li>Developed a responsive tip-calculator with vanilla Javascript</li>
                            <li>Used Critical thinking to break down problems, evaluate solutions and make decisions</li>
                            <li>Maintained energy and enthusiasm in fast-paced enviroment.</li>
                            <li>Worked with developers to identify and remove software bugs.</li>
                            <li>Worked with Software Engineers and assisted with testing live products</li>
                        </ul>
                    </div>
                </div>
                <div className='resume-experience animate__animated animate__fadeInUp animate__delay-2s'>
                    <h2 className='role-company two'>The Sole Company</h2>
                    <div className='role'>
                        <h4 className='role-heading'>Frontend Developer<span>Lagos, Nigeria</span></h4>
                        <h5 className='role-date'>Nov 2021 - April 2022</h5>
                    </div>
                    <div className='responsibilities'>
                        <ul>
                            <li>Built a responsive catering Webiste with mobile-first approach</li>
                            <li>Developed a responsive tip-calculator with vanilla Javascript</li>
                            <li>Used Critical thinking to break down problems, evaluate solutions and make decisions</li>
                            <li>Maintained energy and enthusiasm in fast-paced enviroment.</li>
                            <li>Worked with developers to identify and remove software bugs.</li>
                            <li>Worked with Software Engineers and assisted with testing live products</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='resume-details'>
                <div className='resume-experience animate__animated animate__fadeInUp animate__delay-3s'>
                    <h2 className='role-company three'>The Sole Company</h2>
                    <div className='role'>
                        <h4 className='role-heading'>Frontend Developer<span>Lagos, Nigeria</span></h4>
                        <h5 className='role-date'>Nov 2021 - April 2022</h5>
                    </div>
                    <div className='responsibilities'>
                        <ul>
                            <li>Built a responsive catering Webiste with mobile-first approach</li>
                            <li>Developed a responsive tip-calculator with vanilla Javascript</li>
                            <li>Used Critical thinking to break down problems, evaluate solutions and make decisions</li>
                            <li>Maintained energy and enthusiasm in fast-paced enviroment.</li>
                            <li>Worked with developers to identify and remove software bugs.</li>
                            <li>Worked with Software Engineers and assisted with testing live products</li>
                        </ul>
                    </div>
                </div>
                <div className='resume-experience animate__animated animate__fadeInUp animate__delay-4s'>
                    <h2 className='role-company four'>The Sole Company</h2>
                    <div className='role'>
                        <h4 className='role-heading'>Frontend Developer<span>Lagos, Nigeria</span></h4>
                        <h5 className='role-date'>Nov 2021 - April 2022</h5>
                    </div>
                    <div className='responsibilities'>
                        <ul>
                            <li>Built a responsive catering Webiste with mobile-first approach</li>
                            <li>Developed a responsive tip-calculator with vanilla Javascript</li>
                            <li>Used Critical thinking to break down problems, evaluate solutions and make decisions</li>
                            <li>Maintained energy and enthusiasm in fast-paced enviroment.</li>
                            <li>Worked with developers to identify and remove software bugs.</li>
                            <li>Worked with Software Engineers and assisted with testing live products</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='resume-download'>
                <Link to={resume} className='animate__animated animate__fadeInLeft animate__delay-3s' target="_blank" download><button className="buttonDownload">Download Resume</button></Link>
                <Link to='/contact' className='animate__animated animate__fadeInRight animate__delay-4s'>
                    <button className='contact-btn'>
                        <span className="label">Contact</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </span>
                    </button></Link>
            </div>

        </div>
    </section>
  )
}

export default Resume;