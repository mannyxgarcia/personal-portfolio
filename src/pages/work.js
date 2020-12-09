import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
// ...GatsbyImageSharpFluid
const Work = () => {
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #01cab9')}
      <Navbar></Navbar>
      <div className="work-container">

          <Link to ="/">
          <div className='work-title'>my-MUI</div>
          info about my-mui
          </Link>
          <Link to ="/">
          <div className='work-title'>Green Shopper</div>
          info about green shopper
          </Link>
          <Link to ="/">
          <div className='work-title'>Homestead Studios</div>
          info about homestead studios
          </Link>
        </div>
    </React.Fragment>
    
    )
}

export default Work
