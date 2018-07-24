import React from "react";
import Link from "gatsby-link";
import Logo from "../assets/PISC2019-Jungle-logo.svg";

const Header = props => (
  <div
    style={{
      marginBottom: "1.45rem",
      position: "absolute",
      top: "18vh",
      left: 0,
      userSelect: "none",
      width: "100%",
      zIndex: 1,
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        userSelect: "none",
        padding: "0.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", userSelect: "none" }}>
        <Link
          to="/"
          style={{
            color: "white",
            userSelect: "none",
            textDecoration: "none",
            filter: "drop-shadow(8px 8px 12px #006158)"
          }}
        >
          <img
            src={Logo}
            alt={"Paris International Salsa Congress 2019"}
            style={{ width: "auto", userSelect: "none", maxWidth: "600px", maxHeight: '60vh' }}
          />
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
