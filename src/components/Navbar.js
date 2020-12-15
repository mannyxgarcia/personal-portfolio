import React from 'react'
import { Link } from 'gatsby'
import NavLinks from '../constants/links'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <nav className="navbar">
          <Link to="/"></Link>
          <NavLinks  />
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
`

export default Navbar
