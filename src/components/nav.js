import React from 'react';
import { Link } from 'gatsby';
import { Trans, withI18n } from '@lingui/react';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';

import { PISC_TOWER } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, GREEN_LIGHT, DARK, SANS_SERIF_FONTS } from '../utils/vars';


const PiscLogo = css`
  fill: white;
  width: auto;
  height: 60px;
  transition: .300s ease-in;
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
  padding: 0px 1.0875rem;
  background-color: ${rgba(PRIMARY_COLOR, .8)};
  border-bottom: 1px solid ${PRIMARY_COLOR};

`;

const navLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0 0.45rem;
  outline: 0;
  height: inherit;
  color: white;
  transition: .300s ease-in;
  font-family: ${SANS_SERIF_FONTS};
  font-size: 1.3rem;
  text-decoration: none;
  text-align: center;
  position: relative;
  cursor: pointer;

  &:hover  {
    color: ${DARK};
  }

  @media (min-width: 768px) {
   flex-direction: row;
  }

`;

const navLinkSpan = css`
  font-size: 1rem;
  @media (min-width: 768px) {
   font-size: inherit;
  }
`;

const subNavList = css`
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  display: none;
  background-color: ${rgba(PRIMARY_COLOR, .8)};
  transition: .300s ease-in;

  .${navLink}:hover & {
    display: block;
  }

  &:hover {
    color: ${DARK};
    background-color: ${GREEN_LIGHT};
  }
`;

const subNavListLink = css`
  display: block;
  color: white;
  width: 100%;
  transition: .300s ease-in;
  font-family: ${SANS_SERIF_FONTS};
  text-align: center;
  // font-size: 1.3rem;
  padding: 0.45rem;
  text-decoration: none;
  &:hover {
    color: ${DARK};
  }
`;



const secondaryBtn = css`
  color: white;
  transition: .300s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: .8rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${lighten(.1, SECONDARY_COLOR)};
  }
  
`

const isTablet = css`
  display: none;
  @media (min-width: 768px) {
   display: block
  }
`


const Navbase = ({children, className, ...navAttributes}) => (
  <nav className={className} {...navAttributes}>
    {children}
  </nav>
)


const NavBar = ({i18n}) => (
  <Navbase className={navStyle}>
    <Link
      to="/"
      className={navLink}
    >
      <PISC_TOWER className={PiscLogo} />
    </Link>

    <button
      className={navLink}
    >
      <Trans>preparties</Trans>
      <span className={navLinkSpan}>
        <Trans>preparties_date</Trans>
      </span>
    </button>
    <button
      className={navLink}
    >
      <Trans>congress</Trans>
      <span className={navLinkSpan}>
        <Trans>congress_date</Trans>
      </span>
      <ul className={subNavList}>
        <li>
          <Link
            to={i18n.t`/venue`}
            className={subNavListLink}
          >
            <Trans>the venue</Trans>
          </Link>
        </li>
      </ul>
    </button>

    <a className={css`${secondaryBtn} ${isTablet}`} href="https://www.billetweb.fr/pisc-2019">
      <Trans>buy your pass</Trans>
    </a>
  </Navbase>
)


export default withI18n()(NavBar);