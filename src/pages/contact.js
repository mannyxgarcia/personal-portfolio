import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'
import Sidebar from '../components/Sidebar'

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const background = document.querySelector('body')
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #ffc77d')}
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="main-container">
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
