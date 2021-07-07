/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'The Den Smokehouse and Brewery',
    copyright: 'The Den Smokehouse & Brewery LLC - est. 2018',
    description: 'Enjoy in-house brewed beer.',
    author: 'Jor-EL',
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        // plugins: `gatsby-transformer-json`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blogs/`,
        // plugins: `gatsby-transformer-json`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `weeklyspecials`,
        path: `${__dirname}/src/weeklyspecials/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          // placeholder: `dominantColor`
          quality: 50
          // breakpoints: [750, 1080, 1366, 1920]
          // backgroundColor: `transparent`
          // tracedSVGOptions: {}
          // blurredOptions: {}
          // jpgOptions: {}
          // pngOptions: {}
          // webpOptions: {}
          // avifOptions: {}
        }
      }
    },
    `gatsby-transformer-sharp`, // for dynamic images
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {maxWidth: 1200},
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        // name: `content`,
        path: `${__dirname}/src/data/`,
        // path: `./content/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i700,700i`,
        ],
        display: "swap",
      },
    },
  ],
}