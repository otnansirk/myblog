import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const recentPost = ({ frontmatter: payload }) => {
  // console.log(payload)
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
          <h4>{payload.frontmatter.title.substring(0, 50)}...</h4>
        </div>
      </div>
    </Link>
  )
}

export const recentQuery = graphql`
  fragment RecentPost on MarkdownRemark {
    frontmatter {
      title
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