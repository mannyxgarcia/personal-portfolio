import React from 'react'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'
import {BsDownload} from 'react-icons/bs'
import resume from '../constants/mgarcia-resume-12-20.pdf'

const About = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #ea88fc')}
      <Navbar></Navbar>
      <div className="main-container">
        <div className="header">
          <h1>I am a full stack developer.</h1>
        </div>
        <div className="about-container">
          <div className="social-links">
            <SocialLinks />
          </div>
          <div className="content-container">
            I am a full stack web developer with a passion for front-end web developement. I have 4 years of work experience in design for theatrical entertainment. I transitioned to software engineering to pursue a previous passion I had developed in my early high school years. I enjoy building out the visual components of a design and layout with careful consideration for the overall user experience. I blend my knowledge in design and technical skills to collaborate and create products with thoughtful and creative solutions. 
            
          </div>
          <div className="resume-link download-icon">
          <a href={resume} download="mgarcia-resume.pdf"> <BsDownload/> download resume</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default About
