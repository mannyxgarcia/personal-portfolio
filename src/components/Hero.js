import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid
import {
  MdTouchApp,
} from "react-icons/md"

const Hero = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #000')}
      <div className="intro-container" onClick={event =>  window.location.href='/links'}>
        <div className="intro-greeting-lg">
          Nice to Meet You.
        </div>
        
        <div className="intro-greeting-sm">
        Hello.
        </div>
        
        <div className="intro-name">
          I'm Manny
        </div>
        
        {/* <div className="intro-name">
          software engineer
        </div> */}
        <div className="intro-tap">
          <MdTouchApp className="pointer-icon"></MdTouchApp>
          {' '}
          tap to begin
        </div>
      </div>
    </React.Fragment>
    )
}

export default Hero
