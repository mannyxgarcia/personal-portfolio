import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
// ...GatsbyImageSharpFluid
const Work = ({data}) => {
  const {allMdx:{nodes:work}} = data
  console.log(work)
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #01cab9')}
      <Navbar></Navbar>
      <div className="main-container">
        {work.map(singleWork => {
          return (
            <Link key={singleWork.id} to ={`/work/${singleWork.frontmatter.slug}`}>
            <div className='work-title'>{singleWork.frontmatter.title}</div>
            {singleWork.frontmatter.subTitle}
            </Link>
          )
        })}
        </div>
    </React.Fragment>
    
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM YYYY")
          slug
          title
          subTitle
        }
        id
      }
    }
  }
`

export default Work
