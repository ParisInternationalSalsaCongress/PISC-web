import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';

import Layout from '../components/layout';

const IndexPage = ({ i18n, data }) => (
  <Layout>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        padding: '0px 1.0875rem',
        paddingTop: 0,
      }}
    > 
      <h1>
        <Trans>Hi people</Trans>
      </h1>
      <p>
        <Trans>Welcome to your new Gatsby site.</Trans>
      </p>
    </div>
    <Img fluid={data.imageOne.childImageSharp.fluid} style={{height: '100vh'}} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    > 
    <p>
      <Trans>Now go build something great.</Trans>
    </p>
    <Link to={i18n.t`/page-2`}>
      <Trans>Go to page 2</Trans>
    </Link>
    <div>
      <Link to="/en/">
        <Trans>English</Trans>
      </Link>
      <Link style={{ marginLeft: 20 }} to="/fr/">
        <Trans>French</Trans>
      </Link>
    </div>
    </div>
  </Layout>
);

export default withI18n()(IndexPage);

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: {eq: "photo.jpeg"}) {
      ...fluidImage
    }
  }

`;


