import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { tint } from 'polished';

import { SECONDARY_COLOR, PRIMARY_COLOR } from '../utils/vars';

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
  height: 30vh;
`;

const prepartiesBanner = css`
  padding-top: 80px;
`;

const locationMaker = css`
  width: 14px;
  height: 14px;
  fill: currentColor;
`;

const time = css`
  display: table-row;
  // margin-bottom: 0.75rem;
  margin: 1rem;
  span {
    display: table-cell;
    line-height: 1.4;
    padding-bottom:  0.55rem;
    &:nth-child(odd) {
      padding-right: 0.75rem;
      width: 46%;
      font-weight: 500;
      @media (min-width: 768px) {
        width: 40%;
      }
    }
  }
`;

const title = css`
  color: ${PRIMARY_COLOR};
  font-weight: 500;
  margin-bottom: 0;
`;

const spaceTop = css`
  padding-top: 2.45rem;
`;

const ProgramPage = ({ i18n, data }) => (
  <Layout>
    <Helmet meta={[{ name: 'description', content: i18n.t`program_text_I` }]}>
      <html lang={i18n.language} />
      <title>{i18n.t`Program`}</title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <div className={prepartiesBanner}>
        <Img fluid={data.imageProgram00.childImageSharp.fluid} />
      </div>
    </header>
    <div className={`${container} ${spaceTop}`}>
      <h1 className={title}>
        <Trans>Friday, April 19th</Trans>
      </h1>
    </div>
    <div>
      <Img fluid={data.imageProgram01.childImageSharp.fluid} />
    </div>
    <div className={`${container} ${spaceTop}`}>
      <p>
        <strong>Dress code</strong>: <Trans>program_text_I-slogan</Trans> <br />
        <Trans>program_text_I</Trans>
      </p>
      <br />
      <p className={time}>
        <span>
          <Trans>1 PM - 6 AM</Trans>
        </span>
        <span>
          <Trans>PISC Registration is open non-stop</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>2 PM - 6:30 PM</Trans>
        </span>
        <span>Workshops</span>
      </p>
      <p className={time}>
        <span>
          <Trans>6:30 PM - 10 PM</Trans>
        </span>
        <span>
          <Trans>Break</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10 PM - 7:30 AM</Trans>
        </span>
        <span>
          <Trans>Cloakroom open</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10:30 PM</Trans>
        </span>
        <span>
          <Trans>Opening of the Shows Room</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>11 PM - 12:30 AM</Trans>
        </span>
        <span>Shows</span>
      </p>
      <p className={time}>
        <span>
          <Trans>12:30 AM - 7 AM</Trans>
        </span>
        <span>
          <Trans>Party</Trans>
        </span>
      </p>
    </div>
    <div className={`${container} ${spaceTop}`}>
      <h1 className={title}>
        <Trans>Saturday, April 20th</Trans>
      </h1>
    </div>
    <div>
      <Img fluid={data.imageProgram02.childImageSharp.fluid} />
    </div>
    <div className={`${container} ${spaceTop}`}>
      <p>
        <strong>Dress code</strong>: <Trans>program_text_II-slogan</Trans>{' '}
        <br />
        <Trans>program_text_II</Trans>
      </p>
      <br />
      <p className={time}>
        <span>
          <Trans>10 AM - 6 AM</Trans>
        </span>
        <span>
          <Trans>PISC Registration is open non-stop</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10:30 AM - 12:40 PM</Trans>
        </span>
        <span>Workshops</span>
      </p>
      <p className={time}>
        <span>
          <Trans>12:40 PM - 2 PM</Trans>
        </span>
        <span>
          <Trans>Lunch break</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>2 PM - 6:30 PM</Trans>
        </span>
        <span>Workshops</span>
      </p>
      <p className={time}>
        <span>
          <Trans>4:30 PM - 8 PM</Trans>
        </span>
        <span>Social Lounge</span>
      </p>
      <p className={time}>
        <span>
          <Trans>8 PM - 10 PM</Trans>
        </span>
        <span>
          <Trans>Break</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10 PM - 7:30 AM</Trans>
        </span>
        <span>
          <Trans>Cloakroom open</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10:30 PM</Trans>
        </span>
        <span>
          <Trans>Opening of the Shows Room</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>11 PM - 1 AM</Trans>
        </span>
        <span>Shows</span>
      </p>
      <p className={time}>
        <span>
          <Trans>1 AM - 7 AM</Trans>
        </span>
        <span>
          <Trans>Party</Trans>
        </span>
      </p>
    </div>

    <div className={`${container} ${spaceTop}`}>
      <h1 className={title}>
        <Trans>Sunday, April 21st</Trans>
      </h1>
    </div>
    <div>
      <Img fluid={data.imageProgram03.childImageSharp.fluid} />
    </div>
    <div className={`${container} ${spaceTop}`}>
      <p>
        <strong>Dress code</strong>: <Trans>program_text_III-slogan</Trans>{' '}
        <br />
        <Trans>program_text_III</Trans>
      </p>
      <br />
      <p className={time}>
        <span>
          <Trans>10 AM - 6 AM</Trans>
        </span>
        <span>
          <Trans>PISC Registration is open non-stop</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10:30 AM - 12:40 PM</Trans>
        </span>
        <span>Workshops</span>
      </p>
      <p className={time}>
        <span>
          <Trans>12:40 PM - 2 PM</Trans>
        </span>
        <span>
          <Trans>Lunch break</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>2 PM - 6:30 PM</Trans>
        </span>
        <span>Workshops</span>
      </p>
      <p className={time}>
        <span>
          <Trans>4:30 PM - 8 PM</Trans>
        </span>
        <span>Social Lounge</span>
      </p>
      <p className={time}>
        <span>
          <Trans>8 PM - 10 PM</Trans>
        </span>
        <span>
          <Trans>Break</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10 PM - 7:30 AM</Trans>
        </span>
        <span>
          <Trans>Cloakroom open</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>10:30 PM</Trans>
        </span>
        <span>
          <Trans>Opening of the Shows Room</Trans>
        </span>
      </p>
      <p className={time}>
        <span>
          <Trans>11 PM - 12:30 AM</Trans>
        </span>
        <span>Shows</span>
      </p>
      <p className={time}>
        <span>
          <Trans>12:30 AM - 7 AM</Trans>
        </span>
        <span>
          <Trans>Party</Trans>
        </span>
      </p>
    </div>
  </Layout>
);

export default withI18n()(ProgramPage);

export const ProgramImage = graphql`
  fragment ProgramImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const ProgramQuery = graphql`
  query {
    imageProgram00: file(relativePath: { eq: "cover/Main-Visual.jpg" }) {
      ...ProgramImage
    }
    imageProgram01: file(relativePath: { eq: "program/friday.jpg" }) {
      ...ProgramImage
    }
    imageProgram02: file(relativePath: { eq: "program/saturday.jpg" }) {
      ...ProgramImage
    }
    imageProgram03: file(relativePath: { eq: "program/sunday.jpg" }) {
      ...ProgramImage
    }
  }
`;
