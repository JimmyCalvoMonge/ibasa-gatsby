/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

const siteUrl = process.env.REACT_APP_ROOT_URL || `https://ibasa-gatsby.vercel.app`

module.exports = {
  siteMetadata: {
    title: `Ibasa | Pruebas de Admisión y Bachillerato`,
    description: 'Somos el instituto número uno a nivel nacional para preparación para las pruebas de Admisión en las Universidades Públicas.',
    twitterUsername: '@ibasa_cr',
    image: 'src/assets/ibasa_dark.png',
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "ibasa_dark",
      short_name: "ibasa_dark",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: 'src/assets/ibasa_dark.png',
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  },
],
}