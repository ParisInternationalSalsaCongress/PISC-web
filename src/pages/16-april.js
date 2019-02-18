import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten, tint } from 'polished';

import { LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, DARK } from '../utils/vars';

import Layout from '../components/layout';
import NavBar from '../components/nav';

const header = css`
  padding-top: 0;
  position: relative;
  margin-bottom: 1.45rem;
`;

const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
`;


const cover = css`
  height: 30vh;
`

const prepartiesBanner = css`
  padding-top: 80px;
`;


const locationMaker = css`
  width: 14px;
  height: 14px;
  fill: currentColor;
`
const locationLink = css`
  color: ${SECONDARY_COLOR};
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-in;
  align-self: flex-start;
  &:hover {
    color: ${tint(0.1, SECONDARY_COLOR)};
  }
`;

const title = css`
  color: ${PRIMARY_COLOR};
  font-weight: 500;
`;


const AguaPage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description',
          content: i18n.t`agua_slogan` + ' ' + i18n.t`agua_text`,
        },
      ]}
    >
      <html lang={i18n.language} />
      <title>{i18n.t`preparty Agua`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={prepartiesBanner}>
        <Img fluid={data.image01.childImageSharp.fluid} />
      </div>
    </header>
    <div className={container}>
      <h1 className={title}>
        <Trans>Tuesday Preparty Agua</Trans>
      </h1>
      <p>
        <Trans>agua_slogan</Trans> <br />
        <Trans>agua_text</Trans>
      </p>
      <p>
        <span>
          <Trans>Enter</Trans>: 12euros
        </span>
        <br />
        <span>21h / 2h</span>
      </p>
      <a
        href="https://goo.gl/maps/bRTXyHga8hK2"
        target="_blank"
        rel="noopener noreferrer"
        className={locationLink}
      >
        <LocationMarket className={locationMaker} />
        &nbsp;
        <Trans>Boat</Trans> Concorde Atlantique. <br />
        <Trans>Face to the</Trans> 23 Quai Anatole France,
        <br />
        75007 Paris M•Assemblée National
      </a>
    </div>
    <div>
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </div>
  </Layout>
);

export default withI18n()(AguaPage);

export const AguaImage = graphql`
  fragment AguaImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


export const AguaQuery = graphql`
  query {
    image00: file(relativePath: { eq: "preparties/agua/agua00.jpg" }) {
      ...AguaImage
    }
    image01: file(relativePath: { eq: "preparties/agua/agua-Preparty-Tuesday.jpg" }) {
      ...AguaImage
    }
    image02: file(relativePath: { eq: "preparties/agua/agua02.jpg" }) {
      ...AguaImage
    }
  }
`;