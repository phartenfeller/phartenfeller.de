exports.createPages = async ({ actions, graphql }) => {
  const tagSet = new Set();

  const recipeData = await graphql(`
    {
      posts: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            tags
          }
          id
        }
      }
    }
  `);

  const pages = recipeData.data.posts.nodes;

  pages.forEach((page) => {
    page.frontmatter.tags.forEach((tag) => tagSet.add(tag));

    actions.createPage({
      path: `/blog/${page.frontmatter.slug.replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-page-template.jsx'),
      context: {
        id: page.id,
      },
    });
  });

  tagSet.forEach((tag) => {
    actions.createPage({
      path: `/blog/tags/${tag.toLowerCase().replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/blog-tag-page-template.jsx'),
      context: {
        tag,
      },
    });
  });
};
