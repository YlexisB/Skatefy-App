import React from "react";
// import { MODAL_STUFF } from "../../constants";

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
            <h2>Your Skatefy Plan</h2>
            <p>
              {" "}
              Complete your sign-up to confirm your Skatefy plan. A team member
              will contact you to guide you through the next steps.
            </p>
            <p>You've selected the {selectedPrice} package</p>

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
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PriceModal;
