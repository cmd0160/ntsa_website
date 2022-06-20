import React from "react";

const Contact = () => {
  return (
    <div className="contact-con">
        <h1 className="contact-title p-2">Contact Us</h1>
        <form className="">
          <input
            type="text"
            className="text name"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="text email"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="text"
            className="text subject"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            type="text"
            className="text message"
            placeholder="Message"
            name="message"
          />
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
  );
};

export default Contact;
