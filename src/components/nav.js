import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Trans, withI18n } from '@lingui/react';
import { css } from 'emotion';
import { rgba, lighten, darken } from 'polished';

import { PISC_TOWER } from '../utils/svg';

import {
  SECONDARY_COLOR,
  PRIMARY_COLOR,
  GREEN_LIGHT,
  DARK,
  SNOW_COLOR,
  SANS_SERIF_FONTS,
} from '../utils/vars';

const PiscLogo = css`
  fill: ${SNOW_COLOR};
  height: 60px;
  transition: 0.3s ease-in;
  &:hover {
    fill: ${DARK};
  }
`;

const navStyle = css`
  margin: 0 auto;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  // padding: 0px 1.0875rem;
  background-color: ${rgba(PRIMARY_COLOR, 0.8)};
  border-bottom: 1px solid ${PRIMARY_COLOR};
  filter: drop-shadow(0px 2px 5px);
`;

const navLinkNew = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0px 1.0875rem;
  outline: 0;
  min-height: 80px;
  color: ${SNOW_COLOR};
  transition: .300s ease-in-out;
  font-family: ${SANS_SERIF_FONTS};
  font-size: 1.3rem;
  text-decoration: none;
  text-align: center;
  position: relative;
  cursor: pointer;

  &:hover  {
    background-color: ${darken(0.08, PRIMARY_COLOR)};
  }

  @media (min-width: 768px) {
   flex-direction: row;
  }
`;

const navLinkNewIsExpanded = css`
  background-color: ${darken(0.08, PRIMARY_COLOR)};
`;

const navLinkSpan = css`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: inherit;
    margin-left: 0.45rem;
  }
`;

const subNavListNew = css`
  color: ${SNOW_COLOR};
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${rgba(PRIMARY_COLOR, 0.8)};
  transition: 0.3s ease-in;
`;

const subNavListLink = css`
  display: block;
  color: ${SNOW_COLOR};
  width: 100%;
  transition: 0.3s ease-in;
  font-family: ${SANS_SERIF_FONTS};
  text-align: center;
  // font-size: 1.3rem;
  padding: 0.8rem 0.45rem;
  text-decoration: none;
  &:hover {
    color: ${DARK};
    background-color: ${GREEN_LIGHT};
  }
`;

const secondaryBtn = css`
  color: ${SNOW_COLOR};
  transition: 0.3s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: 0.8rem;
  margin-right: 1.3rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${lighten(0.1, SECONDARY_COLOR)};
  }
`;

const isTablet = css`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Navbase = ({ children, className, ...navAttributes }) => (
  <nav className={className} {...navAttributes}>
    {children}
  </nav>
);

class SubNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded || false,
    };
  }

  handleExpanded = e => {
    e.stopPropagation();
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const { children, btnText, btnSubText } = this.props;

    return (
      <div
        className={css`
          position: relative;
        `}
      >
        <button
          css={[navLinkNew, this.state.expanded ? navLinkNewIsExpanded : null]}
          onClick={this.handleExpanded}
        >
          {btnText}
          {btnSubText && <span className={navLinkSpan}>{btnSubText}</span>}
        </button>
        {this.state.expanded && <div className={subNavListNew}>{children}</div>}
      </div>
    );
  }
}

const NavBar = ({ i18n }) => (
  <Navbase className={navStyle}>
    <Link to="/" className={navLinkNew}>
      <PISC_TOWER className={PiscLogo} />
    </Link>

    <SubNav btnText={i18n.t`preparties`} btnSubText={i18n.t`preparties_date`}>
      <Link to={i18n.t`/16-april`} className={subNavListLink}>
        <Trans>Tuesday 16th april</Trans>
      </Link>
      <Link to={i18n.t`/17-april`} className={subNavListLink}>
        <Trans>Wednesday 17th april</Trans>
      </Link>
      <Link to={i18n.t`/18-april`} className={subNavListLink}>
        <Trans>Thursday 18th april</Trans>
      </Link>
    </SubNav>
    <SubNav btnText={i18n.t`congress`} btnSubText={i18n.t`congress_date`}>
      <Link to={i18n.t`/lineup`} className={subNavListLink}>
        <Trans>lineup</Trans>
      </Link>
      <Link to={i18n.t`/venue`} className={subNavListLink}>
        <Trans>the venue</Trans>
      </Link>
      <Link to={i18n.t`/workshops`} className={subNavListLink}>
        <Trans>Workshops</Trans>
      </Link>
      <Link to={i18n.t`/bootcamp`} className={subNavListLink}>
        <Trans>Bootcamp</Trans>
      </Link>
    </SubNav>

    <a
      className={css`
        ${secondaryBtn} ${isTablet};
      `}
      href="https://www.billetweb.fr/pisc-2019"
    >
      <Trans>buy your pass</Trans>
    </a>
  </Navbase>
);

export default withI18n()(NavBar);
