import React from "react"
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Links = () => {
  
  return (
    <>
      <Wrapper>
        <Helmet>
          <style>{'body { background-color: #000 }'}</style>
        </Helmet>
        <div className="">
          <ul className="page-links fade-in">
            <li className="link-about">
              <AniLink paintDrip to="/about" hex="#e775fc">
                About.
              </AniLink>
            </li>
            <li className="link-work">
              <AniLink paintDrip to="/work" hex="#01cab9" >
                Work.
              </AniLink>
            </li>
            <li className="link-contact">
              <AniLink paintDrip to="/contact" hex="#ffc77d" >
                Contact.
              </AniLink>
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
      height: 90vh;
    }
    
    .link-about,
    .link-work,
    .link-contact {
      font-size: 4.9rem;
    }
  }
`

export default Links
