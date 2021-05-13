import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";

import CategoryList from "../components/CategoryList";
import Seo from "../components/Seo";
import CategoryItem from "../components/CategoryItem";
import { Section } from "../components/Styled/Section";

function ServicesPage({ data }) {
  const {categories} = data.strapi;

  return (
    <Layout>
      <Seo
        title="Наши услуги"
        description="Широкий перечень услуг косметологии, дермтологии, пластической хиургии, уникальные авторские методики, лабораторные исследования."
      />

      <Section>
        <Container>
          <HeaderService title="Наши услуги" />
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                name={category.name}
                cover={category.cover.urlSharp.childImageSharp.gatsbyImageData}
                coverColor={category.coverColor}
                slug={`/category/${category.slug}`}
              />
            ))}
          </CategoryList>
        </Container>
      </Section>
    </Layout>
  );
}

export default ServicesPage;

export const query = graphql`
  query {
    strapi {
      categories(sort: "name:asc") {
        id
        name
        description
        slug
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
    }
  }
`;
