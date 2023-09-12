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
                We host one to one <span>competitions building</span> enjoyment
                , and confidence & skill.
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
                We host <span> one to one</span> competitions building enjoyment
                , and confidence & skill.
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
                We host one to one competitions <span> building</span> enjoyment
                , and confidence & skill.
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
                We host one to one competitions building enjoyment , and
                <span>confidence & skill</span>.
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
                We host one to one competitions <span>building </span>
                enjoyment , and confidence & skill.
              </p>
            </div>{" "}
            <img src="./images/ourstudents/gif-5.gif" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
