import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import GlobalStyle from './globalstyle';

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
          {/* <meta property="og:image" content={ScreenTemp} /> */}

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
