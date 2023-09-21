import React from "react";
import Navbar from "./Navbar";
import JoinButton from "./Join/JoinButton";
import { VIDEO_STUFF } from "../constants";

const VideoCoachHero = () => {
  return (
    <div className="video-hero">
      <Navbar />
      <div className="video-hero-text">
        <h5>{VIDEO_STUFF.price}</h5>
        <h1>
          <span>{VIDEO_STUFF.titleSpan} </span>
        </h1>
        <h1>{VIDEO_STUFF.title}</h1>
        <p className="p">{VIDEO_STUFF.titleP}</p>
        <JoinButton />
      </div>
    </div>
  );
};

export default VideoCoachHero;
