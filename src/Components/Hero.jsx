import React from "react";
import { HERO_STUFF, NAV_STUFF } from "../constants";

const Hero = () => {
  return (
    <div className="hero-all">
      <div className="hero-left-right">
        <div className="hero-left">
          <p>{HERO_STUFF.p1}</p>
          <h1>{HERO_STUFF.p2}</h1>
          <h1>{HERO_STUFF.p3}</h1>
          <h1>
            <span>{HERO_STUFF.p4}</span>
          </h1>
          <p>{HERO_STUFF.p5}</p>
          <div className="radius">
            <div className="join-button hero-join">{NAV_STUFF.join}</div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-all">
            <div className="hero-images-change">
              <div className="hero-ic hero-ic1">
                <hr />
                <h1>01</h1>
              </div>
              <div className="hero-ic hero-ic1">
                <hr />
                <h1>02</h1>
              </div>
              <div className="hero-ic hero-ic1">
                <hr />
                <h1>03</h1>
              </div>
            </div>
            <img
              src="./images/hero-home/hero-small/h-image.png"
              alt="mini-pic"
            />
            <img
              src="./images/hero-home/hero-small/h-video.mp4"
              alt="mini-vid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
