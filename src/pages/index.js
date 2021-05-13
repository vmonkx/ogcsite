import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import Seo from "../components/Seo";

import MainAdvantages from "../components/MainAdvantages";
import LastNews from "../components/LastNews";
import FeaturedServices from "../components/FeaturedServices";
import FeaturedPromo from "../components/FeaturedPromo";

import BackgroundHero from "../components/BackgroundHero";
import LazyComponent from "../components/LazyComponent";

const IndexPage = ({ location, data }) => {
  const { hero, MainAdvantage } = data.strapi.mainPage;
  const { defaultSeo } = data.strapi.global;
  return (
    <Layout>
      <Seo
        pathname={location.pathname}
        description={defaultSeo.description}
        title={defaultSeo.title}
        lang={defaultSeo.lang}
        meta={defaultSeo?.meta}
        cover={defaultSeo?.shareImage.urlSharp.childImageSharp.resize.src}
      />

      <BackgroundHero
        image={hero.cover.urlSharp.childImageSharp.gatsbyImageData}
        title={hero.title}
        info={hero.info}
      />
      <MainAdvantages advantages={MainAdvantage} />
      <FeaturedServices />
      <FeaturedPromo />
      <LastNews />
      <LazyComponent />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    strapi {
      mainPage {
        hero {
          info
          title
          cover {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 90
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        MainAdvantage {
          content
          numbersAdvantage
          title
          id
          image {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
      global {
        siteName
        defaultSeo {
          description
          lang
          title
          shareImage {
            id
            mime
            url
            urlSharp {
              id
              childImageSharp {
                resize(width: 1200, quality: 90) {
                  src
                }
              }
            }
          }
          meta {
            name
            content
          }
        }
      }
    }
  }
`;
