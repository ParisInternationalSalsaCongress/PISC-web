import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import Header from './header'

const Layout = ({ children, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'welcome' }) },
        {
          name: 'keywords',
          content: 'gatsby, i18n, react-intl, multi language, localization',
        },
      ]}
    />
    {children}
    <footer>footer ici</footer>
  </div>
)

export default injectIntl(Layout)
