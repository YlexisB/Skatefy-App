import React, { useState } from "react";
import { teamData } from "../data/teamData";

const Ourteam = () => {
  const [teamMembers, setTeamMembers] = useState(teamData);

  const handleImageClick = (index) => {
    if (index === 0) {
      return;
    }

    const updatedTeamMembers = [...teamMembers];

    for (let i = 0; i < index; i++) {
      const shiftedMember = updatedTeamMembers.shift();
      updatedTeamMembers.push(shiftedMember);
    }
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <section id="team-section">
      <div className="team-all">
        <div className="team-left">
          <h1>| OUR TEAM</h1>
          <div>
            <h2>{teamMembers[0].name}</h2>
            <h3>
              <span>{teamMembers[0].experience}</span>
            </h3>
            <p>{teamMembers[0].description}</p>
          </div>
        </div>
        <div className="team-right">
          {" "}
          <div>
            {teamMembers.map((member, index) => (
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className={index === 0 ? "focused" : "dimmed"}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="orange-split"></div>
    </section>
  );
};

export default Ourteam;
