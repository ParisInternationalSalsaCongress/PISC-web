import React, { Component } from "react";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import imgCover from "../assets/bg-yamulee-01.jpg";
import imgCover01 from "../assets/cover-01.jpg";
import imgCover02 from "../assets/cover-02.jpg";
import imgCover03 from "../assets/cover-03.jpg";
import imgCover04 from "../assets/cover-04.jpg";
import imgCover05 from "../assets/cover-05.jpg";


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
                backgroundPosition: "center center",
                position: "relative"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 52,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_1">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>
            </div>
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
                backgroundPosition: "center center",
                position: "relative",
              }}
            >
            <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 76,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_2">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>

            </div>
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
                backgroundPosition: "center center",
                position: "relative",
              }}
            >
            <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 76,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_3">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>

            </div>
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
                backgroundPosition: "center center",
                position: "relative",
              }}
            >
            <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 76,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_4">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>

            </div>
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
                backgroundPosition: "center center",
                position: "relative",
              }}
            >
            <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 76,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_5">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>

            </div>
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
                backgroundPosition: "center center",
                position: "relative",
              }}
            >
            <div
                style={{
                  position: "absolute",
                  zIndex: 3,
                  bottom: 0,
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  backgroundColor: "rgba(255,255,255, .5)",
                  lineHeight: 1.12,
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: 76,
                  padding: "1.0875rem"
                }}
              >
                <FormattedMessage id="slogan_6">
                  {txt => (
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#006158",
                        textTransform: "uppercase"
                      }}
                    >
                      {txt}
                    </span>
                  )}
                </FormattedMessage>

                <FormattedMessage id="buyBtn">
                  {txt => (
                    <a
                      style={{
                        flex: -1,
                        background: "#fe5b0b",
                        fontSize: "26px",
                        lineHeight: 1.12,
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "white",
                        fontWeight: 500,
                        textDecoration: "none",
                        marginLeft: "1.0875rem",
                        padding: "10px 16px",
                        borderRadius: 4
                      }}
                      href="https://www.billetweb.fr/pisc-2019"
                    >
                      {txt}
                    </a>
                  )}
                </FormattedMessage>

              </div>

            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Cover;
