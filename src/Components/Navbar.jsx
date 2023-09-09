import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
// import { Link } from "react-router-dom";
import { NAV_STUFF } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="nav-container"
      className={isOpen && windowWidth <= 820 ? "open" : ""}
    >
      <div className="logo-box">
        <h1 className="logo-text">
          sk<span>a</span>tefy
        </h1>
      </div>
      <div>
        {windowWidth > 820 ? (
          <div className="menu-items open ">
            <h5>{NAV_STUFF.offer}</h5>

            <h5>{NAV_STUFF.about}</h5>

            <h5>{NAV_STUFF.instructors}</h5>

            <h5>{NAV_STUFF.students}</h5>

            <h5>{NAV_STUFF.faq}</h5>

            <h5>{NAV_STUFF.contact}</h5>
          </div>
        ) : null}
      </div>
      {windowWidth <= 820 ? (
        <div
          className={isOpen ? "menu-icon-open" : "menu-icon"}
          onClick={handleToggle}
        >
          <VscMenu
            className={isOpen ? "hamburger-open " : "hamburger "}
            size={30}
          ></VscMenu>
        </div>
      ) : null}

      {windowWidth > 820 && isOpen ? (
        <div className={isOpen ? "none" : null} onClick={handleToggle}>
          <VscMenu
            className={isOpen ? "hamburger-none" : null}
            size={30}
          ></VscMenu>
        </div>
      ) : null}
      {windowWidth <= 820 && isOpen && (
        <div className="menu-dropdown ">
          <h3>{NAV_STUFF.offer}</h3>

          <h3>{NAV_STUFF.about}</h3>

          <h3>{NAV_STUFF.instructors}</h3>

          <h3>{NAV_STUFF.students}</h3>

          <h3>{NAV_STUFF.faq}</h3>

          <h3>{NAV_STUFF.contact}</h3>
        </div>
      )}

      <div className="radius">
        <div className={isOpen ? "logo-open" : " join-button "}>
          {NAV_STUFF.join}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
