/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/* module.exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type === "StrapiArticle") {
    console.log("NODE", node.MainAdvantage)
    const newPost = {
      ...node,
      id: node.id + "-markdown",
      parent: node.id,
      children: [],
      internal: {
        type: "newPost",
        mediaType: "text/markdown",
        content: node.content,
        contentDigest: crypto
          .createHash(`md5`)
          .update(node.content || " ")
          .digest(`hex`),
      },
    }
    actions.createNode(newPost)
    actions.createParentChildLink({
      parent: node,
      child: newPost,
    })
  }
} */

/* exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  // Type definitions can be provided in SDL
  const typeDefs = `
    type CoverGradient {
      gradientStart: String!
      gradientEnd: String!
    }
  `;
  createTypes(typeDefs);
}; */

/* exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    StrapiCategory: {
      coverColor: {
        type: `CoverGradient`,
        async resolve(source, args, context, info) {
          const color = await getAverageColor(source.cover.url, { width: 50 });

          const colorEnd = [].concat(color.value.slice(0, 3), 0).join(",");
          return {
            gradientStart: color.rgba,
            gradientEnd: `rgba(${colorEnd})`,
          };
        },
      },
    },
    StrapiService: {
      coverColor: {
        type: `CoverGradient`,
        async resolve(source, args, context, info) {
          const color = await getAverageColor(source.cover.url, { width: 50 });

          const colorEnd = [].concat(color.value.slice(0, 3), 0).join(",");
          return {
            gradientStart: color.rgba,
            gradientEnd: `rgba(${colorEnd})`,
          };
        },
      },
    },
    StrapiCategoryServices: {
      coverColor: {
        type: `CoverGradient`,
        async resolve(source, args, context, info) {
          const color = await getAverageColor(source.cover.url, { width: 50 });

          const colorEnd = [].concat(color.value.slice(0, 3), 0).join(",");
          return {
            gradientStart: color.rgba,
            gradientEnd: `rgba(${colorEnd})`,
          };
        },
      },
    },
  });
};
 */
const path = require(`path`);

async function turnArticleIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      strapi {
        articlesConnection {
          aggregate {
            count
            totalCount
          }
        }
      }
    }
  `);

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(
    data.strapi.articlesConnection.aggregate.totalCount / pageSize
  );

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve(`./src/pages/blog.js`),

      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const servicePageTemplate = path.resolve(`src/templates/service.js`);
  const categoryPageTemplate = path.resolve(`src/templates/category.js`);
  const promoPageTemplate = path.resolve(`src/templates/promo.js`);
  const blogPageTemplate = path.resolve(`src/templates/articleBlog.js`);
  const docPageTemplate = path.resolve(`src/templates/docPage.js`);

  const { data } = await graphql(`
    query {
      strapi {
        services {
          id
          slug
          name
        }
        categories {
          id
          name
          slug
        }
        articles {
          id
          slug
          title
        }
        promos {
          id
          name
          slug
        }
        docs {
          id
          slug
          title
        }
      }
    }
  `);

  if (data.errors) {
    throw new Error(data.errors);
  }

  const categories = data.strapi.categories;
  const services = data.strapi.services;
  const promos = data.strapi.promos;
  const articles = data.strapi.articles;
  const docs = data.strapi.docs;

  categories.forEach((edge) => {
    createPage({
      path: `/category/${edge.slug}`,
      component: categoryPageTemplate,
      context: {
        id: edge.id,
        slug: edge.slug,
        title: edge.name,
      },
    });
  });

  services.forEach((edge) => {
    createPage({
      path: `/services/${edge.slug}`,
      component: servicePageTemplate,
      context: {
        id: edge.id,
        slug: edge.slug,
        title: edge.name,
      },
    });
  });

  promos.forEach((edge) => {
    createPage({
      path: `/promo/${edge.slug}`,
      component: promoPageTemplate,
      context: {
        id: edge.id,
        slug: edge.slug,
        title: edge.name,
      },
    });
  });

  articles.forEach((edge) => {
    createPage({
      path: `/blog/${edge.slug}`,
      component: blogPageTemplate,
      context: {
        id: edge.id,
        slug: edge.slug,
        title: edge.title,
      },
    });
  });

  docs.forEach((edge) => {
    createPage({
      path: `/docs/${edge.slug}`,
      component: docPageTemplate,
      context: {
        id: edge.id,
        slug: edge.slug,
        title: edge.title,
      },
    });
  });
};
