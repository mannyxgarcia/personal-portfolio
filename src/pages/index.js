import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
// ...GatsbyImageSharpFluid
const IndexPage = () => {
  return (
  <Layout>
    <Hero />
  </Layout>
  )
}

export default IndexPage
