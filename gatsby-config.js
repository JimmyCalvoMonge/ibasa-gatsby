/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.REACT_APP_ROOT_URL || `https://institutoibasacr.com/`
const google_tagmanager_id = process.env.REACT_GOOGLE_TAG_ID
const google_analytics_id = process.env.REACT_GOOGLE_ANALYTICS_ID

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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: google_tagmanager_id,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
        // Name of the event that is triggered
        // on every Gatsby route change.
        // Defaults to gatsby-route-change
        routeChangeEventName: "ibasa_web_page_change_route",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
],
}