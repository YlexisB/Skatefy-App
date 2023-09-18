import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";

const VideoCoachHero = () => {
  return (
    <div className="video-hero">
      <Navbar />
      <div className="video-hero-text">
        <h5>FROM $20</h5>
        <h1>
          <span>VIDEO COACHING </span>
        </h1>
        <h1> LESSONS</h1>
        <p>
          Unleash your skateboarding potential with our Video Coaching sessions
          at Skatefy, where personalized guidance meets the power of video
          analysis.
        </p>
        <JoinButton />
      </div>
    </div>
  );
};

export default VideoCoachHero;
