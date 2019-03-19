import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Trans, withI18n } from '@lingui/react';
import { css } from 'emotion';
import { rgba, lighten, darken } from 'polished';

import { PISC_TOWER } from '../utils/svg';

import {
  SECONDARY_COLOR,
  PRIMARY_COLOR,
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
  padding: 0px 0.675rem;
  outline: 0;
  min-height: 80px;
  color: ${SNOW_COLOR};
  transition: 0.3s ease-in-out;
  font-family: ${SANS_SERIF_FONTS};
  font-size: 1.3rem;
  text-decoration: none;
  text-align: center;
  position: relative;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: ${darken(0.08, PRIMARY_COLOR)};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-grow: 0;
    padding: 0px 1.0875rem;
  }
`;

const navLinkNewActive = css`
  background-color: ${darken(0.08, PRIMARY_COLOR)};
  box-shadow: inset 0px 0px 6px ${darken(0.1, PRIMARY_COLOR)};
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
  transition: 0.3s ease-in-out;
  box-shadow: inset 0px 0px 6px ${darken(0.1, PRIMARY_COLOR)};
`;

const subNavListLink = css`
  display: block;
  color: ${SNOW_COLOR};
  width: 100%;
  transition: 0.3s ease-in-out;
  font-family: ${SANS_SERIF_FONTS};
  text-align: center;
  padding: 0.8rem 0.45rem;
  text-decoration: none;
  &:hover {
    background-color: ${darken(0.08, PRIMARY_COLOR)};
    transform: scale(1.15);
  }
`;

const secondaryBtn = css`
  color: ${SNOW_COLOR};
  transition: 0.3s ease-in-out;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: 0.8rem;
  margin: 0 1.3rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${lighten(0.1, SECONDARY_COLOR)};
  }
`;

const navLinkFirst = css`
  margin-left: auto;
`;

const navLinkLast = css`
  border-left: none;
  @media (min-width: 768px) {
    margin-right: 1rem;
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
    const { children, btnText, btnSubText, cssStyle } = this.props;

    return (
      <div
        css={[
          css`
            position: relative;
            border: 1px solid ${darken(0.08, PRIMARY_COLOR)};
            border-top: none;
            border-bottom: none;
            box-shadow: inset 0px 0px 6px ${darken(0.1, PRIMARY_COLOR)};
          `,
          cssStyle,
        ]}
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
    <Link to="/" className={navLinkNew} activeClassName={navLinkNewActive}>
      <PISC_TOWER className={PiscLogo} />
    </Link>

    <SubNav
      btnText={i18n.t`preparties`}
      cssStyle={navLinkFirst}
      btnSubText={i18n.t`preparties_date`}
    >
      <Link
        to={i18n.t`/16-april`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Tuesday 16th april</Trans>
      </Link>
      <Link
        to={i18n.t`/17-april`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Wednesday 17th april</Trans>
      </Link>
      <Link
        to={i18n.t`/18-april`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Thursday 18th april</Trans>
      </Link>
    </SubNav>
    <SubNav btnText={i18n.t`congress`} btnSubText={i18n.t`congress_date`}>
      <Link
        to={i18n.t`/lineup`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>lineup</Trans>
      </Link>
      <Link
        to={i18n.t`/venue`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>the venue</Trans>
      </Link>
      <Link
        to={i18n.t`/shows`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Shows</Trans>
      </Link>
      <Link
        to={i18n.t`/social-lounge`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Social Lounge</Trans>
      </Link>
      <Link
        to={i18n.t`/workshops`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Workshops</Trans>
      </Link>
      <Link
        to={i18n.t`/bootcamp`}
        activeClassName={navLinkNewActive}
        className={subNavListLink}
      >
        <Trans>Bootcamp</Trans>
      </Link>
    </SubNav>

    <Link
      to={i18n.t`/after`}
      className={navLinkNew}
      activeClassName={navLinkNewActive}
    >
      {'After'}
    </Link>

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
