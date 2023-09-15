import React from "react";
const LessonBenefits = () => {
  return (
    <div id="benefits">
      <div className="benefits-all">
        <h1>| BENEFITS OF PRIVATE LESSONS</h1>
        <div className="benefits-bottom">
          <div className="benefits-left">
            <div className="box box-1">
              <h2>
                {" "}
                PERSONALIZED <span>APPROACH</span>
              </h2>
              <p>
                Video Coaching offers the convenience of learning from the
                comfort of your own skate spot. No need to travel; simply film
                your session, and our expert instructors will provide insights
                to help you progress.
              </p>
            </div>
            <div className=" box-2">
              <img src="./images/lesson-gifs/gif-2.gif" alt="" />
            </div>
          </div>
          <div className="benefits-right">
            <div className="double">
              <img src="./images/privatel/small/p-img-1.png" alt="" />
              <img src="./images/privatel/small/p-img-2.png" alt="" />
            </div>
            <div className="box box-3">
              <h2>
                {" "}
                FAST <span>PROGRESS</span>
              </h2>
              <p>
                Offers the convenience of learning from the comfort of your own
                skate spot. No need to travel; simply film your session, and our
                expert instructors will provide insights to help you progress.
              </p>
            </div>
            <div className="box box-4">
              <h2>
                {" "}
                FLEXIBLE <span>SCHEDULE</span>
              </h2>
              <p>
                The convenience of learning from the comfort of your own skate
                spot. No need to travel; simply film your session, and our
                expert instructors will provide insights to help you progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonBenefits;
