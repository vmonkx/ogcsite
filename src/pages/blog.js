import React from "react";
import { graphql } from "gatsby";
import ArticleList from "../components/ArticleList";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";
import Pagination from "../components/Pagination";

function BlogPage({ data, pageContext }) {
  const { aggregate, values } = data.strapi.articlesConnection;

  return (
    <Layout>
      <Seo title="Блог OGC clinic" />
      <Section>
        <Container>
          <HeaderService title="Блог" />
          <ArticleList articles={values} />
          <Pagination
            pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
            totalCount={aggregate.totalCount}
            currentPage={pageContext.currentPage || 1}
            skip={pageContext.skip}
            base="/blog"
          />
        </Container>
      </Section>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query ($start: Int = 0, $pageSize: Int = 2) {
    strapi {
      articlesConnection(limit: $pageSize, start: $start) {
        aggregate {
          totalCount
        }
        values {
          id
          description
          content
          slug
          title
          published_at
          image {
            id
            url
            mime
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 600
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          personal {
            name
            specialty
            cover {
              id
              mime
              url
              urlSharp {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 200
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
