import React from "react";
import { ABOUT_STUFF } from "../constants";
const About = () => {
  return (
    <section id="about-section">
      <div className="about-all">
        <div className="about-left">
          <h1>{ABOUT_STUFF.title}</h1>
          <p>
            {ABOUT_STUFF.spanOne} <span>{ABOUT_STUFF.spanTwo} </span>
            {ABOUT_STUFF.spanThree}
            <span>{ABOUT_STUFF.spanFour}</span> {ABOUT_STUFF.spanFive}
            <span> {ABOUT_STUFF.spanSix}</span>.
          </p>
          <p>
            {ABOUT_STUFF.spanSeven}
            <span>{ABOUT_STUFF.spanEight}</span>.
          </p>
        </div>
        <div className="about-right">
          <img src={ABOUT_STUFF.img} alt="" />
        </div>
      </div>
      <div className="about-strip">
        <div className="about-strip-all">
          <div className="strip-1 strip">
            <hr />
            <div className="strip-c">
              <h1>{ABOUT_STUFF.stat1}</h1>
              <p>{ABOUT_STUFF.stat1P}</p>
            </div>
          </div>
          <div className="strip-2 strip">
            <hr />
            <div className="strip-c">
              <h1>{ABOUT_STUFF.stat2}</h1>
              <p>{ABOUT_STUFF.stat2P}</p>
            </div>
          </div>
          <div className="strip-3 strip">
            <hr />
            <div className="strip-c">
              <h1>{ABOUT_STUFF.stat3}</h1>
              <p>{ABOUT_STUFF.stat3P}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
