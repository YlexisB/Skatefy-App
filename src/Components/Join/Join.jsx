import React from "react";
import JoinButton from "./JoinButton";
import { JOIN_STUFF } from "../../constants";

const Join = () => {
  return (
    <div className="join-image">
      <div className="join-all">
        <div className="join-text">
          <h1>
            {JOIN_STUFF.joinSPan1}
            <span>{JOIN_STUFF.joinSPan2}</span>
            {JOIN_STUFF.joinSpan3}
          </h1>

          <JoinButton />
        </div>
      </div>
    </div>
  );
};

export default Join;
