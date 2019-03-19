import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const SalsoundPage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description',
          content: i18n.t`sal'sound_text_1` + ' ' + i18n.t`sal'sound_text_2`,
        },
      ]}
    >
      <html lang={i18n.language} />
      <title>{i18n.t`preparty Sal'Sounds 70's`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={prepartiesBanner}>
        <Img fluid={data.imageSalsound00.childImageSharp.fluid} />
      </div>
    </header>
    <div className={container}>
      <h1 className={title}>
        <Trans>Wednesday Preparty Sal'sound</Trans>
      </h1>
      <p>
        <Trans>sal'sound_text_1</Trans>
      </p>
      <p>
        <Trans>sal'sound_text_2</Trans>
      </p>
      <p>
        <Trans>sal'sound_text_3</Trans>
      </p>

      <a
        href="https://goo.gl/maps/K1dL2qk9XGz"
        target="_blank"
        rel="noopener noreferrer"
        className={locationLink}
      >
        <LocationMarket className={locationMaker} />
        &nbsp; Intensive Danse <br />
        105, rue de tolbiac
        <br />
        75013 Paris <br />
        Metro Olympiades, line 14
      </a>
      <p>
        <span>
          <Trans>Enter</Trans>: 12euros. &nbsp;
          <Trans>Credit card</Trans>
        </span>
        <br />
        <span>21h / 3h</span>
      </p>
      <p>
        <Trans>retrieve your pass</Trans>
      </p>
    </div>
    <div>
      <Img
        fluid={data.imageSalsound02.childImageSharp.fluid}
        className={cover}
      />
    </div>
  </Layout>
);

export default withI18n()(SalsoundPage);

export const SalsoundImage = graphql`
  fragment SalsoundImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const SalsoundQuery = graphql`
  query {
    imageSalsound00: file(
      relativePath: {
        eq: "preparties/salsound/salsound-Preparty-Wednesday.jpg"
      }
    ) {
      ...SalsoundImage
    }
    imageSalsound02: file(
      relativePath: { eq: "preparties/salsound/salsound02.jpg" }
    ) {
      ...SalsoundImage
    }
  }
`;
