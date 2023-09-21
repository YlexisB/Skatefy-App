import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import CompetitionModal from "./ModalStuff/CompetitionModal";
import { COMPETITION_STUFF } from "../constants";

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
        <h1>{COMPETITION_STUFF.title}</h1>
        <h3>{COMPETITION_STUFF.titleP}</h3>
        <button onClick={openModal}>{COMPETITION_STUFF.cta}</button>
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
