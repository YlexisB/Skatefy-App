import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
            <h5>OFFER</h5>
            <p onClick={() => handleGridItemClick("/PrivateLessons")}>
              Private Skate Lessons
            </p>
            <p onClick={() => handleGridItemClick("/VideoCoaching")}>
              Video Coaching
            </p>
            <p onClick={() => handleGridItemClick("/BeyondBeginner")}>
              Beyond Beginner
            </p>
            <p onClick={() => handleGridItemClick("/Competition")}>
              Competitions
            </p>
          </div>
          <div className="section">
            <h5>COMPANY</h5>
            <Link to="/#about-section">
              <p>About</p>
            </Link>
            <Link to="/#our-students-section">
              <p>Students</p>
            </Link>
            <Link to="/#team-section">
              <p>Instructors</p>
            </Link>
            <Link to="/#faq-section">
              <p>FAQ</p>
            </Link>
          </div>
          <div className="section">
            <h5>SUPPORT</h5>
            <Link to="/#contact-section">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
