import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "./Container";
import { Section } from "./Styled/Section";
import MarkdownArticle from "./MarkdownArticle";
import Video from "./Video";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 70px 30px;
  box-shadow: 0 0 33px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const BannerWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 1rem;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`;

const HeaderArticle = styled.h1`
  font-size: 2.1rem;
  line-height: 1;
  text-align: center;

  ${(props) => props.theme.primaryTextGradient};
  margin: 0;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const DescrArticle = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondary};
  text-align: center;
  ${(props) => props.theme.secondaryTextGradient};
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;

  @media screen and (min-width: 540px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    margin: 3rem 0;
  }

  .author-image {
    padding-left: 15px;
    border-radius: 50%;

    flex-basis: 40%;
    flex-shrink: 0;

    transition: transform 2.2s cubic-bezier(0.14, 1.12, 0.67, 0.99) 0s;

    .gatsby-image-wrapper {
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      border-radius: 50%;
    }

    @media screen and (min-width: 768px) {
      flex-basis: 20%;
    }

    @media screen and (min-width: 1024px) {
      flex-basis: 15%;
    }
  }

  .author-title {
    margin-left: 10px;
    .author-name {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .author-spec {
      font-size: 0.8rem;
      color: ${(props) => props.theme.secondary};
    }

    @media screen and (min-width: 768px) {
      margin-left: 1rem;

      .author-name {
        font-size: 1.3rem;
        font-weight: 700;
      }

      .author-spec {
        font-size: 1rem;
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;

function ArticleBlog({ article }) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <HeaderArticle>{article.title}</HeaderArticle>
          <DescrArticle>{article.description}</DescrArticle>
          <AuthorWrapper>
            <div className="author-image">
              <GatsbyImage
                image={
                  article.personal.cover?.urlSharp.childImageSharp
                    .gatsbyImageData
                }
                alt={`Автор статьи ${article.personal.name}`}
              />
            </div>
            <div className="author-title">
              <p className="author-name">{article.personal.name}</p>
              <p className="author-spec">{article.personal.specialty}</p>
            </div>
          </AuthorWrapper>
          <BannerWrapper>
            <GatsbyImage
              image={article.image.urlSharp.childImageSharp.gatsbyImageData}
              
              alt={`Статья - "${article.title}"`}
            />
          </BannerWrapper>

          <MarkdownArticle article={article.content} />
          {article.video && (
            <Video url={article.video.url} title={article.video.title} />
          )}
        </Wrapper>
      </Container>
    </Section>
  );
}

export default ArticleBlog;
