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

const header = css`
  padding-top: 0;
  position: relative;
  margin-bottom: 1.45rem;
`;
const PiscLogo = css`
  fill: white;
  width: auto;
  height: 60px;
  transition: .300s ease-in;
  &:hover {
    fill: ${SECONDARY_COLOR};
  }
`;

const nav = css`
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 1.0875rem;
  background-color: transparent;
  border: 1px solid;

`;
const navLink = css`
  color: white;
  transition: .300s ease-in;
  font-family: ${SANS_SERIF_FONTS};
  font-size: 1.3rem;
  text-decoration: none;
  position: relative;
  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;
const subNavList = css`
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;

  // transition: .300s ease-in;
  // font-family: ${SANS_SERIF_FONTS};
  // font-size: 1.3rem;
  // text-decoration: none;
  // &:hover {
  //   color: ${SECONDARY_COLOR};
  // }
`;
const subNavListLink = css`
  color: white;
  transition: .300s ease-in;
  font-family: ${SANS_SERIF_FONTS};
  // font-size: 1.3rem;
  padding: 0.4rem 0;
  text-decoration: none;
  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;

const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
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
  transition: .300s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: .4rem;
  border-radius: 4px;
  text-decoration: none;
  // &:hover {
  //   color: ${SECONDARY_COLOR};
  // }
`

const IndexPage = ({ i18n, data }) => (


  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`Pisc_page_text_1` },
        {
          property: "og:title",
          content: i18n.t`og_title`
        },
        {
          name: "keywords",
          content:
            "Salsa, bachata, kizomba, mambo, salsa congress, salsa festival"
        }
      ]}
    >
      <html lang={i18n.language} />
      <title>
        {i18n.t`4th edition`}
      </title>
    </Helmet>
    <header className={header}>
      <Nav className={nav}>
        <Link
          to="/"
          className={navLink}
        >
          <PISC_TOWER className={PiscLogo} />
        </Link>

        <a
          className={navLink}
        >
          Preparties 16-18 avril
        </a>
        <a
          className={navLink}
        >
          Congress 19-21 avril
          <ul className={subNavList}>
            <li>
              <Link
                to={i18n.t`/venue`}
                className={subNavListLink}
              >
                The venue
              </Link>
            </li>
          </ul>
        </a>
       
        <a className={secondaryBtn} href="https://www.billetweb.fr/pisc-2019">
          Buy your Pass
        </a>
      </Nav>
      <Img fluid={data.imageOne.childImageSharp.fluid} className={cover} />
    </header>
     <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        // backgroundColor: SNOW_COLOR,
      }}
    > 
   
        {/* <Img fluid={data.imageOne.childImageSharp.fluid} style={{height: '100vh'}} /> */}
       <h1>
        <Trans>Pisc_page_title_1</Trans><br />
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
      <blockquote>
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
        <em>
          <Trans>Pisc_page_text_7</Trans>
        </em>
      </p>
    </div>
    {/* <Img fluid={data.imageTwo.childImageSharp.fluid} style={{height: '100vh'}} /> */}
    {/* <div
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
      </div> */}
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
    imageOne: file(relativePath: {eq: "cover/yamulee_bg.jpg"}) {
      ...fluidImage
    }
    imageTwo: file(relativePath: {eq: "cover/showroom_bg.jpg"}) {
      ...fluidImage
    }


  }

`;


