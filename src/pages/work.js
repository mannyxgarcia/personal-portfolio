import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'

const Work = ({data}) => {
  const {allMdx:{nodes:work}} = data
  const [isOpen, setIsOpen] = React.useState(false)
  const background = document.querySelector('body')
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Wrapper>
        {background.setAttribute('style', 'background: #01cab9')}
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
  
  @media only screen and (max-width: 700px) {
    .main-container {
      margin: 3rem 1rem 1.5rem 1.5rem
    }
    
    .work-title {
    font-size: 2.5rem;
    padding-top: 4rem;
    margin-bottom: 1rem;
    font-weight: bold;
    }
  }
`

export default Work
