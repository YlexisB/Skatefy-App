import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Offer = () => {
  return (
    <section id="offer-section">
      <div className="offer">
        <div className="offer-top">
          <h1>| OFFER</h1>
        </div>
        <div className="img-grid">
          <div className="angry-grid">
            <div id="item-0" className="item">
              <div className="text-container">
                <h1>
                  PRIVATE LESSONS{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  Skate your way with flexible Private Lessons, tailored for
                  both small groups and one-on-one training
                </p>
              </div>
              <img src="./images/offer/o-image-1.png" alt="" />
            </div>
            <div id="item-1" className="item">
              <div className="text-container">
                <h1>
                  VIDEO COACHING{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  Get expert guidance and insight with our Video Coaching. Watch
                  your skills soar with our tailored feedback.
                </p>
              </div>{" "}
              <img src="./images/offer/o-image-2.png" alt="" />
            </div>
            <div id="item-2" className="item">
              <div className="text-container">
                <h1>
                  COMPETITIONS{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  Test your skateboarding prowess and connect with the community
                  in Skatefy's thrilling skateboarding competitions.
                </p>
              </div>{" "}
              <img src="./images/offer/big-img-3.png" alt="" />
            </div>
            <div id="item-3" className="item">
              <div className="text-container">
                <h1>
                  BEYOND BEGINNER{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  Ready to go beyond the basics? Our Beyond Beginner Lessons
                  unlock the world of advanced tricks and techniques.
                </p>
              </div>{" "}
              <img src="./images/offer/o-image-7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="angry-grid">
          <img id="item-0" src="./images/offer/img-1.png" alt="" />{" "}
          <img id="item-1" src="./images/offer/img-2.png" alt="" />{" "}
          <img id="item-2" src="./images/offer/img-3.png" alt="" />{" "}
          <img id="item-3" src="./images/offer/img-6.png" alt="" />
        </div>
      </div> */}

      <div className="background-split"></div>
    </section>
  );
};

export default Offer;
