import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import SpecialistList from "../components/SpecialistList";
import { Section } from "../components/Styled/Section";
import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";
import MarkdownArticle from "../components/MarkdownArticle";

const PageWraper = styled.div`
  .cover-wrapper {
    position: relative;

    width: 100%;
    max-height: 700px;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
      margin: 0 auto;
    }
  }

  .informations-wrapper {
    position: relative;
    margin-top: -24px;

    z-index: 1;

    @media screen and (min-width: 768px) {
      margin-top: -49px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: -69px;
    }
  }

  .content {
    ${(props) => props.theme.glassBackground};
    padding: 30px 20px;
    border-radius: 30px;

    @media screen and (min-width: 768px) {
      padding: 50px 50px;
    }
  }
`;

const Image = styled(GatsbyImage)`
  bottom: 33vh;
  top: 1.25rem;
  left: 0;
  right: 0;
  overflow: hidden;
  @media screen and (min-width: 1440px) {
    top: -5.75rem;
  }
`;

function AboutPage({ data }) {
  const { personals, aboutPage } = data.strapi;

  return (
    <Layout>
      <Seo
        title="О клинике"
        description="Информация о клинике доктора Горчаковой - OGC clinic."
      />
      <PageWraper>
        <div className="cover-wrapper">
          {aboutPage.cover.urlSharp.childImageSharp && (
            <Image
              image={aboutPage.cover.urlSharp.childImageSharp.gatsbyImageData}
              backgroundColor={`#040e18`}
              alt="Информация о клинике доктора Горчаковой - OGC clinic."
            />
          )}
        </div>
        <div className="informations-wrapper">
          <Container>
            <div className="content">
              <HeaderService title={aboutPage.title} />
              <div className="text-section">
                <MarkdownArticle article={aboutPage.description} />
              </div>
            </div>
          </Container>
        </div>
      </PageWraper>

      <Section>
        <Container>
          <HeaderService title="Специалисты клиники" />
          <SpecialistList list={personals} />
        </Container>
      </Section>
    </Layout>
  );
}

export default AboutPage;

export const query = graphql`
  query {
    strapi {
      aboutPage {
        id
        title
        description
        seo {
          meta {
            name
            content
          }
          shareImage {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1200
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          lang
          description
          title
        }
        cover {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 1920
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      personals(sort: "id") {
        avatar {
          id
          url
          mime
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 178
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        description
        id
        name
        specialty
      }
    }
  }
`;
