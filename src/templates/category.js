import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import CategoryList from "../components/CategoryList";
import CategoryItem from "../components/CategoryItem";
import Layout from "../components/layout";

import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

import NavigationBack from "../components/NavigationBack";

function CategoryPageTemplate({ pageContext, data }) {
  const { category } = data.strapi;

  return (
    <Layout>
      <Seo
        title={category.seo?.title}
        description={category.seo?.description}
        meta={category.seo?.meta}
        cover={category.seo?.shareImage.urlSharp.childImageSharp.resize.src}
      />
      <Section>
        <Container>
          <NavigationBack to="/services" title="услугам" />
          <HeaderService title={pageContext.title} />
          <CategoryList>
            {category.services.map((service) => (
              <CategoryItem
                key={service.id}
                name={service.name}
                cover={service.cover.urlSharp.childImageSharp.gatsbyImageData}
                coverColor={service.coverColor}
                slug={`/services/${service.slug}`}
              />
            ))}
          </CategoryList>
        </Container>
      </Section>
    </Layout>
  );
}

export default CategoryPageTemplate;

export const query = graphql`
  query ($id: ID!) {
    strapi {
      category(id: $id) {
        id
        name
        description
        slug
        services {
          id
          slug
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
                  aspectRatio: 1.6
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          coverColor {
            gradientStart
            gradientEnd
          }
        }
        seo {
          description
          title
          shareImage {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                resize(width: 1200, quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
