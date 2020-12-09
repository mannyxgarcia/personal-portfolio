import React from 'react'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'

const Contact = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #ffc77d')}
      <Navbar />
      <div className="main-container">
        <h1>I'd love to get in touch.</h1>
        <div className="social-links">
          <SocialLinks />
        </div>
        <div className="contact-container">
          <h2>mannyalgarcia@gmail.com</h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
