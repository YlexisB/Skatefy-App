import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NAV_STUFF } from "../constants";
import { VscMenu } from "react-icons/vsc";

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
    <section
      id="nav-container"
      className={isOpen && windowWidth <= 740 ? "open" : ""}
    >
      <div className="logo-box">
        <h1>
          sk<span>a</span>tefy
        </h1>
      </div>
      {windowWidth > 740 ? (
        <div className="menu-items open ">
          <Link to="">
            {" "}
            <h4>{NAV_STUFF.offer}</h4>
          </Link>
          <Link to="">
            <h4>{NAV_STUFF.about}</h4>
          </Link>
          <Link to="">
            <h4>{NAV_STUFF.instructors}</h4>
          </Link>
          <Link to="">
            <h4>{NAV_STUFF.students}</h4>
          </Link>
          <Link to="">
            <h4>{NAV_STUFF.faq}</h4>
          </Link>
          <Link to="">
            <h4>{NAV_STUFF.contact}</h4>
          </Link>
        </div>
      ) : null}
      {windowWidth <= 740 ? (
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
      {windowWidth > 740 && isOpen ? (
        <div className={isOpen ? "none" : null} onClick={handleToggle}>
          <VscMenu
            className={isOpen ? "hamburger-none" : null}
            size={30}
          ></VscMenu>
        </div>
      ) : null}
      {windowWidth <= 740 && isOpen && (
        <div className="menu-dropdown ">
          <Link to="">
            <h3>{NAV_STUFF.offer}</h3>
          </Link>
          <Link to="">
            <h3>{NAV_STUFF.about}</h3>
          </Link>
          <Link to="">
            <h3>{NAV_STUFF.instructors}</h3>
          </Link>
          <Link to="">
            <h3>{NAV_STUFF.students}</h3>
          </Link>
          <Link to="">
            <h3>{NAV_STUFF.faq}</h3>
          </Link>
          <Link to="">
            <h3>{NAV_STUFF.contact}</h3>
          </Link>
        </div>
      )}
      {/* <Link to="/ScheduleNow"> */}
      <button>Join</button>
      {/* </Link> */}
    </section>
  );
};

export default Navbar;
