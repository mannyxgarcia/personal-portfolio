import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import { Helmet } from 'react-helmet'

const Work = ({data}) => {
  const {allMdx:{nodes:work}} = data
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Wrapper>
        <Helmet>
          <style>{'body { background-color: #01cab9 }'}</style>
        </Helmet>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div className="main-container fade-in">
          {work.map(singleWork => {
            return (
              <Link key={singleWork.id} to ={`/work/${singleWork.frontmatter.slug}`} className='work-btn'>
              <div className='work-title'>{singleWork.frontmatter.title}</div>
              <div>
              {singleWork.frontmatter.subTitle}
              </div>
              </Link>
            )
          })}
        </div>
      </Wrapper>
    </>
    
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
const Wrapper = styled.section`
  .main-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem 1rem 10rem;
  }
  
  .work-title {
    font-size: 3rem;
    padding-top: 4rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .work-btn {
    transition: all 0.3s linear;
  }
  
  .work-btn:hover {
    transform: translateX(8px)
  }
  
  .fade-in {
    animation: fadeIn ease 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 810px) {
    .main-container {
      margin: 0rem 1rem 5rem 1.5rem
    }
    
    .work-btn {
      margin-bottom: 1rem;
    }
    
    .work-btn:hover {
    transform: none;
    }
    
    .work-title {
    font-size: 3rem;
    margin-top: 1.5rem;
    font-weight: bold;
    padding: 0px;
    }
    
    h1 {
    margin-top: 1rem;
    padding-top: 0px;
    }
  }
`

export default Work
