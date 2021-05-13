import React from "react"
import {GatsbyImage} from "gatsby-plugin-image"

import styled from "styled-components"
import NumberedItem from "./NumberedItem"
import { HeaderSectionStyled } from "./Styled/HeaderSection"
import { Section } from "./Styled/Section"



const NumberContainer = styled.div`
  display: flex;
  background: #fdecf0;
  
  border-radius: 30px;
  margin-top: 80px;

  .row-wrapper {
    padding: 45px 40px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    grid-column-gap: 1rem;
    justify-items: center;

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .content-image {
    grid-row: 1/3;
    grid-column: 1/3;
    position: relative;
    min-height: 190px;
    width: 100%;

    @media only screen and (min-width: 734px) {
      grid-row: 1/3;
      grid-column: 1;
      min-height: 170px;
    }

    @media screen and (min-width: 1440px) {
    }
  }

  .image-wrap {
    position: absolute;
    top: -80px;
    left: 0px;
    width: 100%;
    border-radius: 30px;

    @media only screen and (min-width: 500px) {
      width: 70%;
    }

    @media only screen and (min-width: 734px) {
      left: -10px;
      top: -80px;
      width: 90%;
    }

    @media only screen and (min-width: 1024px) {
      left: 0px;
      top: -100px;
      width: 80%;
    }

    @media screen and (min-width: 1440px) {
      top: -100px;
      left: 0px;
      width: 90%;
    }
  }
`

function ServiceAdvantage({ content }) {
  return (
    <Section>
      <HeaderSectionStyled>{content.title}</HeaderSectionStyled>
      <NumberContainer>
        <div className="row-wrapper">
          <div className="content-image">
            <div className="image-wrap">
              <GatsbyImage image={content.image.urlSharp.childImageSharp.gatsbyImageData} alt={content.title}/>
            </div>
          </div>

          {content.listAdvantage.map((list, index) => (
            <NumberedItem key={list.id} header={list.text} index={index + 1} />
          ))}
        </div>
      </NumberContainer>
    </Section>
  )
}

export default ServiceAdvantage


