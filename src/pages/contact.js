import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'
import Sidebar from '../components/Sidebar'
import { Helmet } from 'react-helmet'

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Wrapper>
        <Helmet>
          <style>{'body { background-color: #ffc77d }'}</style>
        </Helmet>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="main-container fade-in">
          <h1>I'd love to get in touch.</h1>
          <SocialLinks />
          <div className="contact-container">
            <button className="contact-email">
              <a href="mailto:mannyalgarcia@gmail.com">mannyalgarcia@gmail.com</a>
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .main-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem 1rem 10rem;
  }
  
  .contact-container {
    align-self: center;
    margin-top: 2rem;
  }
  
  .contact-email {
    border-style: none;
    border-radius: .5rem;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1.8rem;
    background: #f5f5f5;
    color: #ffc77d;
    transition: all 0.3s linear;
  }

  .contact-email:hover {
    background: #fff;
    color: #ffc77d;
    transform: translateY(-8px);
  }
  
  .fade-in {
    animation: fadeIn ease 1s;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 810px) {
    .main-container {
      margin: 0rem 1rem 1.5rem 1.5rem
    }
    
    .contact-email {
      font-size: 1.3rem;
    }
    
    h1 {
      margin-top: 3rem;
      padding-top: 0;
    }
    
  }
`

export default Contact
