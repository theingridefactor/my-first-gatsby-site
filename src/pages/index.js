import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import { graphql } from 'gatsby';

import Layout from '../components/layout'

export const query = graphql`query MyQuery {
  allAirtable {
    nodes {
      data {
        Link
        Notes
        Title
      }
    }
  }
}`

// markup
const IndexPage =
  ({ data }) => {
    return (
      <div>
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
      </Layout>
      {data.allAirtable.nodes.map((node) => 
        <div>
          <p>{node.data.Title}</p>
          <p>{node.data.Notes} <a href={node.data.Link}>>>>> Go Now</a></p>
        </div>)}
        </div>
    )
  }

export default IndexPage
