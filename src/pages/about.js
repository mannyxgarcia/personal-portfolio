import React from 'react'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'
import {BsDownload} from 'react-icons/bs'
import resume from '../constants/mgarcia_resume_16-06-2022-18-00-20.pdf'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

const About = ({data}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  console.log('ABOUT----', data)
  return (
    <>
      <Wrapper>
        <Helmet>
          <style>{'body { background-color: #e775fc }'}</style>
        </Helmet>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="main-container fade-in">
          <div className="header">
            <h1>I am a full stack developer.</h1>
          </div>
          <div className="secondary-container">
            <div className="selfie-container">
              <Image fluid={data.file.childImageSharp.fluid}/>
            </div>
            <div className="social-links">
              <SocialLinks />
            </div>
            <div className="content-container">
              I am a full stack web developer with a passion for front-end web development. I have 4 years of work experience in design for theatrical entertainment. I transitioned to software engineering to pursue previous passions I had developed before designing for theater. I enjoy building out the visual components of a design and layout with careful consideration for the overall user experience. I blend my knowledge of design and my technical skills to collaborate and create products with thoughtful and creative solutions. 
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

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "portfolio-image.png"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.section`
  .main-container {
    margin: 0rem 4rem 2rem 10rem;
  }
  
  .header {
  /* height: 20vh; */
  }
  
  h1 {
    margin-top: 0rem;
    padding-top: 64px;
  }
  
  .secondary-container {
    padding: 0 8rem 0 4rem;
  }
  
  .content-container {
  padding: 1.5rem 1rem 1rem 0;
  font-size: 1.2rem;
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
  
  .fade-in {
    animation: fadeIn ease 1s
  }
  
  .selfie-container {
    padding-bottom: 1rem;
    width: 50%;  
  }
  
  .selfie {
    width: 30%;
  }

  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @media only screen and (min-width: 1092px) {
    .selfie-container {
      width: 25%;
    }
  }
  
  @media only screen and (max-width: 810px) {
    .main-container {
      margin: 0rem 1rem 5rem 1.5rem;
    }
    
    .content-container {
      font-size: 1rem;
    }
    
    .secondary-container {
      padding: 0
    }
    
    h1 {
    margin-top: 1.5rem;
    padding-top: 0px;
    }
  }
  
  /* @media only screen and (max-width: 809px){
    .selfie {
      width: 50%
    }
  } */
`

export default About
