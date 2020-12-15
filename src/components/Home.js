import React from 'react'
import { MdTouchApp } from "react-icons/md"
import styled from 'styled-components'

const Home = () => {
  const background = document.querySelector('body')
  return (
    <>
      <Wrapper>
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
    
          <div className="intro-tap">
            <MdTouchApp className="pointer-icon"></MdTouchApp>
            {' '}
            tap to begin
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
  
  .intro-tap {
    margin-top: 2rem;
    text-align: center;
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
