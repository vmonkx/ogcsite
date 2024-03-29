import React from "react";
import styled from "styled-components";

import NumberedItem from "./NumberedItem";

import { GatsbyImage } from "gatsby-plugin-image";

import quoteImg from "../images/quoteBright.svg";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

const AdvantageContainer = styled.div`
  margin: 52px 0;
  @media screen and (min-width: 768px) {
    margin: 72px 0;
  }
`;

const AdvantageGrid = styled.div`
  display: grid;
  max-width: 2560px;
  margin: auto;
  grid-template-columns: repeat(24, 1fr);
  ${(props) =>
    props.position === "right"
      ? `grid-template-areas:
    "a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0"
    "b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0";`
      : `grid-template-areas: "a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0"
"b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0";`}

  row-gap: 20px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(24, 1fr);

    ${(props) =>
      props.position === "right"
        ? `grid-template-areas: "a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0";`
        : `grid-template-areas: "b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 b0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0 a0";`}
  }
`;

const AdvantageContent = styled.div`
  grid-area: b0 / b0 / b0 / b0;

  overflow: visible;
`;

const AdvantageImage = styled.div`
  grid-area: a0 / a0 / a0 / a0;

  overflow: visible;

  @media (min-width: 1600px) {
    ${(props) =>
      props.position !== "right"
        ? `padding-right: 12.33vw;`
        : `padding-left: 12.33vw;`}
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  display: flex;
  height: 100%;
`;
const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 4.16vw;
  padding-right: 4.16vw;

  @media screen and (min-width: 768px) {
    ${(props) =>
      props.position !== "left"
        ? `padding-left: 4.16vw;
  
  padding-right: 3.33vw;
  `
        : `padding-right: 4.16vw;
padding-left: 3.33vw;
  `}
  }

  @media screen and (min-width: 1024px) {
    ${(props) =>
      props.position !== "left"
        ? `padding-left: 4.16vw;
  
  padding-right: 12.33vw;
  `
        : `padding-right: 4.16vw;
padding-left: 12.33vw;
  `}
  }
`;

const HeaderMain = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.secondary};
  ${(props) => props.theme.primaryTextGradient};
`;

const ChildWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

const NumberWrapper = styled.div`
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  width: 100%;
  ${(props) =>
    `border-top-${props.position}-radius: 30px;
  border-bottom-${props.position}-radius: 30px;`}
  will-change: transform;
  overflow: hidden;
`;

const TextQuote = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media screen and (min-width: 1440px) {
    p {
      font-size: 1.7rem;
    }
  }
`;

const renderers = {
  blockquote: (value) => {
    return <TextQuote img={quoteImg}>{value.children}</TextQuote>;
  },
};

function MainAdvantageItem({ image, title, content, numbers, textPosition }) {
  return (
    <AdvantageContainer>
      <AdvantageGrid position={textPosition}>
        <AdvantageContent position={textPosition}>
          <ContentWrapper>
            <ChildContainer position={textPosition}>
              <ChildWrapper>
                <HeaderMain>{title}</HeaderMain>
              </ChildWrapper>
              <ChildWrapper>
                {numbers && (
                  <NumberWrapper>
                    {numbers.map((num, index) => (
                      <NumberedItem
                        key={index}
                        index={num.number}
                        header={num.descr}
                      />
                    ))}
                  </NumberWrapper>
                )}
                {content && (
                  <ReactMarkdown components={renderers} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
                )}
              </ChildWrapper>
            </ChildContainer>
          </ContentWrapper>
        </AdvantageContent>
        <AdvantageImage position={textPosition}>
          <ImageWrapper position={textPosition}>
            <GatsbyImage image={image} alt={title} />
          </ImageWrapper>
        </AdvantageImage>
      </AdvantageGrid>
    </AdvantageContainer>
  );
}

export default MainAdvantageItem;
