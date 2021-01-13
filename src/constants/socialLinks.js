import React from "react"
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = () => {
  return (
    <>
      <Wrapper>
        <ul className="social-icon-container">
          <li>
            <a href="https://www.linkedin.com/in/mannyxgarcia/">
              <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
            </a>
          </li>
          <li>
            <a href="https://github.com/mannyxgarcia">
              <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/manny_xcx">
              <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
            </a>
          </li>
        </ul>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .social-icon-container {
    display: flex;
    margin-bottom: 0.5rem;
  }
  
  .social-icon {
    font-size: 2rem;
    transition: all 0.3s linear;
    margin-right: 0.5rem;
  }

  .social-icon:hover {
    color: #fff;
    transform: translateY(-5px);
  }
  
  .linkedin-icon {
    color: #3b5998;
  }
  
  .twitter-icon {
    color: #00acee;
  }
  
  .github-icon {
    color: #494949;
  }
`

export default SocialLinks
