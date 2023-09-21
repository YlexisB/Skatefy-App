import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import PriceModal from "../ModalStuff/PriceModal";

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
        <h1>| PRICE</h1>
        <div className="price-cards">
          <div className="columns">
            <ul class="price">
              <li className="header">ONE TIME LESSON</li>
              <li className="grey">{lessonPrice.singlePrice}</li>
              <li>1 Lesson</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.singlePrice)}
                >
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
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
              <li className="header">BASIC</li>
              <li className="grey">{lessonPrice.basicPrice}</li>
              <li>{lessonPrice.basicLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.basicPrice)}
                >
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
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
              <li className="header">GOLD PACKAGE</li>
              <li className="grey">{lessonPrice.goldPackagePrice}</li>
              <li>{lessonPrice.goldPackageLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.goldPackagePrice)}
                >
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
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
              <li className="header">PREMIUM</li>
              <li className="grey">{lessonPrice.premiumPrice}</li>
              <li>{lessonPrice.premiumLessons}</li>

              <li className="grey">
                <a
                  className="button"
                  onClick={() => openModal(lessonPrice.premiumPrice)}
                >
                  CHOOSE <MdKeyboardDoubleArrowRight className="btn-arrow" />
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
