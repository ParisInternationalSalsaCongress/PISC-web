import React from "react";
import Link from "gatsby-link";

import imgCover from "../assets/bg-yamulee-01.jpg";
import imgCover02 from "../assets/bg-yamulee-02.jpg";

const Cover = props => (
  <div
    style={{
      // backgroundColor: "#006158",
      backgroundColor: "rgba(0, 97, 88, 0.6)",
      // marginTop: "-1.45rem",
      marginBottom: "1.45rem",
      height: "100vh",
      backgroundImage: `url(${imgCover})`,
      // backgroundImage: `url(${imgCover02})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      position: "relative"
    }}
  />
);

export default Cover;
