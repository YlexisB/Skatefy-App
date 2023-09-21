import React from "react";
import { HERO_STUFF } from "../constants";
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

          <JoinButton />
        </div>
        <div className="hero-right">
          <div className="hero-right-all">
            <div className="hero-images-change">
              <div className="hero-ic hero-ic1">
                <hr />
                <h1>{HERO_STUFF.one}</h1>
              </div>
              <div className="hero-ic hero-ic2">
                <hr />
                <h1>{HERO_STUFF.two}</h1>
              </div>
              <div className="hero-ic hero-ic3">
                <hr />
                <h1>{HERO_STUFF.three}</h1>
              </div>
            </div>
            <div className="image-vid">
              <Link to="/PrivateLessons">
                <div className="h-1-box">
                  <div className="text-container">
                    <h3>{HERO_STUFF.boxTitle}</h3>
                    <p> {HERO_STUFF.boxP}</p>
                    <h4>
                      {HERO_STUFF.boxCta}
                      <MdKeyboardDoubleArrowRight className="btn-arrow" />
                    </h4>
                  </div>
                  <img src={HERO_STUFF.img1} alt="mini-pic" />
                </div>
              </Link>

              <img src={HERO_STUFF.img2} alt="mini-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
