import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { Trans, withI18n } from '@lingui/react';
import { rgba } from 'polished';
import {
  Facebook,
  FacebookGroup,
  Instagram,
  Youtube,
  MouazeProd,
  YoshiProd,
  WorldMap,
  Phone,
  Envelope,
} from '../utils/svg';

import { FOOTER_BG, DARK } from '../utils/vars';



const footerStyle = css`
  background-color: ${rgba(FOOTER_BG, .8)};
  padding: 1.45rem 1.0875rem;
  position: relative;
`;
const row = css`
  display: flex;
  flex-wrap: wrap;
`;
const copyrightSection = css`
  // padding: 0.45rem;
`;
const socialBtn = css`
  display: inline-block;
  padding: 0.45rem;
`;
const socialIcon = css`
  fill: ${DARK};
  width: 42px;
  height: 42px;
  transition: 0.30s ease-in;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const languageLink = css`
  display: inline-flex;
  align-items: center;
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
    <div className={row}>
      <section
        className={css`
          margin-bottom: 0.45rem;
          margin-right: 3.0875rem
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
          {i18n.t`Contact us`}
        </h4>
        <a
          href="mailto:pisc@mouaze.com"
          rel="noreferrer"
          target="_blank"
          className={socialBtn}
        >
          <Envelope className={socialIcon} />
        </a>
        <a
          href="tel:+33614091946"
          rel="noreferrer"
          target="_blank"
          className={socialBtn}
        >
          <Phone className={socialIcon} />
        </a>
      </section>
    </div>

    <section
      className={css`
        margin-bottom: 0.45rem;
      `}
    >
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
    <section className={copyrightSection}>
      <span>&copy; &nbsp;Paris International Salsa Congress {new Date().getFullYear()}</span>
    </section>
  </footer>
);

export default withI18n()(Footer);
