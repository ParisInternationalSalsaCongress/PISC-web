import React from 'react'
import Img from 'gatsby-image';

import { Link } from '../i18n'
import Language from './language'

const Header = ({ siteTitle, data }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'inline-block' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ float: 'right' }}>
        <Language />
      </div>
    </div>
    <Img alt="Big picture" style={{postion: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} sizes={data.background.sizes} />
  </div>
)

export default Header
