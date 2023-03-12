/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/ibasa_dark.png',
    },
  },
],
}
