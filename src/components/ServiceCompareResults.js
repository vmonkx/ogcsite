import React from "react";
import styled from "styled-components";
import CompareItem from "./CompareItem";
import { getSrc } from "gatsby-plugin-image";
import { HeaderSectionStyled } from "./Styled/HeaderSection";
import { Section } from "./Styled/Section";

const CompareItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  grid-gap: 25px;
  justify-items: center;
  align-items: end;
`;

function ServiceCompareResults({ content, title }) {
  return (
    <Section>
      <HeaderSectionStyled>{content.title}</HeaderSectionStyled>
      <CompareItemContainer>
        {content.CompareItem.map((item) => (
          <CompareItem
            key={item.id}
            before={getSrc(item.before.urlSharp.childImageSharp.gatsbyImageData)}
            after={getSrc(item.after.urlSharp.childImageSharp.gatsbyImageData)}
            title={title}
            description={item.description}
          />
        ))}
      </CompareItemContainer>
    </Section>
  );
}

export default ServiceCompareResults;
