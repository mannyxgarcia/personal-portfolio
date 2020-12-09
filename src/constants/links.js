import React from "react"
import { Link } from "gatsby"
const Links = () => {
  return (
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
  )
}

export default Links
