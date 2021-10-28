import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "../components/Container";
import HeaderService from "../components/HeaderService";
import ContentService from "../components/ContentService";
import ServiceAdvantage from "../components/ServiceAdvantage";
import ServiceCompareResults from "../components/ServiceCompareResults";
import { Section } from "../components/Styled/Section";
import QuickOrder from "../components/QuickOrder";

import ServiceVideoSection from "../components/ServiceVideoSection";
import ServicePrice from "../components/ServicePrice";
import ServiceResults from "../components/ServiceResults";
import Seo from "../components/Seo";

import NavigationBack from "../components/NavigationBack";

function ServicePageTemplate({ location, pageContext, data }) {
  const { service } = data.strapi;

  const breadCrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": `${data.site.siteMetadata?.url}/services`,
          name: "Услуги",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${data.site.siteMetadata?.url}${location.pathname}`,
          name: `${service.seo?.title}`,
        },
      },
    ],
  };

  return (
    <Layout>
      <Seo
        title={service.seo?.title}
        description={service.seo?.description}
        lang={service.seo?.lang}
        cover={service.seo?.shareImage?.urlSharp.childImageSharp.resize.src}
        meta={service.seo?.meta}
        pathname={location.pathname}
        breadCrumbSchema={breadCrumbSchema}
      />

      <Section>
        <Container>
          <NavigationBack
            to={`/category/${service.category.slug}`}
            title={service.category.name}
          />
          <HeaderService title={service.name} />
          <ContentService content={service}></ContentService>

          {service.advantage && (
            <ServiceAdvantage content={service.advantage} />
          )}

          {service.compare && (
            <ServiceCompareResults
              content={service.compare}
              title={service.name}
            />
          )}
          {service.resultsSection && (
            <ServiceResults content={service.resultsSection} />
          )}
          {service.video?.map((video, index) => (
            <ServiceVideoSection
              key={video.id}
              content={video}
              right={index % 2 !== 0}
            />
          ))}

          {service.prices && <ServicePrice content={service.prices} />}

          <QuickOrder />
        </Container>
      </Section>
    </Layout>
  );
}

export default ServicePageTemplate;

export const query = graphql`
  query ($id: ID!) {
    strapi {
      service(id: $id) {
        id
        name
        cover {
          id
          mime
          url
          urlSharp {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 500
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }

        article {
          id
          subtitle
          text
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
        }
        advantage {
          listAdvantage {
            id
            text
          }
          title
          image {
            id
            mime
            url
            urlSharp {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 400
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        compare {
          title
          CompareItem {
            description
            id
            after {
              id
              mime
              url
              urlSharp {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 600
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            before {
              id
              mime
              url
              urlSharp {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 600
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        video {
          description
          id
          title
          url
        }
        resultsSection {
          title
          resultItem {
            description
            id
            image {
              id
              mime
              url
              urlSharp {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 600
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        prices {
          title
          priceItem {
            description
            code
            duration
            id
            name
            price
          }
          id
        }

        seo {
          lang
          description
          title
          meta {
            content
            name
          }
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

        category {
          name
          slug
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
