import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Container from "./Container";

import InstagramList from "./InstagramList";
import { ButtonPrimary } from "./Styled/Button";
import { HeaderSectionStyled } from "./Styled/HeaderSection";
import { Section } from "./Styled/Section";
import { WrapperActionSection } from "./Styled/WrapperActionSection";

function InstagramSection() {
  const { allInstaNode } = useStaticQuery(query);
  return (
    <Section>
      <Container>
        <HeaderSectionStyled>OGC clinic в социальных сетях</HeaderSectionStyled>
        <InstagramList posts={allInstaNode.edges} />
        <WrapperActionSection>
          <div className="button-container">
            <a
              href="https://www.instagram.com/ogcclinic/"
              target="_blank"
              rel="noopener noreferrer"
              title="Подписаться"
            >
              <ButtonPrimary>Подписаться</ButtonPrimary>
            </a>
          </div>
        </WrapperActionSection>
      </Container>
    </Section>
  );
}

export default InstagramSection;

const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  }
`;
