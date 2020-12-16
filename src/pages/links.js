import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Links = () => {
  const background = document.querySelector('body')
  
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #000')}
        <div className="">
          <ul className="page-links fade-in">
            <li className="link-about">
              <Link to="/about">
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
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .page-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 100vh;
    cursor: pointer;
    margin-right: 4rem;
  }
  
  .link-about,
  .link-work,
  .link-contact {
    font-size: 6rem;
    font-weight: bold;
  }
  
  .link-about:hover {
  color: #e775fc;
  }

  .link-work:hover {
    color: #01cab9;
  }

  .link-contact:hover {
    color: #ffc77d;
  }

  .link-about,
  .link-work,
  .link-contact,
  a {
    color: inherit;
  }
  
  .fade-in {
    animation: fadeIn ease 2s;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
