import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Links = () => {
  const background = document.querySelector('body')
  const [fadeOut, setFadeOut] = React.useState(false)
  
  function goToLink(link) {
    setTimeout(function() {
      window.location.href=`/${link}`
    }, 500)
  }
  
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #000')}
        <ul className={`page-links fade-in ${fadeOut ? 'fade-out' : ''}`}>
          <li className="link-about">
            <el onClick={() => {
              setFadeOut(true)
              goToLink('about')
            }} >
              About
            </el>
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
  
  .fade-out {
    animation: fadeOut ease .5s
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
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
