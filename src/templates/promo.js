import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PromoSingle from "../components/PromoSingle";
import Seo from "../components/Seo";
import { Section } from "../components/Styled/Section";

function promo({ data, location }) {
  const { promo } = data.strapi;
  

  const breadCrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": `${data.site.siteMetadata?.url}/promo`,
          name: "Акции",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${data.site.siteMetadata?.url}${location.pathname}`,
          name: `${promo.seo?.title}`,
        },
      },
    ],
  };

  return (
    <Layout>
      <Seo
        title={promo.seo.title}
        description={promo.seo.description}
        meta={promo?.meta}
        cover={promo.seo.shareImage?.urlSharp.childImageSharp.resize.src}
        breadCrumbSchema={breadCrumbSchema}
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
    site {
      siteMetadata {
        url
      }
    }
  }
`;
