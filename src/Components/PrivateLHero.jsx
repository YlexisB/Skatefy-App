import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";

const PrivateLHero = () => {
  return (
    <div className="private-hero">
      <Navbar />
      <div className="private-hero-text">
        <h5>FROM $40</h5>
        <h1>
          <span>PRIVATE</span>
        </h1>
        <h1>SKATE LESSONS</h1>
        <p>
          Embark on a personalized skateboarding journey with our private
          lessons at Skatefy, where progress and passion meet the pavement.
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default PrivateLHero;
