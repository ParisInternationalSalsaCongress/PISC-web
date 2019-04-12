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
  TERTIARY_COLOR,
  QUINARY_COLOR,
  DARK,
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

const cover = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  height: 80vh;
  z-index: -1;
`;

const banner = css`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rgba(TERTIARY_COLOR, 0.4)};
  color: ${SECONDARY_COLOR};
  z-index: 1;
  padding: 1rem 0;
  h1 {
    margin: 0;
    text-align: center;
  }
`;

const TableWrapper = css`
  margin: 1rem 0;
`;

const title = css`
  color: ${PRIMARY_COLOR};
  text-align: center;
  font-weight: 500;
`;

const secondaryBtn = css`
  display: inline-block;
  color: white;
  transition: 0.3s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: 0.8rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1.45rem;

  &:hover {
    background-color: ${lighten(0.1, SECONDARY_COLOR)};
  }

  &[disabled] {
    opacity: 0.6;
    &:hover {
      background-color: ${SECONDARY_COLOR};
    }
  }
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

const pastel = css`
  background-color: ${rgba(tint(0.79, PRIMARY_COLOR), 0.6)};
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

const ShowPage = ({ i18n, data }) => (
  <Layout>
    <Helmet>
      <html lang={i18n.language} />
      <title>{'Shows'}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <h1>Shows</h1>
      </div>
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </header>
    <div className={container}>
      <p>
        <Trans>show_text_I</Trans>
        <br />
        <strong>
          <Trans>show_text_II</Trans>
        </strong>{' '}
        <Trans>show_text_&</Trans>{' '}
        <strong>
          <Trans>show_text_III</Trans>
        </strong>{' '}
        <Trans>show_text_IV</Trans>
      </p>

      {/* <p className={warn}>
        <Trans>Workshops_warn</Trans>
      </p> */}
      <ShowSchedule />
    </div>
  </Layout>
);

export default withI18n()(ShowPage);

const ShowSchedule = withI18n()(({ i18n }) => (
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
            <Trans>SHOWS (Alphabetical Order)</Trans>
          </th>
        </tr>
        <tr>
          <th colSpan="3">CENTRAL ROOM</th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Friday</Trans>
          </th>
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
          <td>Alegria</td>
          <td className={pastel}>Adolfo & The Latin Soul Dancers</td>
          <td>Adolfo & The Latin Soul Dancers</td>
        </tr>
        <tr>
          <td className={pastel}>Alicia Velasco</td>
          <td>Adrian & Anita</td>
          <td className={pastel}>Alicia Velasco y su mambo rock</td>
        </tr>
        <tr>
          <td>Ernesto & Denisse</td>
          <td className={pastel}>Alberto Valdes</td>
          <td>Angelo Rito</td>
        </tr>
        <tr>
          <td className={pastel}>José & Nerea</td>
          <td>Eddie Torres Junior</td>
          <td className={pastel}>Aude Mambo</td>
        </tr>
        <tr>
          <td>Karel Flores</td>
          <td className={pastel}>Griselle</td>
          <td>Eddie Torres Junior</td>
        </tr>
        <tr>
          <td className={pastel}>Karen & Ricardo</td>
          <td>Groupo Alafia</td>
          <td className={pastel}>Ernesto & Denisse</td>
        </tr>
        <tr>
          <td>Korke & Judith</td>
          <td className={pastel}>Jessica Quiles</td>
          <td>Groupo Alafia</td>
        </tr>
        <tr>
          <td className={pastel}>Latin Passion Group</td>
          <td>Karen & Ricardo</td>
          <td className={pastel}>Jessica Quiles</td>
        </tr>
        <tr>
          <td>Leon Rose Project</td>
          <td className={pastel}>Korke & Judith</td>
          <td>José & Neréa</td>
        </tr>
        <tr>
          <td className={pastel}>Marco & Sara</td>
          <td>Latin Passion Group</td>
          <td className={pastel}>Mambo King</td>
        </tr>
        <tr>
          <td>Mambo King</td>
          <td className={pastel}>Mambo King</td>
          <td>Marco & Sara</td>
        </tr>
        <tr>
          <td className={pastel}>Michael & Darya</td>
          <td>Monika</td>
          <td className={pastel}>Pedrito & Guisy</td>
        </tr>
        <tr>
          <td>Mitsue & Monika</td>
          <td className={pastel}>Nuno & Nagila</td>
          <td>Salsabor</td>
        </tr>
        <tr>
          <td className={pastel}>Nuno & Nagila</td>
          <td>Pedrito & Guisy</td>
          <td className={pastel}>Talal & Edyta</td>
        </tr>
        <tr>
          <td>Rodrigo & Bersy</td>
          <td className={pastel}>Rodrigo & Bersy</td>
          <td>Terry & Cecile</td>
        </tr>
        <tr>
          <td className={pastel}>Shelina's Team</td>
          <td>Yamulee</td>
          <td className={pastel}>Yamulee</td>
        </tr>
        <tr>
          <td>Terry & Cecile</td>
          <td className={pastel}>Yusimi</td>
          <td>Yusimi</td>
        </tr>

      </tbody>
    </table>
  </div>
));

export const ShowImage = graphql`
  fragment ShowImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const ShowQuery = graphql`
  query {
    image00: file(relativePath: { eq: "cover/showroom_bg.jpg" }) {
      ...ShowImage
    }
  }
`;
