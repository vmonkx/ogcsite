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

function Seo({ description, lang, meta, title, cover }) {
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
          key: "ogtitle",
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.description || description,
          key: "ogsitename",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: `${url}${cover}`,
        },
        {
          name: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:locale`,
          content: site.siteMetadata.locale,
        },
        {
          name: `twitter:card`,
          content: `summary`,
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
      ].concat(meta)}
    />
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
