import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import CompetitionModal from "./ModalStuff/CompetitionModal";

const CompetitionHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="competition-hero">
      <Navbar />
      <div className="c-hero-all">
        <h4>
          sk<span>a</span>tefy
        </h4>
        <h1>SKATEJAM</h1>
        <h3> LIVE IN EAST RUTHERFORD | APRIL 23-24,2024</h3>
        <button onClick={openModal}> REGISTER FOR COMPETITION</button>
        {isModalOpen && (
          <CompetitionModal isOpen={isModalOpen} onClose={closeModal} />
        )}

        <div>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default CompetitionHero;
