import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = () => {
  return (
    <ul className="social-icon-container">
      <li>
        <a href="https://www.linkedin.com/in/mannyxgarcia/">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://github.com/mannyxgarcia">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
