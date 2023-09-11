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
                <p> One to ine or small private groups.</p>
              </div>
              <img src="./images/offer/big-img-1.png" alt="" />
            </div>
            <div id="item-1" className="item">
              <div className="text-container">
                <h1>
                  VIDEO COACHING{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  Next level stuff methodology coaching with video analysis and
                  a progression program.
                </p>
              </div>{" "}
              <img src="./images/offer/big-img-2.png" alt="" />
            </div>
            <div id="item-2" className="item">
              <div className="text-container">
                <h1>
                  COMPETITIONS{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>
                  {" "}
                  We host one to one competitions building enjoyment , and
                  confidence & skill.
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
                  Wanting to hone your skill or feel like you've plateaued? We
                  have just tehe coaches for you.
                </p>
              </div>{" "}
              <img src="./images/offer/big-img-6.png" alt="" />
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
