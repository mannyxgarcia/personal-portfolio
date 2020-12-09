/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
