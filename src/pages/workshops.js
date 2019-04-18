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
  GREEN_LIGHT,
  DARK,
} from '../utils/vars';

import WorkshopPdf from '../images/workshops/PISC-2019-Workshops.pdf';

import { Download } from '../utils/svg';

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
    padding: 1rem 0.8rem;
    text-align: center;
    vertical-align: middle;
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

const DownloadParagraph = css`
  font-size: 0.9rem;
`;

const DowloadLink = css`
  color: ${DARK};
  fill: ${DARK};
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease-in;
  &:hover {
    color: ${tint(0.1, SECONDARY_COLOR)};
    fill: ${tint(0.1, SECONDARY_COLOR)};
  }
`;

const DowloadIconLink = css`
  fill: ${DARK};
  transition: 0.3s ease-in;
  &:hover {
    fill: ${tint(0.1, SECONDARY_COLOR)};
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
      {/* <p className={warn}>
        <Trans>Workshops_warn</Trans>
      </p> */}
      {/* <p className={DownloadParagraph}>
        <a
          href={WorkshopPdf}
          download
          target="_blank"
          rel="noopener noreferrer"
          className={DowloadLink}
        >
          <Download />
          &nbsp; &nbsp;
          <Trans>PISC 2019 Workshops</Trans>
        </a>
      </p> */}
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
        <span
          className={css`
            display: none;
          `}
        >
          <Trans>Friday's schedule</Trans>
        </span>

        <span className={levels}>
          *<Trans>Workshops_levels</Trans>
        </span>
      </caption>
      <thead>
        <tr className={highlight}>
          <th colSpan="3">
            <Trans>Friday</Trans>
          </th>
        </tr>
        <tr>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>Workshop</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="4">
            14:00 <span className={blockText}>- </span>
            15:00
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Leon Rose Project,</span>{' '}
            PW On1 (3)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Yamulee,</span> PW On2 (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Georges & Laura,</span>{' '}
            Kizomba (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Angelo Rito,</span> Shines
            On2 (2)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td className={pastel} rowSpan="4">
            15:10 <span className={blockText}>- </span>
            16:10
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Shelina's Team,</span> PW
            On2 (2)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Griselle Ponse,</span>{' '}
            Ladies Styling On2 (1)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Elegua,</span> Salsa Cubana
            (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Marco & Sara,</span>{' '}
            Bachata (2)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td rowSpan="4">
            16:20 <span className={blockText}>- </span>
            17:20
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Alegria,</span> Shines On2
            (2)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Georges & Laura,</span>{' '}
            Kizomba (2)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Ernesto & Denisse,</span>{' '}
            Shines On2 (3)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Mouaze & Sonia,</span>{' '}
            Chachacha (1)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td className={pastel} rowSpan="4">
            17:30 <span className={blockText}>- </span>
            18:30
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Latin Passion Group,</span>{' '}
            PW On2 (2)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>
              Mambo King & Maria Chiarra,
            </span>{' '}
            Shines On2 (1)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Angelo Rito,</span> Shines
            On2 (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Alicia Velasco,</span>{' '}
            Ladies Styling On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const SaturdaySchedule = withI18n()(({ i18n }) => (
  <div className={TableWrapper}>
    <table className={Table}>
      <caption>
        <span
          className={css`
            display: none;
          `}
        >
          <Trans>Saturday's schedule</Trans>
        </span>
        <span className={levels}>
          *<Trans>Workshops_levels</Trans>
        </span>
      </caption>
      <thead>
        <tr className={highlight}>
          <th colSpan="3">
            <Trans>Saturday</Trans>
          </th>
        </tr>
        <tr>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>Workshop</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td rowSpan="4">
            10:30 <span className={blockText}>- </span>
            11:30
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Marco & Sara,</span>{' '}
            Bachata (3)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Rodrigo & Bersy,</span>{' '}
            Shines On2 (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Adrian & Anita,</span> PW
            On1 (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Karel Flores,</span> Ladies
            Styling On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr>
          <td rowSpan="4">
            11:40 <span className={blockText}>- </span>
            12:40
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>Karen & Ricardo,</span> PW
            On1 (3)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>
              Adolfo & Lorenita LSD,
            </span>{' '}
            Shines On2 (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Korke & Judith,</span>{' '}
            Bachata (3)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Terry & Cecile,</span> PW
            On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr className={getOut}>
          <td>
            12:40 <span className={blockText}>- </span>
            14:00
          </td>
          <td colSpan="2">
            <Trans>LUNCH BREAK</Trans>
          </td>
        </tr>
        <tr>
          <td rowSpan="4">
            14:00 <span className={blockText}>- </span>
            15:00
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>José & Nerea,</span> PW On2
            (3)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Karen & Ricardo</span>{' '}
            Shines On1 (1)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Nuno & Nagyla,</span>{' '}
            Kizomba (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Pedrito & Guisy,</span>{' '}
            Rumba Cubana (1)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr className={pastel}>
          <td rowSpan="4">
            15:10 <span className={blockText}>- </span>
            16:10
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Mouaze & Sonia,</span>{' '}
            Chachacha Shines (1)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Alberto Valdes,</span> Afro
            Cubano - YORUBA (1)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Talal & Edita,</span> PW
            On2 (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Jessica Quiles,</span>{' '}
            Ladies Styling On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td rowSpan="4">
            16:20 <span className={blockText}>- </span>
            17:20
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>Shelina,</span> Ladies Styling On2 (2)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>
              Mambo King & Maria Chiara,
            </span>{' '}
            PW On2 (2)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Goupo Alafia,</span>{' '}
            Pachanga (1)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Adrian & Anita,</span> Shines On1 (1)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td rowSpan="4">
            17:30 <span className={blockText}>- </span>
            18:30
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Alegria,</span>{' '}
            PW On2 (2)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Karel Flores,</span>{' '}
            Ladies Styling On2 (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Pedrito & Guisy,</span>{' '}
            Rumba Columbia (1)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Korke & Judith,</span>{' '}
            Bachata (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const SundaySchedule = withI18n()(({ i18n }) => (
  <div className={TableWrapper}>
    <table className={Table}>
      <caption>
        <span
          className={css`
            display: none;
          `}
        >
          <Trans>Sunday's schedule</Trans>
        </span>
        <span className={levels}>
          *<Trans>Workshops_levels</Trans>
        </span>
      </caption>
      <thead>
        <tr className={highlight}>
          <th colSpan="3">
            <Trans>Sunday</Trans>
          </th>
        </tr>
        <tr>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>Workshop</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td rowSpan="4">
            10:30 <span className={blockText}>- </span>
            11:30
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Shelina's Team,</span> PW
            On2 (2)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Aberto Valdes,</span> Rumba
            Cubana (2)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Alicia Velasco,</span>{' '}
            Ladies Styling (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Marco & Sara,</span>{' '}
            Bachata (2)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td rowSpan="4">
            11:40 <span className={blockText}>- </span>
            12:40
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>Terry & Cecile,</span> PW
            On2 (3)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>
              Mambo King & Maria Chiara,
            </span>{' '}
            Shines On2 (1)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Enah & Pocahontas,</span>{' '}
            Urban Kiz (3)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Adrian & Anita,</span> PW
            On1 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr className={getOut}>
          <td>
            12:40 <span className={blockText}>- </span>
            14:00
          </td>
          <td colSpan="2">
            <Trans>LUNCH BREAK</Trans>
          </td>
        </tr>
        <tr className={pastel}>
          <td rowSpan="4">
            14:00 <span className={blockText}>- </span>
            15:00
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Rodrigo & Bersy,</span> PW
            On2 (3)
          </td>
          <td>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Latin Passion Group,</span>{' '}
            Shines On2 (2)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Nuno & Nagyla,</span>{' '}
            Kizomba (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Pedrito & Guisy,</span>{' '}
            Salsa Cubana (2)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>
        <tr>
          <td rowSpan="4">
            15:10 <span className={blockText}>- </span>
            16:10
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>José & Nerea,</span> Shines
            On2 (3)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Talal & Edita,</span> PW
            On2 (2)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Alberto Valdes,</span> Afro
            Cubano - ARARA (1)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Ernesto & Denisse,</span>{' '}
            PW On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr className={pastel}>
          <td rowSpan="4">
            16:20 <span className={blockText}>- </span>
            17:20
          </td>
          <td>
            <span className={blockTextInlineDesktop}>Salsabor,</span> PW On2 (1)
          </td>
          <td>LEFT ROOM</td>
        </tr>

        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Yamulee,</span> Shines On2
            (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Jessica Quiles,</span>{' '}
            Ladies Styling On2 (2)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Marco & Sara,</span> Bachata (2)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        <tr>
          <td rowSpan="4">
            17:30 <span className={blockText}>- </span>
            18:30
          </td>
          <td className={pastel}>
            <span className={blockTextInlineDesktop}>Groupo Alafia,</span>{' '}
            Pachanga (1)
          </td>
          <td className={pastel}>LEFT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>Pedrito & Guisy,</span>{' '}
            Afro Cubana - CONGO PALO (3)
          </td>
          <td>CENTRAL ROOM</td>
        </tr>
        <tr className={pastel}>
          <td>
            <span className={blockTextInlineDesktop}>Georges & Laura,</span>{' '}
            Kizomba (1)
          </td>
          <td>RIGHT ROOM</td>
        </tr>
        <tr>
          <td>
            <span className={blockTextInlineDesktop}>
              Adolfo & Lorenita LSD,
            </span>{' '}
            PW On2 (3)
          </td>
          <td>ARC EN CIEL ROOM</td>
        </tr>

        {/* <tr className={getOut}>
          <td>
            18:40 <span className={blockText}>- </span>
            19:40
          </td>
          <td colSpan="2">
            <Trans>PERFORMANCE REHEARSAL</Trans>
          </td>
        </tr> */}
      </tbody>
    </table>
  </div>
));

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
