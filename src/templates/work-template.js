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
          <div className="title">
            <h1>{title}</h1>
            <div className="subTitle">{subTitle}</div>
          </div>
          <div className='img'>
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
  .title {
    align-self: flex-start;
  }
  .subTitle {
    padding-bottom: 1rem
  }
  .img {
    align-self: flex-start;
  }
  .content {
    font-size: 1.2rem;
    line-height: 2.1rem;
    color: #494949
  }
  a{
    color: blue
  }
  @media only screen and (min-width: 700px) {
    .container {
      margin: 5rem 4rem 1rem 10rem;
      
    }
    .title {
      margin-bottom: 30vh;
    }
    .content {
      padding: 4rem 8rem 0 4rem;
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
  
  @media only screen and (max-width: 825px) {
    .container {
      margin: 1.5rem;
    }
    .title {
      padding-bottom: 1rem
    }
    .img {
      width: 90vw;
      margin-bottom: 3rem
    }
  }
  
  h2{
    font-size: 2rem
  }
`

export default WorkTemplate
