import React from "react";
import StudentSlider from "./StudentSlider";
import { STUDENT_STUFF } from "../../constants";

const OurStudents = () => {
  return (
    <section id="our-students-section">
      <div className="students-all">
        <h1>{STUDENT_STUFF.title}</h1>
      </div>
      <StudentSlider />
    </section>
  );
};

export default OurStudents;
