import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import Footer from './footer';

const Layout = ({ children, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'welcome' }) },
        {
          name: 'keywords',
          content:
            'Paris, Salsa, Congress, festival, jungle, bachata, kizomba, hyatt paris',
        },
      ]}
    />
    {children}
    <Footer />
  </div>
);

export default injectIntl(Layout);
