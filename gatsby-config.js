module.exports = {
  siteMetadata: {
    baseUrl: `https://distracted-euclid-5f96b2.netlify.com/`,
    title: `Kodingmu`,
    description: `Belajar Koding Gakpake Ribet.`,
    author: `krisnanto`,
    topic: [
      `Belajar Laravel`,
      `Belajar Koding`,
      `Atom Editor`,
      `Belajar Codeigniter`,
      `Belajar Jekyll`,
      `Belajar Flutter`,
      `Belajar JavaScript`,
      `Belajar Laravel`,
      `CI 4 Codeigniter`,
      `Codeigniter 4`,
      `Belajar CSS`,
      `Belajar Git`,
      `Belajar Slim`,
      `VS Code Editor`
    ]
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `upload`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              destinationDir: 'upload',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`
  ],
}
