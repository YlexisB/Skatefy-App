import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const PriceCards = () => {
  return (
    <div id="price-section">
      <div className="price-all">
        <h1>| PRICE</h1>
        <div className="price-cards">
          <div className="columns">
            <ul class="price">
              <li className="header">ONE TIME LESSON</li>
              <li className="grey">$ 9.99 / year</li>
              <li>1 Lesson</li>

              <li className="grey">
                <a href="#" className="button">
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">BASIC</li>
              <li className="grey">$40</li>
              <li>8 Lessons</li>

              <li className="grey">
                <a href="#" className="button">
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">GOLD PACKAGE</li>
              <li className="grey">$ 9.99 / year</li>
              <li>12 Lessons</li>

              <li className="grey">
                <a href="#" className="button">
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">PREMIUM</li>
              <li className="grey">$ 9.99 / year</li>
              <li>16 Lessons</li>

              <li className="grey">
                <a href="#" className="button">
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
