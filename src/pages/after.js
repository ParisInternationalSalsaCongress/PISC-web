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

const BakidoSocialPage = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`bakido_text_I` }]}>
      <html lang={i18n.language} />
      <title>{i18n.t`after Bakido Social`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={prepartiesBanner}>
        <Img fluid={data.imageBakido00.childImageSharp.fluid} />
      </div>
    </header>
    <div className={container}>
      <h1 className={title}>
        <Trans>Monday After party Bakido Social</Trans>
      </h1>
      <p>
        <Trans>bakido_text_I</Trans>
      </p>
      <p>
        <Trans>bakido_text_II</Trans>
      </p>
      <p>
        <Trans>bakido_text_III</Trans>
      </p>
      <p>
        <span>
          <Trans>Enter</Trans>: 12euros.
        </span>
        <br />
        {/* <span>17h / minuit</span> */}
      </p>
      <p>
        <Trans>bakido_text_IV</Trans>
      </p>
      <p>
        <Trans>bakido_text_V</Trans>
      </p>
      <p>
        <Trans>bakido_text_VI</Trans>
      </p>

      <a
        href="https://goo.gl/maps/1pAf8nZb7e32"
        target="_blank"
        rel="noopener noreferrer"
        className={locationLink}
      >
        <LocationMarket className={locationMaker} />
        &nbsp; Salle Colonne <br />
        94, boulevard Auguste Blanqui <br />
        75013 Paris <br />
        Métro Glacière, ligne 6
      </a>
    </div>

  </Layout>
);

export default withI18n()(BakidoSocialPage);

export const BakidoSocialImage = graphql`
  fragment BakidoSocialImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const BakidoSocialQuery = graphql`
  query {
    imageBakido00: file(
      relativePath: { eq: "after/bakido.jpg" }
    ) {
      ...BakidoSocialImage
    }

  }
`;
