import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { NAV_STUFF } from "../constants";
import JoinButton from "./Join/JoinButton";
import { useLocation } from "react-router-dom";
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

  // SCROLL

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);
  return (
    <div
      id="nav-container"
      className={isOpen && windowWidth <= 820 ? "open" : ""}
    >
      <div className="logo-box">
        <Link to="/">
          <h1 className="logo-text">
            sk<span>a</span>tefy
          </h1>
        </Link>
      </div>
      <div>
        {windowWidth > 820 ? (
          <div className="menu-items open ">
            <Link to="/#offer-section">
              <h5>{NAV_STUFF.offer}</h5>
            </Link>
            <Link to="/#about-section">
              <h5>{NAV_STUFF.about}</h5>
            </Link>
            <Link to="/#team-section">
              <h5>{NAV_STUFF.instructors}</h5>
            </Link>
            <Link to="/#our-students-section">
              <h5>{NAV_STUFF.students}</h5>
            </Link>
            <Link to="/#faq-section">
              <h5>{NAV_STUFF.faq}</h5>
            </Link>
            <Link to="/#contact-section">
              <h5>{NAV_STUFF.contact}</h5>
            </Link>
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
          <Link to="/#offer-section">
            <h3>{NAV_STUFF.offer}</h3>
          </Link>
          <Link to="/#about-section">
            <h3>{NAV_STUFF.about}</h3>
          </Link>
          <Link to="/#team-section">
            <h3>{NAV_STUFF.instructors}</h3>
          </Link>
          <Link to="/#our-students-section">
            <h3>{NAV_STUFF.students}</h3>
          </Link>
          <Link to="/#faq-section">
            <h3>{NAV_STUFF.faq}</h3>
          </Link>
          <Link to="/#contact-section">
            <h3>{NAV_STUFF.contact}</h3>
          </Link>
        </div>
      )}

      <div className="radius">
        <JoinButton />
      </div>
    </div>
  );
};

export default Navbar;
