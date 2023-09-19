import React from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
const CompetitionHero = () => {
  return (
    <div className="competition-hero">
      <Navbar />
      <div className="c-hero-all">
        <h4>
          sk<span>a</span>tefy
        </h4>
        <h1>SKATEJAM</h1>
        <h3> LIVE IN EAST RUTHERFORD | APRIL 23-24,2024</h3>
        <button> REGISTER FOR COMPETITION</button>
        <div>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default CompetitionHero;
