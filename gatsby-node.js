const path = require(`path`)
const webpack = require('webpack');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Build all documentation pages.
  const docsTemplate = path.resolve(`src/templates/doc-template.js`)
  const docsResult = await graphql(`
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
  if (docsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  docsResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: docsTemplate,
      context: {
        section: node.frontmatter.section
      }, // additional data can be passed via context
    });
  });

  // Build all cog landing pages.
  const cogTemplate = path.resolve(`src/templates/cog-template.js`)
  const cogsResult = await graphql(`
    {
      allCogRegistryJson(
        limit: 1000
      ) {
        edges {
          node {
            label
            name
          }
        }
      }
    }
  `)
  const extraResults = (await graphql(`
    {
      allDataJson(
        limit: 1000
      ) {
        nodes {
          cogs {
            img
            label
            lpLabel
            lpDescription
            name
            homepage
            useCases {
              title
              description
              steps
            }
          }
        }
      }
    }
  `)).data.allDataJson.nodes[0].cogs || []
  // Handle errors
  if (cogsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  cogsResult.data.allCogRegistryJson.edges.forEach(({ node }) => {
    createPage({
      path: `/discover-cogs/${node.name}`,
      component: cogTemplate,
      context: {
        name: node.name,
        extras: extraResults.filter(c => c.name === node.name)[0]
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
