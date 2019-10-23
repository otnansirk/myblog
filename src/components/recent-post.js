import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import GenerateTitle from './CleanPath'

const recentPost = ({ frontmatter: payload }) => {
  return (
    <Link 
      to={payload.frontmatter.path}
    >
      <div className="recent-post">
        <Img
          className="recent-post-img"
          fluid={payload.frontmatter.thumbnail.childImageSharp.fluid}
        />
        <div className="recent-post-body">
          <h4>
            { GenerateTitle(payload.frontmatter.path) }
          </h4>
          <p>{ payload.excerpt.substring(0, 88) }...</p>
        </div>
      </div>
    </Link>
  )
}

export const recentQuery = graphql`
  fragment RecentPost on MarkdownRemark {
    frontmatter {
      date
      path
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default recentPost