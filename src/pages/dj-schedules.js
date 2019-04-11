import React from 'react';
import { graphql, Link } from 'gatsby';
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

import Layout from '../components/layout';
import NavBar from '../components/nav';
import { SocialLoungeSchedule } from './social-lounge';

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

const DjSchedulesPage = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`program_text_I` }]}>
      <html lang={i18n.language} />
      <title>{i18n.t`DJ Schedules`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <Img fluid={data.image00.childImageSharp.fluid} className={cover} />
    </header>
    <div className={container}>
      <h3 className={title}>
        <Trans>DJs MAMBO & BACHATA</Trans>
      </h3>
      <p className={warn}>
        <Trans>Workshops_warn</Trans>
      </p>
      <DJFridaysMamboBachataSchedule />
      <DJSaturdayMamboBachataSchedule />
      <DJSundayMamboBachataSchedule />
      <br />
      <br />
      <h3 className={title}>
        <Trans>DJs CUBANA & KIZOMBA</Trans>
      </h3>
      <DJFridaysCubanaKizSchedule />
      <DJSaturdayCubanaKizSchedule />
      <DJSundayCubanaKizSchedule />
      <br />
      <br />
      <h3 className={title}>
        <Trans>Social Lounge</Trans>*
      </h3>
      <p>
        *<Link to={i18n.t`/social-lounge`}>See more details…</Link>
      </p>
      <SocialLoungeSchedule />
    </div>
  </Layout>
);

export default withI18n()(DjSchedulesPage);

const DJFridaysMamboBachataSchedule = withI18n()(({ i18n }) => (
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
            <Trans>Party</Trans>
          </th>
        </tr>
        <tr>
          <th colSpan="3">
          <Trans>Friday, April 19th</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>MAMBO</Trans>
          </th>
          <th>
            <Trans>BACHATA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            02:00
          </td>
          <td>Dj Phil</td>
          <td rowSpan="3">DJ Latino Boy</td>
        </tr>
        <tr className={pastel}>
          <td>
            02:00 <span className={blockTextInlineDesktop}>- </span>
            03:00
          </td>
          <td>Dj Gabriel</td>
        </tr>
        <tr>
          <td>
            03:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj 69</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            05:00
          </td>
          <td>Dj Ajad</td>
          <td rowSpan="3">DJ El Hombre</td>
        </tr>
        <tr>
          <td>
            05:00 <span className={blockTextInlineDesktop}>- </span>
            06:00
          </td>
          <td>Dj Cycy</td>
        </tr>
        <tr className={pastel}>
          <td>
            06:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Vincent</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const DJSaturdayMamboBachataSchedule = withI18n()(({ i18n }) => (
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
        {/* <tr className={highlight}>
          <th colSpan="3">
            <Trans>Party</Trans>
          </th>
        </tr> */}
        <tr>
          <th colSpan="3">
            <Trans>Saturday, April 20th</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>MAMBO</Trans>
          </th>
          <th>
            <Trans>BACHATA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            02:00
          </td>
          <td>Dj Oj</td>
          <td rowSpan="3">DJ El Hombre</td>
        </tr>
        <tr className={pastel}>
          <td>
            02:00 <span className={blockTextInlineDesktop}>- </span>
            03:00
          </td>
          <td>Dj Gabriel</td>
        </tr>
        <tr>
          <td>
            03:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj Ajad</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            05:00
          </td>
          <td>Dj Mulato</td>
          <td rowSpan="3">DJ Latino Boy</td>
        </tr>
        <tr>
          <td>
            05:00 <span className={blockTextInlineDesktop}>- </span>
            06:00
          </td>
          <td>Dj Vincent</td>
        </tr>
        <tr className={pastel}>
          <td>
            06:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Cycy</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const DJSundayMamboBachataSchedule = withI18n()(({ i18n }) => (
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
        {/* <tr className={highlight}>
          <th colSpan="3">
            <Trans>Party</Trans>
          </th>
        </tr> */}
        <tr>
          <th colSpan="3">
            <Trans>Sunday, April 21st</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>MAMBO</Trans>
          </th>
          <th>
            <Trans>BACHATA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            02:00
          </td>
          <td>Dj Madj</td>
          <td rowSpan="3">DJ Latino Boy</td>
        </tr>
        <tr className={pastel}>
          <td>
            02:00 <span className={blockTextInlineDesktop}>- </span>
            03:00
          </td>
          <td>Dj Ajad</td>
        </tr>
        <tr>
          <td>
            03:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj Mulato</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            05:00
          </td>
          <td>Dj Loic</td>
          <td rowSpan="3">DJ El Hombre</td>
        </tr>
        <tr>
          <td>
            05:00 <span className={blockTextInlineDesktop}>- </span>
            06:00
          </td>
          <td>Dj El Clasico</td>
        </tr>
        <tr className={pastel}>
          <td>
            06:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Asmadi</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const DJFridaysCubanaKizSchedule = withI18n()(({ i18n }) => (
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
            <Trans>Party</Trans>
          </th>
        </tr>
        <tr>
          <th colSpan="3">
            <Trans>Friday, April 19th</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>CUBANA</Trans>
          </th>
          <th>
            <Trans>KIZOMBA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj Didi</td>
          <td>DJ Hugo Boss</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Teo d'Oro</td>
          <td>DJ Madiss</td>
        </tr>
      </tbody>
    </table>
  </div>
));
const DJSaturdayCubanaKizSchedule = withI18n()(({ i18n }) => (
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
        {/* <tr className={highlight}>
          <th colSpan="3">
            <Trans>Party</Trans>
          </th>
        </tr> */}
        <tr>
          <th colSpan="3">
            <Trans>Saturday, April 20th</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>CUBANA</Trans>
          </th>
          <th>
            <Trans>KIZOMBA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj Teo d'Oro</td>
          <td>DJ Madiss</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Didi</td>
          <td>DJ Hugo Boss</td>
        </tr>
      </tbody>
    </table>
  </div>
));
const DJSundayCubanaKizSchedule = withI18n()(({ i18n }) => (
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
        {/* <tr className={highlight}>
          <th colSpan="3">
            <Trans>Party</Trans>
          </th>
        </tr> */}
        <tr>
          <th colSpan="3">
            <Trans>Sunday, April 21st</Trans>
          </th>
        </tr>
        <tr className={highlight}>
          <th>
            <Trans>Time</Trans>
          </th>
          <th>
            <Trans>CUBANA</Trans>
          </th>
          <th>
            <Trans>KIZOMBA</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={pastel}>
          <td>
            23:00 <span className={blockTextInlineDesktop}>- </span>
            01:00
          </td>
          <td colSpan="2">
            <Trans>SHOW TIME</Trans>
          </td>
        </tr>
        <tr>
          <td>
            01:00 <span className={blockTextInlineDesktop}>- </span>
            04:00
          </td>
          <td>Dj Didi</td>
          <td>DJ Hugo Boss</td>
        </tr>
        <tr className={pastel}>
          <td>
            04:00 <span className={blockTextInlineDesktop}>- </span>
            07:00
          </td>
          <td>Dj Teo d'Oro</td>
          <td>DJ Madiss</td>
        </tr>
      </tbody>
    </table>
  </div>
));


export const djSchedulesImage = graphql`
  fragment djSchedulesImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const djSchedulesQuery = graphql`
  query {
    image00: file(relativePath: { eq: "cover/dj-schedules-cover-00.jpg" }) {
      ...djSchedulesImage
    }
    image01: file(relativePath: { eq: "cover/dj-schedules-cover.jpg" }) {
      ...djSchedulesImage
    }
  }
`;
