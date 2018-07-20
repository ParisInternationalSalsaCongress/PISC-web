import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CoverSlider } from "../components/Cover";
import Helmet from "react-helmet";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from "react-intl";
import "intl";
import "./index.css";

import ScreenTemp from "../assets/pisc-website-temp.jpg";

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <Helmet
          defaultTitle="Paris International Salsa Congress 2019"
          titleTemplate="%s | Paris International Salsa Congress 2019"
        >
          <html lang={langKey} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://parissalsacongress.com" />
          <meta property="og:image" content={ScreenTemp} />

          <link rel="canonical" href="https://parissalsacongress.com" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {langs.map(locale => (
            <link
              rel="alternate"
              href={`https://parissalsacongress.com/${locale}`}
              hrefLang={locale}
              key={`alternateLink-${locale}`}
            />
          ))}
        </Helmet>
        <Header langs={langsMenu} />
        <CoverSlider />
        <div
          style={{
            // marginTop: "3.45rem"
            margin: "3.45rem auto 0",
            maxWidth: 1200,
            padding: "0px 1.0875rem 4.45rem",
            paddingTop: 0
          }}
        >
          {children()}
        </div>
        <Footer langs={langsMenu} />
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
