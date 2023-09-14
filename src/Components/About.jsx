import React from "react";

const About = () => {
  return (
    <section id="about-section">
      <div className="about-all">
        <div className="about-left">
          <h1>| ABOUT</h1>
          <p>
            Founded by <span>Allen Carter </span>and <span>Mike Ohara</span>{" "}
            during their high school years, Skatefy has been uniting skateboard
            enthusiasts for 8 years. What began as a shared passion for skating
            has evolved into <span> a thriving community</span>.
          </p>
          <p>
            We embrace skateboarders of all skill levels. Our mission: to
            empower individuals through skateboarding, fostering confidence,
            creativity, and connections within our{" "}
            <span> vibrant skateboarding family</span>.
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
