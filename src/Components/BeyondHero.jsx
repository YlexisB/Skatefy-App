import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";
import { BEYOND_STUFF } from "../constants";

const BeyondHero = () => {
  return (
    <div className="beyond-hero">
      <Navbar />
      <div className="beyond-hero-text">
        <h5>{BEYOND_STUFF.price}</h5>
        <h1>
          <span>{BEYOND_STUFF.titleSpan}</span>
        </h1>
        <h1>{BEYOND_STUFF.title}</h1>
        <p className="p">{BEYOND_STUFF.titleP}</p>
        <JoinButton />
      </div>
    </div>
  );
};

export default BeyondHero;
