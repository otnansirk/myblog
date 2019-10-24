import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import RecentPost from "../components/recent-post"
import Img from 'gatsby-image';
import SEO from '../components/seo';
import GenerateTitle from '../components/CleanPath'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: recentPost } = data;
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className="content-wrapper">
        <div className="single-post-wrapper">
        <Img
          className="single-post-img"
          fluid={ post.frontmatter.thumbnail.childImageSharp.fluid }
        />
        <div className="single-post-content">
          <h2 className="title">
            { GenerateTitle(post.frontmatter.path) }
          </h2>
            <small style={{color: `#757575`, fontSize:`14px`}}>
              <label>{post.frontmatter.label}</label>&nbsp;&nbsp;&nbsp;
            </small>
            <small>
              <span><b>{post.frontmatter.author}</b></span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{post.frontmatter.date}</span>
            </small>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: post.html }} ></p>
        </div>
        </div>
        <div className="single-right-bar">
          <span className="m-left-10 title-section-sidebar">Artikel Terbaru</span>
          <div className="recent-post-wrapper single-right-tags-wrapper">
            {recentPost.edges.map(({ node }) => (
              <span key={node.id}>
                <RecentPost frontmatter={node}></RecentPost>
              </span>
            ))}
          </div>

          <span className="m-left-10 title-section-sidebar">Tags</span>
          <div className="single-right-tags-wrapper">
            <ul className="single-right-tags">
              {post.frontmatter.tags.map((tag, index) => (
                <li key={index}>
                  <small><label>{ tag }</label></small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        tags
        label
        author
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(limit:5) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          ...RecentPost
        }
      }
    }
  }
`