import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'

const Contact = () => {
  const background = document.querySelector('body')
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #ffc77d')}
        <Navbar />
        <div className="main-container">
          <h1>I'd love to get in touch.</h1>
          <SocialLinks />
          <div className="contact-container">
            <a href="mailto:mannyalgarcia@gmail.com" className="contact-email">mannyalgarcia@gmail.com</a>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .main-container {
    margin: 1rem 4rem 1rem 10rem;
  }
  
  .contact-container {
    align-self: center;
    margin-top: 2rem;
  }
  
  .contact-email {
    border-style: solid;
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
    transform: translateY(-5px);
  }
  
  @media only screen and (max-width: 700px) {
    .main-container {
      margin: 3rem 1rem 1.5rem 1.5rem
    }
    
    .contact-email {
      font-size: 1.3rem;
    }
  }
`

export default Contact
