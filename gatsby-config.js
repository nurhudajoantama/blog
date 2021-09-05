const config = require("./config/website");
require("dotenv").config();

module.exports = {
  // for data helmet, etc
  siteMetadata: {
    siteUrl: config.siteUrl,
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    title: config.siteTitle,
    description: config.description,
    keywords: ["blog", "Nurhuda Joantama"],
    author: { name: config.author },
    social: {
      twitter: config.twitter,
    },
  },
  plugins: [
    // for tailwind
    "gatsby-plugin-postcss",
    // Netlify CMS
    "gatsby-plugin-netlify-cms",
    // Markdorn query
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: ">",
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    // query blog
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    // query image
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    //Image
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // generate page
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`blog/index.(js|ts)?(x)`],
      },
    },
    // assetes
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },
    // transition
    "gatsby-plugin-transition-link",
    // react helmet
    "gatsby-plugin-react-helmet",
    // manifest for logo
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        lang: config.lang,
        display: "standalone",
        icon: "static/images/icon.png",
        start_url: "/",
        background_color: "rgb(29,78,216)",
        theme_color: "rgb(243,244,246)",
      },
    },
  ],
};
