import React from "react";

const Contact = () => {
  return (
    <div id="contact-section">
      <div className="contact-all">
        <h1>| CONTACT</h1>
        <div className="contact-stuff">
          <div className="contact-pairs">
            <h3 className="pair-2"> Tel: </h3>
            <h3> +01 234 5678</h3>
          </div>
          <hr />
          <div className="contact-pairs">
            <h3 className="pair-2"> Email: </h3>
            <h3> info@skatefy.com</h3>
          </div>
          <hr />
          <div className="contact-pairs">
            <h3 className="pair-2"> Location: </h3>
            <h3> 73 Jagerd Skate Park, East York, NY 11731</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
