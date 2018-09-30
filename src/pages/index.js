import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { FormattedMessage } from 'react-intl'
import Img from 'gatsby-image';
import { withIntl, Link } from '../i18n'


const IndexPage = ({ data, intl}) => (
  <Layout>
  
    <Header siteTitle={'TOTO le retour'} data={data} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <p>
        <FormattedMessage id="welcome" />
      </p>
      <Img sizes={data.background.sizes} />
      <p>
        <FormattedMessage id="build" />
      </p>
      <Link to="/page-2/">
        <FormattedMessage id="gopage2" />
      </Link>
    </div>
  </Layout>
)

export default withIntl(IndexPage)

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title,
      }
    }
    background: imageSharp(id: { regex: "/bg/" }) {
      sizes(
        maxWidth: 1240,
        duotone: {
          highlight: "#38b719",
          shadow: "#192550"
        }
      ) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`