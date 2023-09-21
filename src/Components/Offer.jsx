import React, { useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { OFFER_STUFF } from "../constants";

const Offer = () => {
  const navigate = useNavigate();
  const handleGridItemClick = (pagePath) => {
    navigate(pagePath);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="offer-section">
      <div className="offer">
        <div className="offer-top">
          <h1>{OFFER_STUFF.title}</h1>
        </div>
        <div className="img-grid">
          <div className="angry-grid">
            <div
              id="item-0"
              className="item"
              onClick={() => handleGridItemClick("/PrivateLessons")}
            >
              <div className="text-container">
                <h1>
                  {OFFER_STUFF.lesson1}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>{OFFER_STUFF.lesson1P}</p>
              </div>

              <img src={OFFER_STUFF.lesson1img} alt="" />
            </div>

            <div
              id="item-1"
              className="item"
              onClick={() => handleGridItemClick("/VideoCoaching")}
            >
              <div className="text-container">
                <h1>
                  {OFFER_STUFF.lesson2}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>{OFFER_STUFF.lesson2P}</p>
              </div>{" "}
              <img src={OFFER_STUFF.lesson2img} alt="" />
            </div>
            <div
              id="item-2"
              className="item"
              onClick={() => handleGridItemClick("/Competition")}
            >
              <div className="text-container">
                <h1>
                  {OFFER_STUFF.lesson3}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>{OFFER_STUFF.lesson3P}</p>
              </div>{" "}
              <img src={OFFER_STUFF.lesson3img} alt="" />
            </div>
            <div
              id="item-3"
              className="item"
              onClick={() => handleGridItemClick("/BeyondBeginner")}
            >
              <div className="text-container">
                <h1>
                  {OFFER_STUFF.lesson4}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </h1>
                <p>{OFFER_STUFF.lesson4P}</p>
              </div>{" "}
              <img src={OFFER_STUFF.lesson4img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="background-split"></div>
    </section>
  );
};

export default Offer;
