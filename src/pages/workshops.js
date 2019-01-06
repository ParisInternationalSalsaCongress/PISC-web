import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';


import {
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  GREEN_LIGHT,
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
  height: 70%;
  height: 70vh;
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
  overflow: auto;
  margin: 1rem 0;
`;

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


const Table = css`
  border: solid thin;
  border-collapse: collapse;
  caption {
    text-align: left;
    font-weight: 600;
    padding-bottom:  0.8rem;
  }
  th {
    border: solid thin;
    padding: 0.6rem 1.4rem;
    white-space: nowrap;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
  }
  td {
    border: solid thin;
    padding: 1rem 1.4rem;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
  }

  // .${secondaryBtn} {
  //   display: block;
  //   width: 100%;

  //   @media (min-width: 768px) {
  //     display: inline-block;
  //     width: initial;
  //   }
  // }
`;

const highlight = css`
  background-color: ${rgba(PRIMARY_COLOR, .6)};
`;

const getOut = css`
  background-color: ${rgba(SECONDARY_COLOR, .6)};
`;

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

const WorkshopsPage = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`Workshops_textII` }]}>
      <html lang={i18n.language} />
      <title>{'Workshops'}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={banner}>
        <h1>Workshops</h1>
      </div>
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </header>
    <div className={container}>
      <h3 className={title}>
        <Trans>Workshops_headline</Trans>
      </h3>
      <p>
        <Trans>Workshops_textI</Trans>
        <br />
        <Trans>Workshops_textII</Trans>
      </p>
      <p className={warn}>
        <Trans>Workshops_warn</Trans>
      </p>

      <FridaySchedule />
      <SaturdaySchedule />
      <SundaySchedule />
    </div>
  </Layout>
);

export default withI18n()(WorkshopsPage);

const FridaySchedule = withI18n()(({ i18n }) => (
  <div className={TableWrapper}>
    <table className={Table}>
      <caption>
        <Trans>Friday's schedule</Trans>
      </caption>
      <thead>
        <tr className={highlight}>
          <th rowSpan="2">
            <Trans>Time</Trans>
          </th>
          <th colSpan="4">
            <Trans>Friday</Trans>
          </th>
        </tr>
        <tr>
          <th>LEFT ROOM</th>
          <th>CENTRAL ROOM</th>
          <th>RIGHT ROOM</th>
          <th>ARC EN CIEL ROOM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14:00 15:00</td>
          <td>Leon Rose Project, PW on1 (3)</td>
          <td>Yamulee, PW On2 (3)</td>
          <td>Georges & Laura, Kizomba (2)</td>
          <td />
        </tr>
        <tr>
          <td>15:10 16:10</td>
          <td>Alegria, PW on2 (2)</td>
          <td>Griselle Ponse, Ladies Styling On2 (1)</td>
          <td>Elegua, Cuban (2)</td>
          <td>Marco & Sarah, Bachata (2)</td>
        </tr>
        <tr>
          <td>16:20 17:20</td>
          <td />
          <td>Terry & Cecile, PW On2 (3)</td>
          <td>Ernesto & Denisse, Shines On2 (3)</td>
          <td />
        </tr>
        <tr>
          <td>17:30 18:30</td>
          <td>Latin Passion Group, PW (2)</td>
          <td>Mambo King & Maria Chiarra, Shines on2 (1)</td>
          <td />
          <td>Alicia Velasco, Ladies Styling On2 (3)</td>
        </tr>
        <tr className={getOut}>
          <td>18:40 19:40</td>
          <td colSpan="4">
            <Trans>PERFORMANCE REHEARSAL</Trans>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
));



const SaturdaySchedule = withI18n()(({ i18n }) => (
  <div className={TableWrapper}>
    <table className={Table}>
      <caption>
        <Trans>Saturday's schedule</Trans>
      </caption>
      <thead>
        <tr className={highlight}>
          <th rowSpan="2">
            <Trans>Time</Trans>
          </th>
          <th colSpan="4">
            <Trans>Saturday</Trans>
          </th>
        </tr>
        <tr>
          <th>LEFT ROOM</th>
          <th>CENTRAL ROOM</th>
          <th>RIGHT ROOM</th>
          <th>ARC EN CIEL ROOM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:30 11:30</td>
          <td>Marco & Sarah, Bachata (3)</td>
          <td>Rodriogo & Bersy, Shines On2 (3)</td>
          <td>Adiran & Anita, PW On1 (2)</td>
          <td>Karel Flores, Ladies Styling On2 (3)</td>
        </tr>
        <tr>
          <td>11:40 12:40</td>
          <td>Karen & Ricardo, PW On1 (3)</td>
          <td>Adolfo & Lorenita LSD, Shines On2 (3)</td>
          <td>Korke & Judith, Bachata (3)</td>
          <td>Terry & Cecile, PW On2 (3)</td>
        </tr>
        <tr className={getOut}>
          <td>12:40 14:00</td>
          <td colSpan="4">
            <Trans>LUNCH BREAK</Trans>
          </td>
        </tr>
        <tr>
          <td>14:00 15:00</td>
          <td>José & Nerea, PW On2 (3)</td>
          <td>Eddie Torres Jr. Shines On2 (1)</td>
          <td>Nuno & Nagyla, Kizomba (2)</td>
          <td>Adrian & Anita, Shines On1 (1)</td>
        </tr>
        <tr>
          <td>15:10 16:10</td>
          <td>Mouaze & Sonia, Chachacha (1)</td>
          <td>Alberto Valdes, Afro Cubano (1)</td>
          <td>Tala & Edita, PW On2 (2)</td>
          <td>Jessica Quiles, Ladies Styling On2 (3)</td>
        </tr>
        <tr>
          <td>16:20 17:20</td>
          <td>Shelina's Team, Shines On2 (2)</td>
          <td>Eddie Torres, PW On2 (2)</td>
          <td>Goupo Alafia, Pachanga (1)</td>
          <td>Yusimi Afro Cubano (3)</td>
        </tr>
        <tr>
          <td>17:30 18:30</td>
          <td>Griselle Ponce, Ladies Styling On2 (1)</td>
          <td>Karen & Ricardo, Shines On1 (1)</td>
          <td>Pedrito & Guisy, Rumba cubana (1)</td>
          <td>Korke & Judith, Bachata (3)</td>
        </tr>
        <tr className={getOut}>
          <td>18:40 19:40</td>
          <td colSpan="4">
            <Trans>PERFORMANCE REHEARSAL</Trans>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
));

const SundaySchedule = withI18n()(({ i18n }) => (
  <div className={TableWrapper}>
    <table className={Table}>
      <caption>
        <Trans>Sunday's schedule</Trans>
      </caption>
      <thead>
        <tr className={highlight}>
          <th rowSpan="2">
            <Trans>Time</Trans>
          </th>
          <th colSpan="4">
            <Trans>Sunday</Trans>
          </th>
        </tr>
        <tr>
          <th>LEFT ROOM</th>
          <th>CENTRAL ROOM</th>
          <th>RIGHT ROOM</th>
          <th>ARC EN CIEL ROOM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:30 11:30</td>
          <td>Shelina'a Team, PW On2 (2))</td>
          <td>Aberto Valdes, Salsa Cubana (2)</td>
          <td>Jessica Quiles, Ladies Styling On2 (2)</td>
          <td>Marco & Sarah, Bachata (2)</td>
        </tr>
        <tr>
          <td>11:40 12:40</td>
          <td>Terry & Cecile, PW On2 (3)</td>
          <td>Eddie Torres, Shines On2 (1)</td>
          <td>Alicia Velasco, Ladies styling (2)</td>
          <td>Adrian & Anita, PW On1 (3)</td>
        </tr>
        <tr className={getOut}>
          <td>12:40 14:00</td>
          <td colSpan="4">
            <Trans>LUNCH BREAK</Trans>
          </td>
        </tr>
        <tr>
          <td>14:00 15:00</td>
          <td>Rodriogo & Bersy, PW On2 (3)</td>
          <td>Latin Passion Group, Shines On2 (2)</td>
          <td>Nuno & Nagyla, Kizomba (2)</td>
          <td>Pedrito & Guisy, Salsa cubana (2)</td>
        </tr>
        <tr>
          <td>15:10 16:10</td>
          <td>José & Nerea, Shines On2 (3)</td>
          <td>Eddie Torres Jr, PW On2 (2)</td>
          <td>Alberto Valdes, Afro Cubano (1)</td>
          <td>Ernesto & Denisse, PW On2 (3)</td>
        </tr>
        <tr>
          <td>16:20 17:20</td>
          <td>Mouaze & Sonia, Chachacha PW (1)</td>
          <td>Yamulee, Shines On2 (3)</td>
          <td>Alegria, PW On2 (2)</td>
          <td>Yusimi Afro Cubano (1)</td>
        </tr>
        <tr>
          <td>17:30 18:30</td>
          <td>Groupo Alafia, Pachanga (1)</td>
          <td>Pedrito & Guisy, Afro Cubana (3)</td>
          <td>Georges & Laura, Kizomba (1)</td>
          <td>Adolfo & Lorenita LSD, PW On2 (3)</td>
        </tr>
        <tr className={getOut}>
          <td>18:40 19:40</td>
          <td colSpan="4">
            <Trans>PERFORMANCE REHEARSAL</Trans>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
));

// withI18n()(NavBar)

export const workshopsImage = graphql`
  fragment workshopsImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const workshopsQuery = graphql`
  query {
    image00: file(relativePath: { eq: "workshops/central-room.jpg" }) {
      ...workshopsImage
    }
  }
`;
