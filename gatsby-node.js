const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`{
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ){
      edges {
        node {
          html
          id
          frontmatter {
            path
            tags
          }
        }
      }
    }
  }`)
    .then(res => {
      if (res.errors) {
        return Promise.reject()
      }

      res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        })
      });
    })
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
