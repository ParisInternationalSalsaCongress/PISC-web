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
  overflow: hidden;
`;

const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
`;

const caption = css`
  margin: 0.45rem 0 1.45rem;
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

const title = css`
  color: ${PRIMARY_COLOR};
  text-align: center;
  font-weight: 500;
`;

const subTitle = css`
  color: ${PRIMARY_COLOR};
  font-weight: 500;
`;

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

const bookBtnWrapper = css`
  text-align: center;
  margin: 1.45rem 0;

  .${secondaryBtn} {
    display: block;
    width: 100%;

    @media (min-width: 768px) {
      display: inline-block;
      width: initial;
    }
  }
`

const SevenSpiritPage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`7spirit_text` },
      ]}
    >
      <html lang={i18n.language} />
      <title>
        {i18n.t`preparty Seven Spirit`}
      </title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <div className={bannerInner}>
          <h1>
            <Trans>Thursday Preparty Seven Spirit</Trans>
          </h1>
          <p>
            <Trans>7spirit_text</Trans>
          </p>
          <a href="https://goo.gl/maps/44LgDuUQD8T2" target="_blank" rel="noopener noreferrer" className={locationLink}>
            <LocationMarket className={locationMaker} />
            &nbsp;
            Seven Spirit <br />
            7, rue de sainte Hélène <br />
            75013 Paris M•Porte d’italie/Maison blanche
          </a>
          <span>
            <Trans>Enter</Trans>: 15euros
          </span>
          <span>
            21h / 4h
          </span>
        </div>
      </div>
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </header>
  </Layout>
);

export default withI18n()(SevenSpiritPage);

export const SevenSpiritImage = graphql`
  fragment SevenSpiritImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


export const SevenSpiritQuery = graphql`
  query {
    image00: file(relativePath: {eq: "preparties/7spirit/7spirit00.jpg"}) {
      ...hyattImage
    }


  }

`;
