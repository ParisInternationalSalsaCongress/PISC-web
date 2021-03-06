import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Footer from './footer';

import GlobalStyle from './globalstyle';

import ScreenTemp from '../images/cover/Main-Visual.jpg';


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate="%s | Paris International Salsa Congress 2019"
        >
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://parissalsacongress.com" />
          <meta property="og:image" content={ScreenTemp} />
          <meta property="og:video" content="https://www.facebook.com/ParisSalsaC/videos/1748460895275680/" />
          <meta property="og:video:secure_url" content="https://www.facebook.com/ParisSalsaC/videos/1748460895275680/" />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:width" content="1920" />
          <meta property="og:video:height" content="1080" />
          <meta name="format-detection" content="telephone=no" />

          <link rel="canonical" href="https://parissalsacongress.com" />
        </Helmet>
        {children}
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
