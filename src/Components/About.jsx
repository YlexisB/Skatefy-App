import React from "react";

const About = () => {
  return (
    <section id="about-section">
      <div className="about-all">
        <div className="about-left">
          <h1>| ABOUT</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the <span>readable content</span> of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal <span>distribution</span> of letters,
          </p>
          <p>
            It is a long established <span>fact that a reader</span> will be
            distracted by the readable content of a page when looking at its
            layout.{" "}
          </p>
        </div>
        <div className="about-right">
          <img src="./images/about/about-image.png" alt="" />
        </div>
      </div>
      <div className="about-strip">
        <div className="about-strip-all">
          <div className="strip-1 strip">
            <hr />
            <div className="strip-c">
              <h1>10</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div className="strip-2 strip">
            <hr />
            <div className="strip-c">
              <h1>150+</h1>
              <p>SATISTFIED STUDENTS</p>
            </div>
          </div>
          <div className="strip-3 strip">
            <hr />
            <div className="strip-c">
              <h1>5</h1>
              <p>PROFESSIONAL COACHES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
