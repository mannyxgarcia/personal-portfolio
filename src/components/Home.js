import React from 'react'
import { MdTouchApp } from "react-icons/md"
import styled from 'styled-components'
import { window, document } from 'browser-monads'
import Helmet from 'react-helmet';

const Home = () => {
  const background = document.querySelector('body')
  const [fadeOut, setFadeOut] = React.useState(false)
  
  function goToLinks() {
    setTimeout(function(){
      window.location.href='/links'
    }, 100)
  }
  return (
    <>
      <Wrapper>
        <Helmet>
          <style>{'body { background-color: #000 }'}</style>
        </Helmet>
        <div className={`intro-container fade-in ${fadeOut ? "fade-out" : ''}`} onClick={() => {
          setFadeOut(true) 
          goToLinks()}}>
          <div className="intro-greeting-lg">
            Nice to Meet You.
          </div>
          
          <div className="intro-greeting-sm">
          Hello.
          </div>
          
          <div className="intro-name">
            I'm Manny
          </div>
    
          <div className="tap-container">
            <div className="tap-content bounce">
                <MdTouchApp />
                {' '}
                tap to begin
            </div>
          </div>
        </div>
      </Wrapper>
    </>
    )
}

const Wrapper = styled.section`
  .intro-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin-left: 4rem;
    cursor: pointer;
  }
  
  .intro-greeting-sm {
    display: none
  }
  
  .intro-greeting-lg {
    font-size: 6rem;
    font-weight: bold;
  }
  
  .intro-name {
    color: #e775fc;
    font-size: 6rem;
    font-weight: bold
  }
  
  .tap-container {
    margin-top: 2rem;
    text-align: center;
  }
  
  .tap-content {
    animation-duration: 3s;
    animation-iteration-count: infinite;
    color: #f5f5f5;
  }
  
  .bounce {
    animation-name: bounce;
    animation-timing-function: ease;
  }
  
  @keyframes bounce {
        0%   { transform: translateY(0); }
        10%  { transform: translateY(0); }
        30%  { transform: translateY(-20px); }
        50%  { transform: translateY(0); }
        57%  { transform: translateY(-7px); }
        64%  { transform: translateY(0); }
        100% { transform: translateY(0); }
    }
    
  .fade-out {
    animation: fadeOut ease .5s
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;;
    }
    100% {
      opacity: 0;
    }
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
      .intro-container {
      margin-left: 3rem;
    }
    .intro-greeting-lg {
      display: none;
    }
    .intro-greeting-sm {
      display: inline;
      font-size: 5rem;
      font-weight: bold;
    }
    .intro-name {
      color: #e775fc;
      font-size: 5rem;
      font-weight: bold;
    }
  }
  
`

export default Home
