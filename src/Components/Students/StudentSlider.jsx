import React, { Component } from "react";
import Slider from "react-slick";
import { BiSolidQuoteLeft } from "react-icons/bi";

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
                </span>{" "}
                GEO TAYLOR{" "}
              </h1>
              <p>
                {" "}
                Skatefy has been a <span>game-changer </span>for me. The
                instructors' dedication and patience have taken my skills to a
                whole new level.
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-1.gif" alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                WILL & RICHARD
              </h1>

              <p>
                {" "}
                Skatefy not only <span>improved our skating</span> but also
                brought us together as best friends. We're forever grateful."
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-2.gif" alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                ANGIE MILLER
              </h1>
              <p>
                {" "}
                I'm only 9, but Skatefy makes me{" "}
                <span> feel like a skateboarding pro. </span> It's so much fun,
                and the coaches are awesome!
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-3.gif" alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                SARAH DAZANO
              </h1>
              <p>
                {" "}
                I've always wanted to master kickflips, and
                <span> Skatefy helped me achieve it. </span>.
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-4.gif" alt="" />
          </div>
          <div className="slider-div">
            <div className="text-container">
              <h1>
                {" "}
                <span>
                  <BiSolidQuoteLeft />
                </span>{" "}
                ERICK WILSON
              </h1>
              <p>
                {" "}
                Skatefy is my <span>skateboarding sanctuary. </span>
                The community, coaching, and competitions are awesome.
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-5.gif" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
