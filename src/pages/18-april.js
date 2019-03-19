import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { tint } from 'polished';

import { LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR } from '../utils/vars';

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
`;

const prepartiesBanner = css`
  padding-top: 80px;
`;

const locationMaker = css`
  width: 14px;
  height: 14px;
  fill: currentColor;
`;

const locationLink = css`
  color: ${SECONDARY_COLOR};
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-in;
  display: inline-block;
  margin: 0.45rem 1rem 1.45rem;
  &:hover {
    color: ${tint(0.1, SECONDARY_COLOR)};
  }
`;

const title = css`
  color: ${PRIMARY_COLOR};
  font-weight: 500;
`;

const SevenSpiritsPage = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`7spirit_text_I` }]}>
      <html lang={i18n.language} />
      <title>{i18n.t`preparty Seven Spirit`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={prepartiesBanner}>
        <Img fluid={data.image7spirits01.childImageSharp.fluid} />
      </div>
    </header>
    <div className={container}>
      <h1 className={title}>
        <Trans>Thursday Preparty Seven Spirits</Trans>
      </h1>
      <p>
        <Trans>7spirit_text_I</Trans>
      </p>
      <p>
        <Trans>7spirit_text_II</Trans>
      </p>
      <p>
        <Trans>7spirit_text_III</Trans>
      </p>
      <p>
        <Trans>7spirit_text_IV</Trans>
      </p>

      <a
        href="https://goo.gl/maps/44LgDuUQD8T2"
        target="_blank"
        rel="noopener noreferrer"
        className={locationLink}
      >
        <LocationMarket className={locationMaker} />
        &nbsp; Seven Spirits <br />
        7, rue de sainte Hélène <br />
        75013 Paris <br />
        Metro Porte d’Italie/Maison Blanche, line 7
      </a>
      <p>
        <span>
          <Trans>Enter</Trans>: 15euros. &nbsp;
          <Trans>Credit card</Trans>
        </span>
        <br />
        <span>21h / 4h</span>
      </p>

      <p>
        <Trans>retrieve your pass</Trans>
      </p>
    </div>
    <div>
      <Img
        fluid={data.image7spirits00.childImageSharp.fluid}
        className={cover}
      />
    </div>
  </Layout>
);

export default withI18n()(SevenSpiritsPage);

export const SevenSpiritsImage = graphql`
  fragment SevenSpiritsImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


export const SevenSpiritQuery = graphql`
  query {
    image7spirits00: file(relativePath: { eq: "preparties/7spirits/7spirits00.jpg" }) {
      ...SevenSpiritsImage
    }
    image7spirits01: file(relativePath: { eq: "preparties/7spirits/7spirits-Preparty-Thursday.jpg" }) {
      ...SevenSpiritsImage
    }
  }
`;
