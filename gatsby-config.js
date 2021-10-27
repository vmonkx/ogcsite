require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Клиника доктора Горчаковой - OGC clinic`,
    description: `OGC clinic—косметологическая клиника экспертного уровня в Казани,мировые инъекционные и аппаратные технологии премиум-класса (лифтинг),современная диагностика кожи,эстетическая косметология,3D-визуализация`,
    author: `Vladislav`,
    url: process.env.SITE_URL,
    lang: "ru",
    locale: "ru_RU",
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OGCclinic site`,
        short_name: `OGCclinic`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#e30277`,
        display: `minimal-ui`,
        icon: `src/images/ogc-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Strapi",
        fieldName: "strapi",
        url: `${process.env.API_URL || "http://localhost:1337"}/graphql`,
      },
    },
    {
      resolve: "gatsby-plugin-graphql-image",
      options: {
        images: [
          {
            schemaName: "Strapi",
            typeName: "Strapi_UploadFile",
            fieldName: "url",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: process.env.INST_ACCESS_TOKEN,
        instagram_id: process.env.INSTAGRAM_ID,
        maxPosts: 10,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["*.html"],
          runtimeCaching: [
            {
              // page-data.json files, static query results and app-data.json
              // are not content hashed
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `NetworkFirst`,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_AID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: true,

        host: `www.${process.env.SITE}`, // if 'www' is set to 'false', be sure to also remove it here!
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "gorchakova-clinic.ru",
            to: process.env.SITE,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
