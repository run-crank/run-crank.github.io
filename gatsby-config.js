module.exports = {
  siteMetadata: {
    title: `Crank - BDD Test Automation for Integrated SaaS`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5GPV46Z",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `svgo`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content-md`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
        gfm: true,
        tableOfContents: {
          pathToSlugField: 'frontmatter.path',
          maxDepth: 2,
        },
      }
    }
  ],
}
