import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Links = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
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

export default Links
