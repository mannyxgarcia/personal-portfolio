import React from 'react'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'
import {BsDownload} from 'react-icons/bs'
import resume from '../constants/mgarcia-resume-12-20.pdf'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const background = document.querySelector('body')
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #ea88fc')}
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="main-container">
          <div className="header">
            <h1>I am a full stack developer.</h1>
          </div>
          <div className="secondary-container">
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
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .main-container {
    margin: 1rem 4rem 2rem 10rem;
  }
  
  .header {
  height: 36vh;
  }
  
  .secondary-container {
    padding: 0 8rem 0 4rem;
  }
  
  .content-container {
  padding: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
  }
  
  .resume-link {
  margin-top: 0.5rem;
  }
  
  .download-icon {
  font-size: 1.1rem;
  transition: all 0.3s linear;
  padding-top: 0.5rem;
  }
  
  .download-icon:hover {
  transform: translateY(-5px);
  }
  
  @media only screen and (max-width: 810px) {
    .main-container {
      margin: 3rem 1rem 1.5rem 1.5rem
    }
    
    .secondary-container {
      padding: 0
    }
  }
`

export default About
