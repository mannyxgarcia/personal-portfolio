import React from 'react'
import { Link } from 'gatsby'
import NavLinks from '../constants/links'

const Navbar = () => {
  return (
  <nav className="navbar">
        <Link to="/">
        </Link>
      <NavLinks  />
  </nav>
  )
}

export default Navbar
