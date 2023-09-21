import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";

const BeyondHero = () => {
  return (
    <div className="beyond-hero">
      <Navbar />
      <div className="beyond-hero-text">
        <h5>FROM $30</h5>
        <h1>
          <span>BEYOND BEGINNER </span>
        </h1>
        <h1>LESSONS</h1>
        <p className="p">
          Take your skateboarding skills to the next level with Skatefy's Beyond
          Beginner Lessons, where the thrill of advanced tricks awaits your
          mastery.
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default BeyondHero;
