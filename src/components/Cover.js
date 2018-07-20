import React, { Component } from "react";
import Link from "gatsby-link";

import Slider from "react-slick";

import imgCover from "../assets/bg-yamulee-01.jpg";
import imgCover01 from "../assets/cover-01.jpg";
import imgCover02 from "../assets/cover-02.jpg";
import imgCover03 from "../assets/cover-03.jpg";
import imgCover04 from "../assets/cover-04.jpg";
import imgCover05 from "../assets/cover-05.jpg";
import imgCover06 from "../assets/cover-06.jpg";

const Cover = props => (
  <div
    style={{
      backgroundColor: "#006158",
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

export class CoverSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div
        style={{
          backgroundColor: "#006158",
          backgroundColor: "rgba(0, 97, 88, 0.6)",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <Slider {...settings}>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover01})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover02})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover03})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover04})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover06})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "#006158",
                backgroundColor: "rgba(0, 97, 88, 0.6)",
                height: "100vh",
                backgroundImage: `url(${imgCover05})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Cover;
