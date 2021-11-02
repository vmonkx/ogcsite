/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import logo from "../images/logonew.svg";

function Seo({ description, lang, meta, title, cover, breadCrumbSchema }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            locale
            telephone
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const defaultLang = lang || site.siteMetadata?.lang;

  const url = site.siteMetadata?.url;
  const siteUrl = site.siteMetadata?.url + pathname;
  const pageTitle = title || site.siteMetadata?.title;

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${defaultTitle}`,
    logo: `${url}${logo}`,
    url: `${url}`,
    telephone: `${site.siteMetadata.telephone}`,
    sameAs: [
      "https://www.instagram.com/ogcclinic/",
      "https://www.youtube.com/channel/UCImB6JGxRVEkkBW1WhzOVUw",
    ],
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: defaultLang,
      }}
      title={pageTitle}
      link={[
        {
          rel: "canonical",
          key: siteUrl,
          href: siteUrl,
        },
        {
          rel: "image_src",
          href: `${url}${cover}`,
        },
      ]}
      titleTemplate={pageTitle ? `%s - ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
          itemprop: "name",
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.description || description,
        },
        {
          property: `og:description`,
          content: metaDescription,
          itemprop: "description",
        },
        {
          property: `og:image`,
          content: `${url}${cover}`,
        },
        {
          property: `og:image:width`,
          content: 1280,
        },
        {
          property: `og:image:height`,
          content: 720,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: site.siteMetadata.locale,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:image`,
          content: `${url}${cover}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "yandex-verification",
          content: "757a2d9dadfc049e",
        },
        {
          name: "theme-color",
          content: "#e30277",
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      {breadCrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadCrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

export default Seo;
