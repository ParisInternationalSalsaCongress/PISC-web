import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import { Trans, withI18n } from '@lingui/react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import { rgba, lighten } from 'polished';


import { SECONDARY_COLOR, PRIMARY_COLOR } from '../utils/vars';

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
          caption: 'Rodrigo & Bersy',
          imageData: data.imageRodrigoBersy.childImageSharp.fluid,
        },
        {
          caption: 'Adolfo Indacochea and his Latin Soul Dancers',
          imageData: data.imageAdolfoLD.childImageSharp.fluid,
          new: true,
          highlight: true,
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
          highlight: true,
        },
        {
          caption: 'Yamulee',
          imageData: data.imageYamulee.childImageSharp.fluid,
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
          caption: 'Jessica Quiles',
          imageData: data.imageJessica.childImageSharp.fluid,
          new: true,

        },
        {
          caption: 'Adrián y Anita',
          imageData: data.imageAdrianAninata.childImageSharp.fluid,
          highlight: true,
        },
        {
          caption: 'Groupo Alafia',
          imageData: data.imageGrupoAlafia.childImageSharp.fluid,
          new: true,
        },

        {
          caption: 'Alicia Velasco',
          imageData: data.imageAliciaVelasco.childImageSharp.fluid,
          new: true,
        },
        {
          caption: 'Ernesto & Denisse',
          imageData: data.imageErnestoDenisse.childImageSharp.fluid,
          new: true,
        },
        {
          caption: 'Jose Diaz & Nerea',
          imageData: data.imageJoseDiazNerea.childImageSharp.fluid,
          highlight: true,
        },
      ]} />

      <GridList expanded buttonText='Cubana' dataList={[
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
          imageData: data.imageMarcoSarah.childImageSharp.fluid,
        },
        {
          caption: 'Korke y Judith',
          imageData: data.imageKorkeJudith.childImageSharp.fluid,
        },
      ]} />


      <GridList expanded buttonText='Kizomba' dataList={[
        {
          caption: 'George & Laura',
          imageData: data.imageGeorgeLaura.childImageSharp.fluid,
        },
        {
          caption: 'Nuno & Nagyla',
          imageData: data.imageNunoNagyla.childImageSharp.fluid,
        },
      ]} />

      <h2 className={title}>
        DJ
      </h2>

      <GridList expanded buttonText='Mambo' dataList={[
        {
          caption: 'DJ Gabriel',
          imageData: data.imageGabriel.childImageSharp.fluid,
        },
        {
          caption: 'DJ Mulato',
          imageData: data.imageMulato.childImageSharp.fluid,
        },
        {
          caption: 'DJ Cycy',
          imageData: data.imageCycy.childImageSharp.fluid,
        },
        {
          caption: 'DJ Loic',
          imageData: data.imageLoic.childImageSharp.fluid,
        },
        {
          caption: 'DJ Ajad',
          imageData: data.imageDjAjad.childImageSharp.fluid,
        },
        {
          caption: 'DJ Phil',
          imageData: data.imagePhil.childImageSharp.fluid,
        },
        {
          caption: 'DJ Madj',
          imageData: data.imageMadj.childImageSharp.fluid,
        },
         {
          caption: 'DJ 69',
          imageData: data.imageDj69.childImageSharp.fluid,
        },
        {
          caption: 'DJ Asmadi',
          imageData: data.imageAsmadi.childImageSharp.fluid,
        },
        {
          caption: 'DJ Vincent',
          imageData: data.imageVincent.childImageSharp.fluid,
        },
      ]} />

      <GridList expanded buttonText='Cubana' dataList={[
        {
          caption: 'DJ Didi',
          imageData: data.imageDJdidi.childImageSharp.fluid,
        },
        {
          caption: 'Dj Teo d\'Oro',
          imageData: data.imageDjTeo.childImageSharp.fluid,
        },
      ]} />

      <GridList expanded buttonText='Bachata' dataList={[
        {
          caption: 'DJ Latino Boy',
          imageData: data.imageLatinoBoy.childImageSharp.fluid,
        },
        {
          caption: 'DJ El Hombre',
          imageData: data.imageElHombre.childImageSharp.fluid,
        },
      ]} />

      <GridList expanded buttonText='Kizomba' dataList={[
        {
          caption: 'DJ Hugo Boss',
          imageData: data.imageDJHugoBoss.childImageSharp.fluid,
        },
        {
          caption: 'DJ Madiss',
          imageData: data.imageDJMadiss.childImageSharp.fluid,
          new: true,
        },
      ]} />

      <h2 className={title}>
        MULTIMEDIA
      </h2>


      <GridList expanded buttonText='Video' dataList={[
        {
          caption: 'Steve Starmambo',
          imageData: data.imageSteveStarmambo.childImageSharp.fluid,
        },
        {
          caption: 'Marty DPone',
          imageData: data.imageMartyDPone.childImageSharp.fluid,
        },
      ]} />


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
    imageAliciaVelasco: file(relativePath: {eq: "artists/mambo/AliciaVelasco.jpg"}) {
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
    imageKorkeJudith: file(relativePath: {eq: "artists/bachata/Korke&Judith.jpg"}) {
      ...lineupImage
    }
    imageMarcoSarah: file(relativePath: {eq: "artists/bachata/Marco&Sarah.jpg"}) {
      ...lineupImage
    }
    imageGeorgeLaura: file(relativePath: {eq: "artists/kizomba/George&Laura.jpg"}) {
      ...lineupImage
    }
    imageNunoNagyla: file(relativePath: {eq: "artists/kizomba/Nuno&Nagyla.jpg"}) {
      ...lineupImage
    }
    imageDJHugoBoss: file(relativePath: {eq: "DJs/kizomba/HugoBoss.jpg"}) {
      ...lineupImage
    }
    imageDJMadiss: file(relativePath: {eq: "DJs/kizomba/Madiss.jpg"}) {
      ...lineupImage
    }
    imageDJdidi: file(relativePath: {eq: "DJs/cuba/Didi.jpg"}) {
      ...lineupImage
    }
    imageDjTeo: file(relativePath: {eq: "DJs/cuba/DjTeo.jpg"}) {
      ...lineupImage
    }
    imageLatinoBoy: file(relativePath: {eq: "DJs/bachata/LatinoBoy.jpg"}) {
      ...lineupImage
    }
    imageElHombre: file(relativePath: {eq: "DJs/bachata/ElHombre.jpg"}) {
      ...lineupImage
    }
    imageGabriel: file(relativePath: {eq: "DJs/mambo/Gabriel.jpg"}) {
      ...lineupImage
    }
    imageMulato: file(relativePath: {eq: "DJs/mambo/Mulato.jpg"}) {
      ...lineupImage
    }
    imagePhil: file(relativePath: {eq: "DJs/mambo/Phil.jpg"}) {
      ...lineupImage
    }
    imageCycy: file(relativePath: {eq: "DJs/mambo/Cycy.jpg"}) {
      ...lineupImage
    }
    imageMadj: file(relativePath: {eq: "DJs/mambo/Madj.jpg"}) {
      ...lineupImage
    }
    imageDjAjad: file(relativePath: {eq: "DJs/mambo/DjAjad.jpg"}) {
      ...lineupImage
    }
    imageDj69: file(relativePath: {eq: "DJs/mambo/Dj69.jpg"}) {
      ...lineupImage
    }
    imageAsmadi: file(relativePath: {eq: "DJs/mambo/Asmadi.jpg"}) {
      ...lineupImage
    }
    imageLoic: file(relativePath: {eq: "DJs/mambo/Loic.jpg"}) {
      ...lineupImage
    }
    imageVincent: file(relativePath: {eq: "DJs/mambo/Vincent.jpg"}) {
      ...lineupImage
    }
    imageSteveStarmambo: file(relativePath: {eq: "multimedia/video/SteveStarmambo.jpg"}) {
      ...lineupImage
    }
    imageMartyDPone: file(relativePath: {eq: "multimedia/video/MartyDPone.jpg"}) {
      ...lineupImage
    }

  }

`;
