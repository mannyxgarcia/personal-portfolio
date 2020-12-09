import React from "react"
import { Link } from "gatsby"
const Links = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
    {background.setAttribute('style', 'background: #000')}
    <ul className="page-links">
      <li className="link-about">
        <Link to="/about" >
          About
        </Link>
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
    </React.Fragment>
  )
}

export default Links
