import React from "react";
import { graphql } from "gatsby";
import Container from "./Container";

import { Section } from "./Styled/Section";
import "swiper/components/pagination/pagination.min.css";
import styled from "styled-components";
import { Link, useStaticQuery } from "gatsby";
import CategoryList from "./CategoryList";
import CategoryItem from "./CategoryItem";
import { ButtonPrimary } from "./Styled/Button";
import { WrapperActionSection } from "./Styled/WrapperActionSection";
import { HeaderSectionStyled } from "./Styled/HeaderSection";

const FeaturedContainer = styled.div`
  .swiper-container {
    padding: 10px 0;
  }

  .swiper-pagination {
    padding: 5px 0;
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.secondary};
  }
`;

function FeaturedServices() {
  const { strapi } = useStaticQuery(getFeaturedServices);

  return (
    <Section>
      <Container>
        <HeaderSectionStyled>
          Популярные процедуры OGCclinic
        </HeaderSectionStyled>

        <FeaturedContainer>
          <CategoryList>
            {strapi.services.map((service) => (
              <CategoryItem
                key={service.id}
                name={service.name}
                cover={service.cover.urlSharp.childImageSharp.gatsbyImageData}
                coverColor={service.coverColor}
                slug={`/services/${service.slug}`}
              />
            ))}
          </CategoryList>
          <WrapperActionSection>
            <div className="button-container">
              <Link to="/services" title="Все процедуры">
                <ButtonPrimary>Все процедуры</ButtonPrimary>
              </Link>
            </div>
          </WrapperActionSection>
        </FeaturedContainer>
      </Container>
    </Section>
  );
}

export default FeaturedServices;

const getFeaturedServices = graphql`
  query {
    strapi {
      services(where: { featured: true }) {
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
                width: 300
                height: 200
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
