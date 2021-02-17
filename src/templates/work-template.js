import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Image from 'gatsby-image'
import Sidebar from '../components/Sidebar'
import { Helmet } from 'react-helmet'

const WorkTemplate = ({data}) => {
  const {mdx:{frontmatter:{title, subTitle, date, image},body,}} = data
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <React.Fragment>
      <Helmet>
        <style>{'body { background-color: #f5f5f5 }'}</style>
      </Helmet>
      <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      <Wrapper>
        <div className='container fade-in'>
          <div className='img'>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="subTitle">{subTitle}</div>
            <Image fluid={image.childImageSharp.fluid}/>
          </div>
          <div className="content">
            <div className="body">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export const query = graphql`
query GetSingleWork($slug: String) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      subTitle
      date(formatString: "MMMM YYYY")
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    body
  }
}
`
const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    padding-bottom: 5rem
  }
  .title{
    
  }
  .subTitle {
    padding-bottom: 5rem
  }

  .content {
    font-size: 1.2rem;
    line-height: 2.1rem;
    color: #494949;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  a{
    color: blue
  }
  @media only screen and (min-width: 700px) {
    .container {
      margin-bottom: 1rem;
    }
    .title {
      /* margin-bottom: 10vh; */
    }
    .content {
      padding: 0rem 4rem 0 4rem;
      display: flex;
      flex-direction: column;
      align-items: center
    }
    .img{
      width: 80vw;
    }
    .body{
      width: 80%
    }
  }
  
  .fade-in {
    animation: fadeIn ease 2s;
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
    /* .container {
      margin: 0 1.5rem 1.5rem 1.5rem;
    } */
    .title {
      /* padding-bottom: 1rem */
    }
    .img {
      width: 90vw;
      margin-bottom: 3rem
    }
    
    h1 {
      margin-top: 1.5rem;
      padding-top: 0;
    }
  }
  
  h2{
    font-size: 2rem
  }
`

export default WorkTemplate
