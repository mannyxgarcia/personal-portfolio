import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Links = () => {
  const background = document.querySelector('body')
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #000')}
        <ul className="page-links">
          <li className="link-about">
            <Link to="/about" >
              About
            </Link>
          </li>
          <li className="link-work">
            <Link to="/work" >
              Work
            </Link>
          </li>
          <li className="link-contact">
            <Link to="/contact" >
              Contact
            </Link>
          </li>
          <li className="intro-tap">
          </li>
        </ul>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .page-links {
    margin-right: 4rem;
  }
  
  .link-about,
  .link-work,
  .link-contact {
    font-size: 6rem;
  }
  
  @media only screen and (max-width: 700px) {
    .page-links {
      margin-right: 2rem;
    }
    
    .link-about,
    .link-work,
    .link-contact {
      font-size: 4.9rem;
    }
  }
`

export default Links
