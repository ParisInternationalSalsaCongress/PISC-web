import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten, tint } from 'polished';

import { LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, SNOW_COLOR, DARK } from '../utils/vars';

import Layout from '../components/layout';
import NavBar from '../components/nav';

const header = css`
  padding-top: 0;
  position: relative;
  overflow: hidden;
`;

const cover = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  z-index: -1;
`

const banner = css`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${rgba(DARK, .18)};
  z-index: 1;
  padding: 0.45rem 1.0875rem 3.45rem;
  padding-top: 30vh;
  overflow-y: auto;
  @media (min-width: 768px) {
    padding-top: 50vh;
  }


`

const bannerInner = css`
  display: flex;
  flex-direction: column;
  color: ${SNOW_COLOR};
  text-shadow: 0px 0px 0px ${DARK}, 1px 1px 1px ${DARK}, 2px 2px 4px ${DARK};
  h1 {
    margin: 0 0 0.45rem;
    color: ${tint(.1, SECONDARY_COLOR)};
    letter-spacing: 2.4px;
  }
  & > span {
    margin: 0.45rem 0;
  }
  & > p {
    @media (min-width: 768px) {
      width: 60%;
    }
  }
`

const locationMaker = css`
  width: 14px;
  height: 14px;
  fill: currentColor;
`
const locationLink = css`
  color: ${SNOW_COLOR};
  text-decoration: none;
  font-weight: 500;
  transition: .300s ease-in;
  align-self: flex-start;
  &:hover {
    color: ${tint(.1, SECONDARY_COLOR)}
  }
`

const secondaryBtn = css`
  display: inline-block;
  color: white;
  transition: .300s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: .8rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1.45rem;

  &:hover {
    background-color: ${lighten(.1, SECONDARY_COLOR)};
  }

  &[disabled] {
    opacity: .6;
    &:hover {
      background-color: ${SECONDARY_COLOR};
    }
  }

`

const SalsoundPage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`sal'sound_text_1` + ' ' + i18n.t`sal'sound_text_2` },
      ]}
    >
      <html lang={i18n.language} />
      <title>
        {i18n.t`preparty Sal'Sounds 70's`}
      </title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <div className={bannerInner}>
          <h1>
            <Trans>Wednesday Preparty Sal'sound</Trans>
          </h1>
          <p>
            <Trans>sal'sound_text_1</Trans> <br />
            <Trans>sal'sound_text_2</Trans>
          </p>
          <a href="https://goo.gl/maps/K1dL2qk9XGz" target="_blank" rel="noopener noreferrer" className={locationLink}>
            <LocationMarket className={locationMaker} />
            &nbsp;
            intensive danse <br />
            105, rue de tolbiac<br />
            75013 Paris M•Olympiades
        </a>
          <span>
            <Trans>Enter</Trans>: 12euros
        </span>
          <span>
            21h / 3h
          </span>
        </div>
      </div>
      <Img fluid={data.imageSalsound02.childImageSharp.fluid} className={cover} />
    </header>
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
    imageSalsound00: file(relativePath: {eq: "preparties/salsound/salsound00.jpg"}) {
      ...SalsoundImage
    }
    imageSalsound01: file(relativePath: {eq: "preparties/salsound/salsound01.jpg"}) {
      ...SalsoundImage
    }
    imageSalsound02: file(relativePath: {eq: "preparties/salsound/salsound02.jpg"}) {
      ...SalsoundImage
    }
  }

`;
