import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import { withIntl, Link } from '../i18n'
import { injectIntl } from 'react-intl'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      <FormattedMessage id="ops" />
    </p>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default injectIntl(NotFoundPage)
