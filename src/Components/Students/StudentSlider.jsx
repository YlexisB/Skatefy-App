import React, { Component } from "react";
import Slider from "react-slick";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { STUDENT_STUFF } from "../../constants";

export default class PauseOnHover extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                <span>
                  <BiSolidQuoteLeft />
                </span>
                {STUDENT_STUFF.geo}
              </h1>
              <p>
                {" "}
                {STUDENT_STUFF.geoSpan1}
                <span>{STUDENT_STUFF.geoSpan2} </span>
                {STUDENT_STUFF.geoSpan3}
              </p>
            </div>{" "}
            <img src={STUDENT_STUFF.geoGif} alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                {STUDENT_STUFF.wR}
              </h1>

              <p>
                {STUDENT_STUFF.wRSpan1} <span>{STUDENT_STUFF.wRSpan2}</span>{" "}
                {STUDENT_STUFF.wRSpan3}
              </p>
            </div>{" "}
            <img src={STUDENT_STUFF.wRGif} alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                {STUDENT_STUFF.angie}
              </h1>
              <p>
                {" "}
                {STUDENT_STUFF.angieSpan1}
                <span> {STUDENT_STUFF.angieSpan2} </span>
                {STUDENT_STUFF.angieSpan3}
              </p>
            </div>{" "}
            <img src={STUDENT_STUFF.angieGif} alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                {STUDENT_STUFF.sarah}
              </h1>
              <p>
                {" "}
                {STUDENT_STUFF.sarahSpan1}
                <span>{STUDENT_STUFF.sarahSpan2}</span>.
              </p>
            </div>{" "}
            <img src={STUDENT_STUFF.sarahGif} alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                {STUDENT_STUFF.erick}
              </h1>
              <p>
                {" "}
                {STUDENT_STUFF.erickSpan1}
                <span>{STUDENT_STUFF.erickSpan2} </span>
                {STUDENT_STUFF.erickSpan3}
              </p>
            </div>{" "}
            <img src={STUDENT_STUFF.erickGif} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
