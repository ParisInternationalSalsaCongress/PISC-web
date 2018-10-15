import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';
import { StatefulToolTip } from "react-portal-tooltip"

import { PISC, PISC_TOWER, LocationMarket } from '../utils/svg';

import { SECONDARY_COLOR, PRIMARY_COLOR, SNOW_COLOR, TERTIARY_COLOR, DARK, SANS_SERIF_FONTS } from '../utils/vars';

import Layout from '../components/layout';
import NavBar from '../components/nav';
import GridList from '../components/grid-list';


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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  z-index: -1;
`;

const banner = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${rgba('white', .6)};
  color: ${SECONDARY_COLOR};
  z-index: 1;
  padding: 1rem 0;
  h1 {
    margin: 0;
    text-align: center;
  }

`;

const bannerContainer = css`
  display: flex;
  justify-content: space-between;
  // max-width: 960px;
  position: relative;
  padding: 0px 1.0875rem;
  margin: 0 auto;
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
  transition: .300s ease-in;
  background-color: ${SECONDARY_COLOR};
  font-size: 1.3rem;
  padding: .8rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1.45rem;

  .${banner} & {
    margin: 0;
  }

  &:hover {
    background-color: ${lighten(.1, SECONDARY_COLOR)};
  }

  &[disabled] {
    opacity: .6;
    &:hover {
      background-color: ${SECONDARY_COLOR};
    }
  }

`

const GridPics = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-auto-flow: dense;
  margin-bottom: 1.45rem;
}
  li {
    margin: 0;
    padding: 0;
  }
`;


const Lineup = ({ i18n, data }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: i18n.t`Hyat_page_text_3` },
      ]}
    >
      <html lang={i18n.language} />
      <title>
        {i18n.t`lineup`}
      </title>
    </Helmet>
    <header className={header}>
      <NavBar />
      <Img fluid={data.imageBG.childImageSharp.fluid} className={cover} />
      <div className={banner}>
        <div className={bannerContainer}>
          <h1>
            <Trans>lineup</Trans>
          </h1>
          <a className={secondaryBtn} href="https://www.billetweb.fr/pisc-2019">
            <Trans>buy your pass</Trans>
          </a>
        </div>
      </div>
    </header>
    <div className={container}>
      <h2 className={title}>
        LINEUP
      </h2>
      <GridList expanded buttonText='Mambo' dataList={[
        {
          caption: 'Eddie Torres "Mambo King" & Eddie Torres Jr',
          imageData: data.imageTorres.childImageSharp.fluid,
          highlight: true,
        },
        {
          caption: 'Griselle Ponce',
          imageData: data.imageGrisellePonce.childImageSharp.fluid,
        },
        {
          caption: 'Alegria',
          imageData: data.imageAlegriaDC.childImageSharp.fluid,
        },
        {
          caption: 'Karel Flores',
          imageData: data.imageKarelFlores.childImageSharp.fluid,
        },
        {
          caption: 'Talal & Edyta',
          imageData: data.imageTalalEdyta.childImageSharp.fluid,
        },
        {
          caption: 'Adolfo Indacochea and his Latin Soul Dancers',
          imageData: data.imageAdolfoLD.childImageSharp.fluid,
          new: true,
          highlight: true,
        },
        {
          caption: 'Rodrigo & Bersy',
          imageData: data.imageRodrigoBersy.childImageSharp.fluid,
        },
        {
          caption: 'Shelina \'s Team',
          imageData: data.imageShelinaTeam.childImageSharp.fluid,
        },
        {
          caption: 'Aude M.',
          imageData: data.imageAudeM.childImageSharp.fluid,
        },
        {
          caption: 'Terry & Cecile',
          imageData: data.imageTerryCecile.childImageSharp.fluid,
        },
        {
          caption: 'Kareen & Ricardo',
          imageData: data.imageKarenRicardo.childImageSharp.fluid,
        },
        {
          caption: 'Yamulee',
          imageData: data.imageYamulee.childImageSharp.fluid,
        },
        {
          caption: 'Adrián y Anita',
          imageData: data.imageAdrianAninata.childImageSharp.fluid,
        },
        {
          caption: 'Jessica Quiles',
          imageData: data.imageJessica.childImageSharp.fluid,
          new: true,
        },
        {
          caption: 'Léon Rose project',
          imageData: data.imageLeonRoseProject.childImageSharp.fluid,
        },
        {
          caption: 'Mitsue & Monica',
          imageData: data.imageMitsueMonica.childImageSharp.fluid,
        },
        {
          caption: 'Latin Passion Group',
          imageData: data.imageLatinPassionGroup.childImageSharp.fluid,
        },
        {
          caption: 'Jose Diaz & Nerea',
          imageData: data.imageJoseDiazNerea.childImageSharp.fluid,
        },
        {
          caption: 'Groupo Alafia',
          imageData: data.imageGrupoAlafia.childImageSharp.fluid,
          new: true,
        },
        {
          caption: 'Ernesto & Denisse',
          imageData: data.imageErnestoDenisse.childImageSharp.fluid,
          new: true,
        },
      ]} />

      <GridList buttonText='Cuba' dataList={[
        {
          caption: 'Alberto Valdes',
          imageData: data.imageAlberto.childImageSharp.fluid,
        },
        {
          caption: 'Pedrito y Giusy',
          imageData: data.imagePedrito.childImageSharp.fluid,
        },
        {
          caption: 'Yusimi Moya Rodriguez',
          imageData: data.imageYusimiMoyaRodriguez.childImageSharp.fluid,
          new: true,
        },
        {
          caption: 'Elegua',
          imageData: data.imageElenaThierry.childImageSharp.fluid,
        },
      ]} />

      <GridList expanded buttonText='Bachata' dataList={[
        {
          caption: 'Marco & Sarah',
          imageData: data.imageAlberto.childImageSharp.fluid,
        },
        {
          caption: 'Korke y Judith',
          imageData: data.imagePedrito.childImageSharp.fluid,
        },
      ]} />

      <h2 className={title}>
        DJ
      </h2>

      <h2 className={title}>
        MULTIMEDIA
      </h2>


    </div>

  </Layout>
);

export default withI18n()(Lineup);



export const lineupImage = graphql`
  fragment lineupImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;


