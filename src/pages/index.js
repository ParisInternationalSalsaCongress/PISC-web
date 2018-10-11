import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';

import { PISC, PISC_TOWER } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, GREEN_LIGHT, DARK, SANS_SERIF_FONTS } from '../utils/vars';

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
  text-align: center;

  &:hover {
    background-color: ${lighten(.2, SECONDARY_COLOR)};
  }
  
`

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
`;


const piscLogo = css`
  position: absolute;
  top: 38%;
  left: 50%;
  fill: white;
  width: 60vw;
  height: auto;
  max-width: 500px;
  transform: translateX(-50%)
`;

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
      <NavBar />
      <Img fluid={data.imageOne.childImageSharp.fluid} className={cover} />
      <PISC className={piscLogo} />
    </header>
    <div
      className={container}
    > 
   
        {/* <Img fluid={data.imageOne.childImageSharp.fluid} style={{height: '100vh'}} /> */}
       <h1 className={title}>
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
    </div>
    {/* <Img fluid={data.imageTwo.childImageSharp.fluid} style={{height: '100vh'}} /> */}
   
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


