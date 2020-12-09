import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const WorkTemplate = ({data}) => {
  const {mdx:{frontmatter:{title, subTitle, date},body,}} = data
  const background = document.querySelector('body')
  return (
    <React.Fragment>
      {background.setAttribute('style', 'background: #f5f5f5')}
      <Navbar></Navbar>
      <Wrapper>
        <div className='container'>
          <div className="title">
            <h1>{title}</h1>
            {subTitle}
          </div>
          <div className="content">
            <MDXRenderer>{body}</MDXRenderer>
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
  }
  
  .title {
    align-self: flex-start;
  }
  @media only screen and (min-width: 700px) {
    .container {
      margin: 1rem 4rem 1rem 10rem;
    }
    .title {
      height: 70vh
    }
    .content {
      padding: 0 8rem 0 4rem 
    }
  }
  
  @media only screen and (max-width: 700px) {
    .container {
      margin: 1.5rem;
    }
    .title {
      height: 60vh
    }
  }
  
  h2{
    font-size: 1.5rem
  }
`

export default WorkTemplate
