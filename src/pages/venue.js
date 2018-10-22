import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';

import { PISC, PISC_TOWER, LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, TERTIARY_COLOR, DARK, SANS_SERIF_FONTS } from '../utils/vars';

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

const caption = css`
  margin: 0.45rem 0 1.45rem;
`;

const cover = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  height: 60vh;
  z-index: -1;
`

const banner = css`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rgba(TERTIARY_COLOR, .4)};
  color: ${SECONDARY_COLOR};
  z-index: 1;
  padding: 1rem 0;
  h1 {
    margin: 0;
    text-align: center;
  }
`

const locationMaker = css`
  width: 14px;
  height: 14px;
  fill: ${SECONDARY_COLOR};
`
const locationLink = css`
  color: ${DARK};
  text-decoration: none;
  font-weight: 500;
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

const mapSection = css`

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;
const mapSection_Map = css`

  @media (min-width: 768px) {
    width: 80%;
  }

`;
const mapSection_Text = css`

  @media (min-width: 768px) {
    margin-left: 2rem;
  }

`;

let styleTooltips = {
  style: {
    background: 'rgba(0,0,0,.8)',
    padding: 10,
    color:'white',
    boxShadow: '4px 4px 2px rgba(0,0,0,.5)',
    zIndex: 6,
  },
  arrowStyle: {
    color: 'rgba(0,0,0,.8)',
    borderColor: false,
    zIndex: 6,
  }
};


const VenuePage = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`Hyat_page_text_3` },
      ]}
    >
      <html lang={i18n.language} />
      <title>
        {i18n.t`the venue`}
      </title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <h1>
          <Trans>Hyat_page_title</Trans>
        </h1>
      </div>
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </header>
    <div className={container}>
      <h3 className={title}>
        <Trans>Hyat_page_subtitle_1</Trans>
      </h3>
      <p>
        <Trans>Hyat_page_text_1</Trans>
      </p>
      <p>
        <Trans>Hyat_page_text_2</Trans>
      </p>
      <p>
        <Trans>Hyat_page_text_3</Trans>
      </p>
      <p>
        <Trans>Hyat_page_text_4</Trans>
      </p>
      <div className={bookBtnWrapper}>

        <a href="https://book.passkey.com/go/PISC2019JUNGLE" target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
          <Trans>book your room</Trans>
        </a>

      </div>
      <h2 className={subTitle}>
        <Trans>adress</Trans>
      </h2>
      <div className={mapSection}>
        <div className={mapSection_Map}>
          <a href="https://goo.gl/maps/MaM6WKFFtXU2" target="_blank" rel="noopener noreferrer" className={locationLink}>
            <Img fluid={data.image01.childImageSharp.fluid} className={caption} />
          </a>
        </div>
        <p className={mapSection_Text}>
          <strong>
            <Trans>Hyat_page_title</Trans>
          </strong> <br />
          <a href="https://goo.gl/maps/MaM6WKFFtXU2" target="_blank" rel="noopener noreferrer" className={locationLink}>
            <LocationMarket className={locationMaker} />
              3, place du général KOENIG
              75017 Paris, France
          </a><br />
          RER - Métro Neuilly Porte Maillot
        </p>
      </div>
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
    image01: file(relativePath: {eq: "hyatt/hyatt-map.jpg"}) {
      ...hyattImage
    }


  }

`;