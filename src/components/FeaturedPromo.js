import React from "react";
import { graphql } from "gatsby";
import Container from "./Container";

import { Section } from "./Styled/Section";

import "swiper/components/pagination/pagination.min.css";

import { Link, useStaticQuery } from "gatsby";

import { ButtonPrimary } from "./Styled/Button";
import { WrapperActionSection } from "./Styled/WrapperActionSection";
import PromoSliderList from "./PromoSliderList";
import { HeaderSectionStyled } from "./Styled/HeaderSection";

function FeaturedPromo() {
  const { strapi } = useStaticQuery(getFeaturedServices);

  return (
    <Section>
      <Container>
        <HeaderSectionStyled>
          Специальные предложения OGC clinic
        </HeaderSectionStyled>

        <PromoSliderList promotions={strapi.promos} />
        <WrapperActionSection>
          <div className="button-container">
            <Link to="/promo" title="Посмотреть все акции">
              <ButtonPrimary>Посмотреть все акции</ButtonPrimary>
            </Link>
          </div>
        </WrapperActionSection>
      </Container>
    </Section>
  );
}

export default FeaturedPromo;

const getFeaturedServices = graphql`
  query {
    strapi {
      promos(where: { featured: true }) {
        name
        slug
        id
        image {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
