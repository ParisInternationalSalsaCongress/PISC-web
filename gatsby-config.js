const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'img',
        path: `${__dirname}/src/assets/`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
