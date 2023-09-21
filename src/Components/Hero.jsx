import React from "react";
import { HERO_STUFF, NAV_STUFF } from "../constants";
import JoinButton from "./Join/JoinButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-all">
      <div className="hero-left-right">
        <div className="hero-left">
          <p className="p1">{HERO_STUFF.p1}</p>
          <h1>{HERO_STUFF.p2}</h1>
          <h1>{HERO_STUFF.p3}</h1>
          <h1>
            <span>{HERO_STUFF.p4}</span>
          </h1>
          <p className="ibm-hero">{HERO_STUFF.p5}</p>
          {/* <div className="radius"> */}
          {/* <div className="join-button hero-join">
              {NAV_STUFF.join}
              <MdKeyboardDoubleArrowRight className="btn-arrow" />
            </div> */}
          <JoinButton />
          {/* </div> */}
        </div>
        <div className="hero-right">
          <div className="hero-right-all">
            <div className="hero-images-change">
              <div className="hero-ic hero-ic1">
                <hr />
                <h1>01</h1>
              </div>
              <div className="hero-ic hero-ic2">
                <hr />
                <h1>02</h1>
              </div>
              <div className="hero-ic hero-ic3">
                <hr />
                <h1>03</h1>
              </div>
            </div>
            <div className="image-vid">
              <Link to="/PrivateLessons">
                <div className="h-1-box">
                  <div className="text-container">
                    <h3>PRIVATE SKATE LESSONS</h3>
                    <p>
                      {" "}
                      One to one or small private groups. develop your skills
                      with higly experienced skate instructors.
                    </p>
                    <h4>
                      READ MORE{" "}
                      <MdKeyboardDoubleArrowRight className="btn-arrow" />
                    </h4>
                  </div>
                  <img
                    src="./images/hero-home/hero-small/h-img-1.png"
                    alt="mini-pic"
                  />
                </div>
              </Link>

              <img
                src="./images/hero-home/hero-small/h-gif-2.gif"
                alt="mini-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
