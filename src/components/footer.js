import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { Trans, withI18n } from '@lingui/react';

import {
  Facebook,
  FacebookGroup,
  Instagram,
  Youtube,
  MouazeProd,
  YoshiProd,
  WorldMap,
} from '../utils/svg';

import { FOOTER_BG, SNOW_COLOR, QUINARY_COLOR, DARK } from '../utils/vars';



const footerStyle = css`
  background-color: ${FOOTER_BG};
  padding: 1.45rem 1.0875rem;
  position: relative;
`;
const copyrightSection = css`
  display: flex;
  flew-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem;
`;
const socialBtn = css`
  display: inline-block;
  padding: 0.45rem;
`;
const socialIcon = css`
  fill: ${DARK};
  width: 42px;
  height: 42px;
  transition: 0.35s ease-in;
  &:hover {
    opacity: 0.6;
  }
`;
const PromoterIcon = css`
  position: absolute;
  right: 0.45rem;
  top: 0;
  fill: ${DARK};
  width: 100px;
  height: 100px;
  opacity: 0.6;
`;
const PromoterMouaze = css`
  right: calc(0.45rem + 100px);
`;
const PromoterYoshy = css`
  right: 0rem;
`;
const worldMap = css`
  width: 16px;
  height: 16px;
`;
const languageWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const languageLink = css`
  display: inline-flex;
  align-items: center;
  margin-left: .45rem;
  text-decoration: none;
  color: ${DARK};
  margin-left: .45rem;
  transition: 0.35s ease-in;
  &:hover {
    opacity: 0.6;
  }
`;

const Footer = ({ i18n}) => (
  <footer className={footerStyle}>
    <MouazeProd className={`${PromoterIcon} ${PromoterMouaze}`} />
    <YoshiProd className={`${PromoterIcon} ${PromoterYoshy}`} />
    <section
      className={css`
        margin-bottom: 0.45rem;
      `}
    >
      <h4
        className={css`
          color: ${DARK};
        `}
      >
        {i18n.t`Follow us`}
      </h4>
      <a
        href="//www.facebook.com/ParisSalsaC"
        rel="noreferrer"
        target="_blank"
        className={socialBtn}
      >
        <Facebook className={socialIcon} />
      </a>
      <a
        href="//www.facebook.com/groups/451496571707555/"
        rel="noreferrer"
        target="_blank"
        className={socialBtn}
      >
        <FacebookGroup className={socialIcon} />
      </a>
      <a
        href="//www.instagram.com/parissalsacongress/"
        rel="noreferrer"
        target="_blank"
        className={socialBtn}
      >
        <Instagram className={socialIcon} />
      </a>
      <a
        href="//www.youtube.com/channel/UCbEW-8_ltbYXaE4Q4xQMBtw/"
        rel="noreferrer"
        target="_blank"
        className={socialBtn}
      >
        <Youtube className={socialIcon} />
      </a>
    </section>

    <section className={copyrightSection}>
      <span>&copy; Paris International Salsa Congress {new Date().getFullYear()}</span>
      <div className={languageWrapper}>
        <WorldMap className={worldMap} />
        {
          i18n.language === 'en' ? (
            <Link className={languageLink} to="/fr/">
              <Trans>French</Trans>
            </Link>
          ) : (
            <Link className={languageLink} to="/en/">
              <Trans>English</Trans>
            </Link>
          )
        }
        
        
      </div>
    </section>
  </footer>
);

export default withI18n()(Footer);
