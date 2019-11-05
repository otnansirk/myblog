import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = ({ data }) => (
  <Layout>
    <Jumbotron className={'jumbotron'}></Jumbotron>
    <center>
      <br />
      <h2>Semua Artikel</h2>
    </center>
    <SEO title="Home" />
    <div className="post-content">
      <div className="post-wrap">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Post frontmatter={node} />
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          ...IndexPostFragment
        }
      }
    }
  }
`

export default IndexPage
