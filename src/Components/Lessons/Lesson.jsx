import React from "react";

const Lesson = () => {
  return (
    <div id="lessons">
      <div className="about-lessons-all">
        <div className="lesson-left">
          <div className="lesson-text">
            <h1>| ABOUT LESSONS</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.{" "}
            </p>
          </div>
          <div className="lesson-stats">
            <div className="stat stat-1">
              <hr />
              <div className="l-stat time">
                <h2>1.5 HOUR</h2>
                <p>LESSON DURATION</p>
              </div>
            </div>
            <div className="stat">
              <hr />
              <div className="l-stat skill">
                <h2>BEGINNER+</h2>
                <p>SKILL LEVEL</p>
              </div>
            </div>
            <div className="stat">
              <hr />
              <div className="l-stat age">
                <h2>5+</h2>
                <p>AGE RANGE</p>
              </div>
            </div>
          </div>
          <div className="lesson-images">
            <img src="./images/privateL/small/p-img-1.png" alt="" />
            <img src="./images/privateL/small/p-img-2.png" alt="" />
            <img src="./images/privateL/small/p-img-3.png" alt="" />
          </div>
        </div>
        <div className="lesson-right">
          <div className="lesson-gif">
            <img src="./images/lesson-gifs/gif-1.gif" alt="" />
          </div>
          <div className="lesson-who-text">
            <h3> WHO IS IT FOR?</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
