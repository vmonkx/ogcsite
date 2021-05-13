import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PromoSingle from "../components/PromoSingle";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

function promo({data}) {
  const { promo } = data.strapi;

  return (
    <Layout>
      <Seo
        title={promo.seo.title}
        description={promo.seo.description}
        meta={promo?.meta}
        cover={promo.seo.shareImage?.urlSharp.childImageSharp.resize.src}
      />
      <Section>
        <PromoSingle promo={promo} />
      </Section>
    </Layout>
  );
}

export default promo;

export const query = graphql`
  query ($id: ID!) {
    strapi {
      promo(id: $id) {
        name
        slug
        id
        description
        article
        image {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                aspectRatio: 1
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        seo {
          description
          title
          shareImage {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                resize(width: 1200, quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
