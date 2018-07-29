import React from "react";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";
import Helmet from "react-helmet";

const IndexPage = () => (
  <div>
    <Helmet
      meta={[
        {
          name: "description",
          content:
            "The Paris International Salsa Congress, it’s more than 2000 passionnate and generous dancers coming from all over the world to gather and share their Love of the Latin dances such as salsa, bachata and kizomba !"
        },
        {
          property: "og:description",
          content:
            "The Paris International Salsa Congress, it’s more than 2000 passionnate and generous dancers coming from all over the world to gather and share their Love of the Latin dances such as salsa, bachata and kizomba !"
        },
        {
          property: "og:title",
          content:
            "4th edition “JUNGLE” 16 - 22 april | Paris International Salsa Congress 2019"
        },
        {
          name: "keywords",
          content:
            "Salsa, bachata, kizomba, mambo, salsa congress, salsa festival"
        }
      ]}
    >
      <title>4th edition “JUNGLE” 16 - 22 april</title>
    </Helmet>
    <h1 style={{ textAlign: "center", color: "#006158" }}>
      The PISC <br /> Paris International Salsa Congress
    </h1>

    <p>
      The Paris International Congress brings together over 2000 generous and
      passionate dancers coming from all around the world to share through
      salsa, bachata and kizomba and enjoy this wonderful capital.
    </p>
    <p>
      The PISC is also the opportunity to visit the most beautiful city in the
      world. Pre-parties are organized for the three days preceding the congress
      so that our international friends coming to enjoy the charms of the French
      capital can get to know each other and benefit from memorable dance
      evenings.
    </p>
    <p>
      Our wish is for the PISC to capture and reflect the image of PARIS:
      Professionnal, Amusing, Responsive, Innovating and Sumptuous.
    </p>

    <h2 style={{ textAlign: "center", color: "#006158" }}>
      The 2019 edition of the PISC is « JUNGLE »
    </h2>
    <p>
      We are numerous and highly diverse. Each person has their own identity
      shaped by their heritage, personality, story, culture, style and physique,
      all of which make him/her unique.
    </p>
    <p>
      We would like to witness this diversity as we would for animals in a
      jungle, each with its own behaviour, place, role and interest in the
      animal kingdom.
    </p>
    <p>
      We wish to reproduce this jungle by awakening the primary instinct dormant
      in all of us ... that reveals itself on the dance floor when a salsa,
      bachata or kizomba is heard!
    </p>
    <p>
      If, like us, you wish to cultivate these differences and let go, come
      experience the jungle through our shared passion: dance !
    </p>
    <div style={{ textAlign: "center", marginTop: "3.45rem" }}>
      <a
        style={{
          background: "#fe5b0b",
          fontSize: "22px",
          color: "white",
          textDecoration: "none",
          padding: "10px 16px",
          borderRadius: 4
        }}
        href="https://www.billetweb.fr/pisc-2019"
      >
        Buy your PASS
      </a>
    </div>
    <div style={{ textAlign: "center", marginTop: "3.45rem" }}>
      <h2 style={{ textAlign: "center", color: "#006158" }}>
        LINE UP
      </h2>
      <p>
        MAMBO // Eddie Torres "Mambo King" & Eddie Torres Jr / Yamulee / Rodrigo &
        Bersy / Karel Flores / Alegria / Griselle Ponce / Adolfo Indacochea and
        Latin Soul Dancer / Talal & Edyta / Terry & Cécile / / Adrián y Anita /
        Mitsue & Monica / Karen & Ricardo / Jose Diaz & Nerea / Leon Rose
        Project / Aude M. / Latin Passion Group / <em>NEW</em> // Ernesto & Denisse /
        Groupo Alafia / Jessica Quiles /
      </p>
      <p>
        CUBAN // Pedrito & Giusy / Elegua / <em>NEW</em> // Wilmer & Maria / Yusimi Moya
        Rodriguez /
      </p>
      <p>
        BACHATA // Alex & Desiree / <em>NEW</em> // Marco & Sarah / Korke & Judith /
      </p>
      <p>KIZOMBA // George & Laura /</p>
      <p>
        DJ'S MAMBO // Dj Gabriel / Dj Willy "Viper" / Dj Mulato / Dj Cycy / Dj
        Phil & Madj / Dj 69 / Dj Loic / Dj Asmadi / Dj Vincent // CUBAN // Dj
        Didi // BACHATA // Dj Latino Boy // KIZOMBA // Dj Hugo Boss / <em>NEW</em> // Dj
        Madiss /
      </p>
      <p>
        PHOTO // Valentin Behringer / Alfil Régis / Luka Kivela // VIDEO //
        Steve Starmambo / Marty DPone /
      </p>
    </div>
    {/* <div style={{ textAlign: "center", marginTop: "3.45rem" }}>
      <h2 style={{ textAlign: "center", color: "#006158" }}>
        Artists list (not limited)
      </h2>
      <p>
        Groupo Alafia | Jessica Quiles | Rodrigo Cortazar y Bersy Cortez | Karel
        Flores | Alegria | Griselle Ponce
        <br /> Eddie Torres & Eddie Torres JR | Adolfo Indacochea and Latin Soul
        Dancers<br />
        Wilmer & Maria | Pedrito & Giusy | Yusimi Moya Rodriguez <br />
        Talal & Edyta | Terry & Cécile | Yamulee | Adrián y Anita | Mitsue &
        Monica | Karen & Ricardo | Alex & Desiree | Ernesto & Denisse
      </p>
    </div> */}
  </div>
);

export default IndexPage;
