import React from "react";
import { NAV_STUFF } from "../constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const JoinButton = () => {
  return (
    <div>
      <div className="join-button hero-join">
        {NAV_STUFF.join}
        <MdKeyboardDoubleArrowRight className="btn-arrow" />
      </div>
    </div>
  );
};

export default JoinButton;
