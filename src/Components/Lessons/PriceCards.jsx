import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const PriceCards = ({ lessonPrice }) => {
  return (
    <div id="price-section">
      <div className="price-all">
        <h1>| PRICE</h1>
        <div className="price-cards">
          <div className="columns">
            <ul class="price">
              <li className="header">ONE TIME LESSON</li>
              <li className="grey">{lessonPrice.singlePrice}</li>
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
              <li className="grey">{lessonPrice.basicPrice}</li>
              <li>{lessonPrice.basicLessons}</li>

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
              <li className="grey">{lessonPrice.goldPackagePrice}</li>
              <li>{lessonPrice.goldPackageLessons}</li>

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
              <li className="grey">{lessonPrice.premiumPrice}</li>
              <li>{lessonPrice.premiumLessons}</li>

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
