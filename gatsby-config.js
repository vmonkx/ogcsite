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
    url: "http://localhost:9000",
    lang: "ru",
    siteUrl: `http://localhost:9000`,
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
        url: `${
          process.env.API_URL || "http://localhost:1337"
        }/graphql`,
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
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_AID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
