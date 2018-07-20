import React from "react";
import Link from "gatsby-link";
import Logo from "../assets/PISC2019-Jungle-logo.svg";

const Header = props => (
  <div
    style={{
      // background: "#006158",
      marginBottom: "1.45rem",
      position: "absolute",
      top: "32vh",
      left: 0,
      width: "100%",
      zIndex: 2
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        padding: "0.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", userSelect: "none" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            filter: "drop-shadow(8px 8px 12px #006158)"
          }}
        >
          <img
            src={Logo}
            alt={"Paris International Salsa Congress 2019"}
            style={{ width: "80%", userSelect: "none", maxWidth: "500px" }}
          />
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
