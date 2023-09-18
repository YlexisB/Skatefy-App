import React from "react";

const Lesson = ({ lessonData }) => {
  return (
    <div id="lessons">
      <div className="about-lessons-all">
        <div className="lesson-left">
          <div className="lesson-text">
            <h1>| ABOUT LESSONS</h1>
            <p>{lessonData.para1}</p>
          </div>
          <div className="lesson-stats">
            <div className="stat stat-1">
              <hr />
              <div className="l-stat time">
                <h2>{lessonData.duration}</h2>
                <p>LESSON DURATION</p>
              </div>
            </div>
            <div className="stat">
              <hr />
              <div className="l-stat skill">
                <h2>{lessonData.skillLevel}</h2>
                <p>SKILL LEVEL</p>
              </div>
            </div>
            <div className="stat">
              <hr />
              <div className="l-stat age">
                <h2>{lessonData.ageRange}</h2>
                <p>AGE RANGE</p>
              </div>
            </div>
          </div>
          <div className="lesson-images">
            <img src={lessonData.image1} alt="" />
            <img src={lessonData.image2} alt="" />
            <img src={lessonData.image3} alt="" />
          </div>
        </div>
        <div className="lesson-right">
          <div className="lesson-gif">
            <img src={lessonData.gif} alt="" />
          </div>
          <div className="lesson-who-text">
            <h3> WHO IS IT FOR?</h3>
            <p>{lessonData.para2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
