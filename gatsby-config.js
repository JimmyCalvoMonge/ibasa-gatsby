/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.REACT_APP_ROOT_URL || `https://ibasa-gatsby.vercel.app`


module.exports = {
  siteMetadata: {
    title: `Ibasa | Pruebas de Admisión y Bachillerato`,
    description: 'Somos el instituto número uno a nivel nacional para preparación para las pruebas de Admisión en las Universidades Públicas.',
    twitterUsername: '@ibasa_cr',
    image: '/ibasa_dark.png',
    siteUrl: `https://ibasa-gatsby.vercel.app`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ibasa-gatsby.vercel.app',
        sitemap: 'https://ibasa-gatsby.vercel.app/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/ibasa_dark.png',
    },
  },
],
}