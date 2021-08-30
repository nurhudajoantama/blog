module.exports = {
  // for data helmet, etc
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog Nurhuda Joantama Putra",
    author: "Nurhuda Joantama Putra",
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
      },
    },
    // query blog
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
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
        ignore: [`blog.(js|ts)?(x)`],
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
  ],
};
