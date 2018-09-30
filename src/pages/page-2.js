import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withIntl, Link } from '../i18n';
import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <p>
      Page 2
    </p>
    <Link to="/">
    </Link>
  </Layout>
);

export default withIntl(SecondPage);
