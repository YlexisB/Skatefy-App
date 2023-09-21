import React from "react";
import { CONTACT_STUFF } from "../constants";

const Contact = () => {
  return (
    <div id="contact-section">
      <div className="contact-all">
        <h1>{CONTACT_STUFF.title}</h1>
        <div className="contact-stuff">
          <div className="contact-pairs">
            <h3 className="pair-2"> {CONTACT_STUFF.phone}</h3>
            <h3>{CONTACT_STUFF.phoneNumber}</h3>
          </div>
          <hr />
          <div className="contact-pairs">
            <h3 className="pair-2">{CONTACT_STUFF.email}</h3>
            <h3> {CONTACT_STUFF.emailAddress}</h3>
          </div>
          <hr />
          <div className="contact-pairs">
            <h3 className="pair-2">{CONTACT_STUFF.location}</h3>
            <h3> {CONTACT_STUFF.address}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
