import React from "react";
import Link from "gatsby-link";
import { FormattedMessage } from 'react-intl';
import Helmet from "react-helmet";


const IndexPage = () => (
  <div>
    <Helmet
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
        <title>4éme édition “JUNGLE” 16 - 22 avril</title>
    </Helmet>
    <h1 style="text-align:center;">Le PISC <br/>Paris International Salsa Congress</h1>
    <p>
      Le Paris International Salsa Congress, c&#39;est plus de 2000 danseurs
      passionnés et généreux venant des quatre coins de la planète pour se
      rassembler et partager leur amour des danses latines : salsa, bachata et
      kizomba !
    </p>
    <p>
      Le PISC est aussi l’occasion de visiter la plus belle ville du monde. Des
      pré-soirées sont organisées les 3 jours en amont du congrès pour que nos
      amis étrangers venant découvrir les charmes de la capitale française
      puissent également profiter de soirées salsa à Paris, et faire
      connaissance avec les autres festivaliers !
    </p>
    <p>
      Nous souhaitons faire du PISC un congrès de salsa à l’image de Paris :
      Professionnel, Accueillant, Réjouissant, Innovant et Somptueux.
    </p>

    <h2 style="text-align:center;">L&#39;édition du PISC 2019 vous amène dans la « JUNGLE »</h2>
    <p>
      Nous sommes si nombreux et chacun si différents. Chaque individu a sa
      propre identité : un patrimoine, un caractère, une histoire, une culture,
      un physique, un style vestimentaire, bref des attributs qui le rendent
      unique.
    </p>
    <p>
      Nous aimons voir cette diversité telle une jungle, où ses animaux si
      différents ont tous une place et un rôle dans le règne animal.
    </p>
    <p>
      Nous souhaitons cette année que le PISC soit à l&#39;image de cette jungle
      ! Réveillons l&#39;instinct primaire qui sommeille en nous... et qui se
      révèle sur la piste de danse au son des musiques Salsa, Bachata ou Kizomba
      !
    </p>

    <p>
      Si comme nous, vous souhaitez explorer ces différences, révéler votre
      vraie nature et lâcher prise, venez vous aventurer dans notre jungle
      autour d&#39;une passion commune : la danse !
    </p>
    <div style={{textAlign: "center"}}>
      <a style={{background:"#006158",fontSize: "22px", color: "white", textDecoration: "none", padding: "10px 16px", borderRadius: 4}} href="https://www.billetweb.fr/pisc-2019">Achetez votre PASS</a>  
    </div>
  </div>
);

export default IndexPage;
