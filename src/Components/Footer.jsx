import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FOOTER_STUFF } from "../constants";

const Footer = () => {
  const navigate = useNavigate();
  const handleGridItemClick = (pagePath) => {
    navigate(pagePath);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="footer-section">
      <div className="footer-all">
        <h1>
          sk<span>a</span>tefy
        </h1>
        <div className="footer-tabs">
          <div className="section">
            <h5>{FOOTER_STUFF.offer}</h5>
            <p onClick={() => handleGridItemClick("/PrivateLessons")}>
              {FOOTER_STUFF.private}
            </p>
            <p onClick={() => handleGridItemClick("/VideoCoaching")}>
              {FOOTER_STUFF.videoC}
            </p>
            <p onClick={() => handleGridItemClick("/BeyondBeginner")}>
              {FOOTER_STUFF.beyondBegin}
            </p>
            <p onClick={() => handleGridItemClick("/Competition")}>
              {FOOTER_STUFF.competition}
            </p>
          </div>
          <div className="section">
            <h5>{FOOTER_STUFF.company}</h5>
            <Link to="/#about-section">
              <p>{FOOTER_STUFF.about}</p>
            </Link>
            <Link to="/#our-students-section">
              <p>{FOOTER_STUFF.students}</p>
            </Link>
            <Link to="/#team-section">
              <p>{FOOTER_STUFF.instructors}</p>
            </Link>
            <Link to="/#faq-section">
              <p>{FOOTER_STUFF.faq}</p>
            </Link>
          </div>
          <div className="section">
            <h5>{FOOTER_STUFF.support}</h5>
            <Link to="/#contact-section">
              <p>{FOOTER_STUFF.contact}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
