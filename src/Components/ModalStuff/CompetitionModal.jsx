import React from "react";
import { COMPETITION_MODAL } from "../../constants";

const CompetitionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form id="get-started-form">
          <button className="modal-close-button" onClick={onClose}>
            x
          </button>
          <h2 className="graffiti">{COMPETITION_MODAL.title}</h2>
          <p>{COMPETITION_MODAL.titleP}</p>

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
            {COMPETITION_MODAL.cta}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompetitionModal;
