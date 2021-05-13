import React from "react";
import { graphql } from "gatsby";
import ArticleBlog from "../components/ArticleBlog";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { getSrc } from "gatsby-plugin-image";

function ArticleBlogTemplate({ data, pageContext }) {
  const { article } = data.strapi;
  return (
    <Layout>
      <Seo
        title={pageContext.title}
        cover={getSrc(article.image.urlSharp.childImageSharp.gatsbyImageData)}
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
                width: 1920
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
  }
`;
