import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten, tint } from 'polished';

import {
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  QUINARY_COLOR,
} from '../utils/vars';

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


const banner = css`
  padding-top: 80px;
`;

const pastel = css`
  background-color: ${rgba(tint(0.79, PRIMARY_COLOR), 0.6)};
`;


const TableWrapper = css`
  margin: 1rem 0;
`;

const title = css`
  color: ${PRIMARY_COLOR};
  text-align: center;
  font-weight: 500;
`;

const warn = css`
  color: ${SECONDARY_COLOR};
`;

const levels = css`
  font-size: 0.8rem;
  font-weight: 500;
`;

const Table = css`
  border: solid thin;
  border-collapse: collapse;
  caption {
    text-align: left;
    font-weight: 500;
    padding-bottom: 0.4rem;
    overflow: hidden;
  }
  th {
    border: solid thin;
    padding: 0.6rem 0.8rem;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    @media (min-width: 768px) {
      padding: 0.6rem 1.4rem;
    }
  }
  td {
    border: solid thin;
    padding: 1rem 0.4rem;
    text-align: center;
    vertical-align: middle;
    &:nth-child(2n) {
    }
    @media (min-width: 768px) {
      padding: 1rem 1.4rem;
    }
  }

  .${levels} {
    float: right;
  }
`;

const highlight = css`
  background-color: ${rgba(PRIMARY_COLOR, 0.5)};
`;

const getOut = css`
  background-color: ${rgba(QUINARY_COLOR, 0.4)};
`;

const mapSection = css`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const showFromTablet = css`
  @media (min-width: 768px) {
    display: block;
  }
`;

const blockText = css`
  display: block;

`;

const blockTextInlineDesktop = css`
  display: block;
  @media (min-width: 1024px) {
    display: inline;
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
    color: 'white',
    boxShadow: '4px 4px 2px rgba(0,0,0,.5)',
    zIndex: 6,
  },
  arrowStyle: {
    color: 'rgba(0,0,0,.8)',
    borderColor: false,
    zIndex: 6,
  },
};

const SocialLounge = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`social_text_I` }]}>
      <html lang={i18n.language} />
      <title>{'Social Lounge'}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <Img fluid={data.image00.childImageSharp.fluid} />
      </div>
    </header>
    <div className={container}>
      <p>
        <Trans>social_text_I</Trans> <br />
        <Trans>social_text_I-</Trans>
      </p>
      <p>
        <Trans>social_text_II</Trans>
      </p>
      {/* <p className={warn}>
        <Trans>Workshops_warn</Trans>
      </p> */}
      <SocialLoungeSchedule />
    </div>
  </Layout>
);

export default withI18n()(SocialLounge);

export const SocialLoungeSchedule = withI18n()(({ i18n }) => (
         <div className={TableWrapper}>
           <table className={Table}>
             <caption>
               {/* <span
          className={css`
            display: none;
          `}
        >
          <Trans>Friday's schedule</Trans>
        </span>

        <span className={levels}>
          *<Trans>Workshops_levels</Trans>
        </span> */}
             </caption>
             <thead>
               <tr className={highlight}>
                 <th colSpan="3">
                   <Trans>Social Lounge</Trans>
                 </th>
               </tr>
               <tr>
                 <th colSpan="3">PONT-NEUF ROOM</th>
               </tr>
               <tr className={highlight}>
                 <th />
                 <th>
                   <Trans>Saturday</Trans>
                 </th>
                 <th>
                   <Trans>Sunday</Trans>
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>
                   16:30{' '}
                   <span className={blockTextInlineDesktop}>- </span>
                   20:00
                 </td>
                 <td>70% Salsa 20% Bachata 10% Kizomba</td>
                 <td>70% Salsa 20% Bachata 10% Kizomba</td>
               </tr>
               <tr className={pastel}>
                 <td>DJ</td>
                 <td>Dj Phil & Dj Madj</td>
                 <td>Dj Asmadi & Dj Valéry</td>
               </tr>
             </tbody>
           </table>
         </div>
       ));

export const SocialLoungeImage = graphql`
  fragment socialLoungeImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const SocialLoungeImageQuery = graphql`
  query {
    image00: file(relativePath: { eq: "cover/socials.jpg" }) {
      ...socialLoungeImage
    }
  }
`;
