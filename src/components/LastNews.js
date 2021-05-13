import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ArticleList from "./ArticleList";
import Container from "./Container";

import { ButtonPrimary } from "./Styled/Button";
import { Section } from "./Styled/Section";
import { HeaderSectionStyled } from "./Styled/HeaderSection";

const WrapperAction = styled.div`
  display: flex;
  justify-content: center;
  .button-container {
    display: block;
  }
`;

function LastNews() {
  const { strapi } = useStaticQuery(query);

  return (
    <Section>
      <Container>
        <HeaderSectionStyled>Последнии новости OGCclinic</HeaderSectionStyled>
        <ArticleList articles={strapi.articles} />
        <WrapperAction>
          <div className="button-container">
            <Link to="/blog" title="Все новости">
              <ButtonPrimary>Все новости</ButtonPrimary>
            </Link>
          </div>
        </WrapperAction>
      </Container>
    </Section>
  );
}

export default LastNews;

const query = graphql`
  query {
    strapi {
      articles(sort: "published_at:desc", limit: 3) {
        id
        description
        content
        slug
        title
        published_at
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
`;
