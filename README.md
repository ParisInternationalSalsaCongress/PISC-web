# Paris International Salsa Congress website


The default Gatsby starter with features of `multi-language url routes` and `browser language detection`.


## Features

- Localization (Multilanguage) provided by [react-intl](https://github.com/yahoo/react-intl). 

- Support automatic redirection based on user's preferred language in browser provided by [browser-lang](https://github.com/wiziple/browser-lang).

- Support multi-language url routes within a single page component. That means you don't have to create separate pages such as `pages/en/index.js` or `pages/fr/index.js`.

- Based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) with least modification.

## Inspiration

Google recommends using different URLs for each language version of a page rather than using cookies or browser settings to adjust the content language on the page. [(read more)](https://support.google.com/webmasters/answer/182192?hl=en&ref_topic=2370587)

## Realworld Example

[https://picpick.app](https://picpick.app)

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:


## How it works

You can easily add any language file by creating a new translation .js file and modifying `src/i18n/locales/index.js`

For example,

translation file | language
-- | --
src/i18n/locales/en.js | English
src/i18n/locales/fr.js | French
src/i18n/locales/index.js | language list

Let's say you have two pages in your `pages` directory. The starter will create multi-language url routers for you.

file | English | French | Default*
-- | -- | -- | -- | -- 
src/pages/index.js | /**en** | /**fr** | /
src/pages/page-2.js | /**en**/page-2 | /**fr**/page-2 | /page-2

_* `/` or `/page-2` will be redirected to the user's preferred language router. e.g) `/fr` or `/fr/page-2`_

## License

MIT &copy; [Stephane Coué](https://github.com/stephCoue)
