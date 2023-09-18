import React from "react";
const LessonBenefits = ({ lessonData2 }) => {
  return (
    <div id="benefits">
      <div className="benefits-all">
        <h1>| BENEFITS OF {lessonData2.title}</h1>
        <div className="benefits-bottom">
          <div className="benefits-left">
            <div className="box box-1">
              <h2>
                {" "}
                {lessonData2.header1}
                <span> {lessonData2.header1Span}</span>
              </h2>
              <p>{lessonData2.para1}</p>
            </div>
            <div className=" box-2">
              <img src={lessonData2.gif} alt="" />
            </div>
          </div>
          <div className="benefits-right">
            <div className="double">
              <img src={lessonData2.image1} alt="" />
              <img src={lessonData2.image2} alt="" />
            </div>
            <div className="box box-3">
              <h2>
                {" "}
                {lessonData2.header2} <span>{lessonData2.header2Span}</span>
              </h2>
              <p>{lessonData2.para2}</p>
            </div>
            <div className="box box-4">
              <h2>
                {" "}
                {lessonData2.header3} <span> {lessonData2.header3Span}</span>
              </h2>
              <p>{lessonData2.para3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonBenefits;
