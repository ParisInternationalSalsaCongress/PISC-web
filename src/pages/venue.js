import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';

import { PISC, PISC_TOWER } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, QUINARY_COLOR, DARK, SANS_SERIF_FONTS } from '../utils/vars';

import Layout from '../components/layout';
import Nav from '../components/nav';


const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
`;

const cover = css`
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // height: 100vh;
  // z-index: -1;
`


const VenuePage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`Hyat_page_text_3` },
        // { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang={i18n.language} />
    </Helmet>
    <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    <div className={container}>
      <h1>
        <Trans>Hyat_page_title</Trans>
      </h1>

      <h2>
        <Trans>Hyat_page_subtitle_1</Trans>
      </h2>
      <p>
        <Trans>Hyat_page_text_1</Trans>
      </p>
      <p>
        <Trans>Hyat_page_text_2</Trans>
      </p>
      <Img fluid={data.image01.childImageSharp.fluid} className={cover} />
      <p>
        <Trans>Hyat_page_text_3</Trans>
      </p>
      <p>
        <Trans>Hyat_page_text_4</Trans>
      </p>
    </div>
    
  </Layout>
);

export default withI18n()(VenuePage);



export const hyattImage = graphql`
fragment hyattImage on File {
  childImageSharp {
    fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const hyattQuery = graphql`
  query {
    image00: file(relativePath: {eq: "hyatt/hyatt-00.jpg"}) {
      ...hyattImage
    }
    image01: file(relativePath: {eq: "hyatt/hyatt-01.jpg"}) {
      ...hyattImage
    }


  }

`;