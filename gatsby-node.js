const path = require(`path`)
const webpack = require('webpack');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const docsTemplate = path.resolve(`src/templates/doc-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              section
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: docsTemplate,
      context: {
        section: node.frontmatter.section
      }, // additional data can be passed via context
    });
  });
}

/**
 * Required to successfully `gatsby build`, since we're importing bootstrap,
 * jQuery, and popper.js dependencines in `src/components/header/index.js`.
 */
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
      }),
    ],
  };
  if (stage === 'build-html') {
    config.module = {
      rules: [
        {
          test: require.resolve('bootstrap'),
          use: loaders.null(),
        },
        {
          test: require.resolve('jquery'),
          use: loaders.null(),
        },
      ],
    };
  }
  actions.setWebpackConfig(config);
};
