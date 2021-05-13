import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";
import PromoList from "../components/PromoList";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

function promo({ data }) {
  const { promos } = data.strapi;
  return (
    <Layout>
      <Seo
        title="Специальные предложения"
        description="Специальные предложения, акции для пациентов клиники доктора Горчаковой - OGC clinic"
      />
      <Section>
        <Container>
          <HeaderService title="Акции" />
          <PromoList promos={promos} />
        </Container>
      </Section>
    </Layout>
  );
}

export default promo;

export const query = graphql`
  query {
    strapi {
      promos(sort: "order:asc") {
        name
        slug
        id
        description
        image {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 600
              )
            }
          }
        }
      }
    }
  }
`;
