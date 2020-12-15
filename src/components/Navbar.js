import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navbar = () => {
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
`

export default Navbar
