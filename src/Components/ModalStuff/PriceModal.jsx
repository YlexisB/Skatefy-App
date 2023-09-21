import React from "react";
import { PRICE_MODAL } from "../../constants";

const PriceModal = ({ isOpen, onClose, selectedPrice, selectedPlan }) => {
  if (!isOpen) return null;

  console.log(selectedPrice);
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <form id="get-started-form">
            <button className="modal-close-button" onClick={onClose}>
              x
            </button>
            <h2>{PRICE_MODAL.title}</h2>
            <p> {PRICE_MODAL.titleP}</p>
            <p>
              {PRICE_MODAL.titlePSpan1}
              {selectedPrice} {PRICE_MODAL.titlePSpan2}
            </p>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name*"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number*"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail*"
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder="Type your message"
            ></textarea>
            <button className="modal-submit" type="submit">
              {PRICE_MODAL.cta}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PriceModal;
