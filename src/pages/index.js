import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';
import ReactPlayer from 'react-player'

import { PISC } from '../utils/svg';

import {
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  SNOW_COLOR,
  VOYAGE_VOYAGE_COLOR,
} from '../utils/vars';

import Layout from '../components/layout';
import NavBar from '../components/nav';

const header = css`
  padding-top: 0;
  position: relative;
`;

const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem;
  padding-top: 0;
  position: relative;
  background-color: ${SNOW_COLOR};
  &:last-of-type {
    padding-bottom: 3.45rem;
  }
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

const secondaryBtn = css`
  color: white;
  transition: .300s ease-in-out;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: .8rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${lighten(.1, SECONDARY_COLOR)};
  }
`
const banner = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rgba(VOYAGE_VOYAGE_COLOR, 0.9)};
  color: ${SNOW_COLOR};
  z-index: 5;
  padding: 1rem 0;
  transition: 0.3s ease-in-out;

  a {
    margin: 0;
    font-size: 2.2rem;
    line-height: 0.8;
    color: inherit;
    text-align: center;
    font-weight: 500;
    text-decoration: none;
  }
`;

const blockTextInlineTablet = css`
  display: block;
  @media (min-width: 768px) {
    display: inline;
  }
`;

const isTablet = css`
  display: none;
  @media (min-width: 768px) {
   display: block
  }
`

const title = css`
  color: ${PRIMARY_COLOR};
  text-align: center;
  font-weight: 500;
  margin-top: 1.45rem;
`;


const piscLogo = css`
  position: absolute;
  top: 35%;
  left: 50%;
  fill: white;
  width: 80vw;
  height: auto;
  max-width: 450px;
  max-height: 380px;
  transform: translateX(-50%);
  // filter: drop-shadow(2px 2px 4px ${PRIMARY_COLOR});
  @media (orientation: landscape) {
    width: auto;
    height: 70vh;
    // top: 20vh;
  }
`;

const bookBtnWrapper = css`
  text-align: center;
  margin: 2.45rem 0;

  .${secondaryBtn} {
    display: block;
    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`

const videoPlayerWrapper = css`
  position: relative;
  padding-top: 56.25%;
  margin: 1.45rem 0 3.45rem;
  overflow: hidden;
`
const videoPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
`



const IndexPage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`Pisc_page_text_1` },
        {
          property: 'og:title',
          content: i18n.t`og_title`,
        },
        {
          name: 'keywords',
          content:
            'Salsa, bachata, kizomba, mambo, salsa congress, salsa festival',
        },
      ]}
    >
      <html lang={i18n.language} />
      <title>{i18n.t`4th edition`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <Img fluid={data.imageZero.childImageSharp.fluid} className={cover} />
      <PISC className={piscLogo} />
      <div className={banner}>
        <a href="https://www.pisc.fr/">
          Super Early Pass <span className={blockTextInlineTablet}>-</span> PISC
          2020
        </a>
      </div>
    </header>
    <div className={container}>
      <h1 className={title}>
        <Trans>Pisc_page_title_1</Trans>
        <br />
        <Trans>Pisc_page_title_2</Trans>
      </h1>
      <p>
        <Trans>Pisc_page_text_1</Trans>
      </p>
      <p>
        <Trans>Pisc_page_text_2</Trans>
      </p>
      <p>
        <Trans>Pisc_page_text_3</Trans>
      </p>
    </div>
    <div className={videoPlayerWrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=b99YXIYY070"
        controls
        className={videoPlayer}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 0, modestbranding: 1 },
          },
        }}
      />
    </div>
    <div className={container}>
      <blockquote className={title}>
        <Trans>Pisc_page_quote</Trans>
      </blockquote>
      <p>
        <Trans>Pisc_page_text_4</Trans>
      </p>
      <p>
        <Trans>Pisc_page_text_5</Trans>
      </p>
      <p>
        <Trans>Pisc_page_text_6</Trans>
      </p>
      <p>
        <strong>
          <em>
            <Trans>Pisc_page_text_7</Trans>
          </em>
        </strong>
      </p>
      <div className={bookBtnWrapper}>
        <a className={secondaryBtn} href="https://www.billetweb.fr/pisc-2019">
          <Trans>buy your pass</Trans>
        </a>
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
    imageZero: file(relativePath: { eq: "cover/pisc-2019-cover.jpg" }) {
      ...fluidImage
    }
    imageOne: file(relativePath: { eq: "cover/yamulee_bg.jpg" }) {
      ...fluidImage
    }
  }
`;


