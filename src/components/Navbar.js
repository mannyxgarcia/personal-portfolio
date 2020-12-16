import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <>
      <Wrapper>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="link">
              <Link to="/" >
              Home
              </Link>
            </li>
            <li className="link">
              <Link to="/about" >
                About
              </Link>
            </li>
            <li className="link">
              <Link to="/work" >
                Work
              </Link>
            </li>
            <li className="link">
              <Link to="/contact" >
                Contact
              </Link>
            </li>
            <button className="toggle-btn" onClick={toggle}>
              <FaBars/>
            </button>
          </ul>
        </nav>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .navbar {
  background: #3b3b3b;
  padding: 0.5rem;
  }
  
  .nav-links {
    display: flex;
    justify-content: space-around;
  }

  .link {
    color: #d8d8d8;
  }

  .link:hover {
    color: #fff;
  }
  
  .toggle-btn {
    display: none;
  }
  
  @media screen and (max-width: 700px) {
    .link {
      display: none;
    }
    
    .nav-links {
      justify-content: flex-end
    }
    
    .toggle-btn {
      display: inline;
      color: #d8d8d8;
      font-size: 1rem;
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }
  }
  
`

export default Navbar
