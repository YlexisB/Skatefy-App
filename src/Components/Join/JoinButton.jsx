import React, { useState } from "react";
import { NAV_STUFF } from "../../constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Modal from "../ModalStuff/Modal";

const JoinButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="join-button hero-join" onClick={openModal}>
        {NAV_STUFF.join}
        <MdKeyboardDoubleArrowRight className="btn-arrow" />
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default JoinButton;
