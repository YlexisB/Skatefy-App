import React from "react";
import JoinButton from "./JoinButton";

const Join = () => {
  return (
    <div className="join-image">
      <div className="join-all">
        <div className="join-text">
          <h1>
            Join us on an exhilarating ride, master tricks, and craft{" "}
            <span> unforgettable skateboarding </span>
            moments together.
          </h1>
          {/* <div className="join-button hero-join">
          {NAV_STUFF.join}
          <MdKeyboardDoubleArrowRight className="btn-arrow" />
        </div> */}
          <JoinButton />
        </div>
      </div>
    </div>
  );
};

export default Join;
