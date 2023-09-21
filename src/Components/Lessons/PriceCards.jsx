import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import PriceModal from "../ModalStuff/PriceModal";
import { PRICE_CARDS_STUFF } from "../../constants";

const PriceCards = ({ lessonPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const openModal = (price) => {
    setIsModalOpen(true);
    setSelectedPrice(price);
  };

  const closeModal = () => {
    setSelectedPrice(null);
    setIsModalOpen(false);
  };
  return (
    <div id="price-section">
      <div className="price-all">
        <h1>{PRICE_CARDS_STUFF.title}</h1>
        <div className="price-cards">
          <div className="columns">
            <ul class="price">
              <li className="header">{PRICE_CARDS_STUFF.one}</li>
              <li className="grey">{lessonPrice.singlePrice}</li>
              <li>{PRICE_CARDS_STUFF.oneLesson}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.singlePrice)}
                >
                  {PRICE_CARDS_STUFF.choose}{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
              {isModalOpen && (
                <PriceModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  selectedPrice={selectedPrice}
                />
              )}
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">{PRICE_CARDS_STUFF.basic}</li>
              <li className="grey">{lessonPrice.basicPrice}</li>
              <li>{lessonPrice.basicLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.basicPrice)}
                >
                  {PRICE_CARDS_STUFF.choose}{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
              {isModalOpen && (
                <PriceModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  selectedPrice={selectedPrice}
                />
              )}
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">{PRICE_CARDS_STUFF.goldPackage}</li>
              <li className="grey">{lessonPrice.goldPackagePrice}</li>
              <li>{lessonPrice.goldPackageLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.goldPackagePrice)}
                >
                  {PRICE_CARDS_STUFF.choose}{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
              {isModalOpen && (
                <PriceModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  selectedPrice={selectedPrice}
                />
              )}
            </ul>
          </div>
          <div className="columns">
            <ul class="price">
              <li className="header">{PRICE_CARDS_STUFF.premium}</li>
              <li className="grey">{lessonPrice.premiumPrice}</li>
              <li>{lessonPrice.premiumLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.premiumPrice)}
                >
                  {PRICE_CARDS_STUFF.choose}{" "}
                  <MdKeyboardDoubleArrowRight className="btn-arrow" />
                </a>
              </li>
              {isModalOpen && (
                <PriceModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  selectedPrice={selectedPrice}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
