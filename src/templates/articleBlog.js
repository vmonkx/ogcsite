import React from "react";
import { graphql } from "gatsby";
import ArticleBlog from "../components/ArticleBlog";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { getSrc } from "gatsby-plugin-image";

function ArticleBlogTemplate({ data, pageContext, location }) {
  const { article } = data.strapi;

  const breadCrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": `${data.site.siteMetadata?.url}/blog`,
          name: "Новости клиники",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${data.site.siteMetadata?.url}${location.pathname}`,
          name: `${article.title}`,
        },
      },
    ],
  };

  return (
    <Layout>
      <Seo
        title={pageContext.title}
        cover={getSrc(article.image.urlSharp.childImageSharp.gatsbyImageData)}
        description={article.description}
        breadCrumbSchema={breadCrumbSchema}
        ogtype="article"
      />

      <ArticleBlog article={article} />
    </Layout>
  );
}

export default ArticleBlogTemplate;

export const query = graphql`
  query ($id: ID!) {
    strapi {
      article(id: $id) {
        content
        description
        id
        slug
        title
        image {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                aspectRatio: 1.7
                transformOptions: {
                  fit: CONTAIN,
                  
                }
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        personal {
          description
          specialty
          name
          cover {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 300
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`;
