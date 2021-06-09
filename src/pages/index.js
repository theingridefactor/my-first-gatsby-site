import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import Layout from '../components/layout'

// markup
const IndexPage =
  () => {
    return (
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
      </Layout>
    )
  }

export default IndexPage