export const lineupQuery = graphql`
  query {
    imageBG: file(relativePath: {eq: "cover/rodrigo_bersy_bg.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagePlaceholder: file(relativePath: {eq: "artists/user_placeholder.png"}) {
      ...lineupImage
    }
    imageRodrigoBersy: file(relativePath: {eq: "artists/mambo/rodrigo&bersy.jpg"}) {
      ...lineupImage
    }
    imageTerryCecile: file(relativePath: {eq: "artists/mambo/Terry&Cecile.jpg"}) {
      ...lineupImage
    }
    imageGrupoAlafia: file(relativePath: {eq: "artists/mambo/groupoAlafia.jpeg"}) {
      ...lineupImage
    }
    imageErnestoDenisse: file(relativePath: {eq: "artists/mambo/Ernesto&Denisse.jpg"}) {
      ...lineupImage
    }
    imageJessica: file(relativePath: {eq: "artists/mambo/JessicaQuiles.jpg"}) {
      ...lineupImage
    }
    imageAdrianAninata: file(relativePath: {eq: "artists/mambo/Adrian&Anita.jpg"}) {
      ...lineupImage
    }
    imageMitsueMonica: file(relativePath: {eq: "artists/mambo/Mitsue&Monica.jpg"}) {
      ...lineupImage
    }
    imageAdolfoLD: file(relativePath: {eq: "artists/mambo/AdolfoIndacocheaAndHisLatinSoulDancers.jpg"}) {
      ...lineupImage
    }
    imageYamulee: file(relativePath: {eq: "artists/mambo/Yamulee.jpg"}) {
      ...lineupImage
    }
    imageGrisellePonce: file(relativePath: {eq: "artists/mambo/GrisellePonce.jpg"}) {
      ...lineupImage
    }
    imageShelinaTeam: file(relativePath: {eq: "artists/mambo/ShelinaTeam.jpg"}) {
      ...lineupImage
    }
    imageTorres: file(relativePath: {eq: "artists/mambo/Torres.jpg"}) {
      ...lineupImage
    }
    imageJoseDiazNerea: file(relativePath: {eq: "artists/mambo/JoseDiaz&Nerea.jpg"}) {
      ...lineupImage
    }
    imageAlegriaDC: file(relativePath: {eq: "artists/mambo/AlegriaDC.jpg"}) {
      ...lineupImage
    }
    imageKarelFlores: file(relativePath: {eq: "artists/mambo/KarelFlores.jpg"}) {
      ...lineupImage
    }
    imageLeonRoseProject: file(relativePath: {eq: "artists/mambo/LeonRoseProject.jpg"}) {
      ...lineupImage
    }
    imageKarenRicardo: file(relativePath: {eq: "artists/mambo/Karen&Ricardo.jpg"}) {
      ...lineupImage
    }
    imageAudeM: file(relativePath: {eq: "artists/mambo/AudeM.jpg"}) {
      ...lineupImage
    }
    imageTalalEdyta: file(relativePath: {eq: "artists/mambo/Talal&Edyta.jpg"}) {
      ...lineupImage
    }
    imageLatinPassionGroup: file(relativePath: {eq: "artists/mambo/LatinPassionGroup.jpg"}) {
      ...lineupImage
    }

    imageAlberto: file(relativePath: {eq: "artists/cuba/Alberto.jpg"}) {
      ...lineupImage
    }
    imagePedrito: file(relativePath: {eq: "artists/cuba/Pedrito.jpg"}) {
      ...lineupImage
    }
    imageYusimiMoyaRodriguez: file(relativePath: {eq: "artists/cuba/YusimiMoyaRodriguez.jpg"}) {
      ...lineupImage
    }
    imageElenaThierry: file(relativePath: {eq: "artists/cuba/ElenaThierry.jpg"}) {
      ...lineupImage
    }

  }

`;
