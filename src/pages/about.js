import React from 'react'
import Navbar from '../components/Navbar'
import SocialLinks from '../constants/socialLinks'

const About = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #e775fc')}
      <Navbar></Navbar>
      <div className="main-container">
        <div className="header">
          <h1>I am a fullstack developer.</h1>
        </div>
          <div className="social-links">
            <SocialLinks />
          </div>
        <div className="content-container">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia deleniti accusamus soluta facere dignissimos architecto beatae in sed, dicta veniam animi blanditiis sequi culpa delectus debitis nulla iusto eum! Corporis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi obcaecati sit a, ipsam nesciunt ipsum aperiam, odit sequi consequatur inventore id cumque? Aliquid, beatae recusandae minus tempora illo a eligendi!
        </div>
        <div className="resume-link">resume link</div>
      </div>
    </React.Fragment>
  )
}

export default About
