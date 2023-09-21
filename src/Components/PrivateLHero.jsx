import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";
import { PRIVATE_STUFF } from "../constants";

const PrivateLHero = () => {
  return (
    <div className="private-hero">
      <Navbar />
      <div className="private-hero-text">
        <h5>{PRIVATE_STUFF.price}</h5>
        <h1>
          <span>{PRIVATE_STUFF.titleSpan}</span>
        </h1>
        <h1>{PRIVATE_STUFF.title}</h1>
        <p className="p">{PRIVATE_STUFF.titleP}</p>
        <JoinButton />
      </div>
    </div>
  );
};

export default PrivateLHero;
