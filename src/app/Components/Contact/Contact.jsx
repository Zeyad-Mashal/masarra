"use client";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="contact_container">
        <div className="contact_left">
          <h1>
            <span className="contact_heading_line">CONTACT</span>
            <span className="contact_heading_line">US</span>
          </h1>
          <div className="contact_details">
            <a href="tel:+971000000000">+971 00 000 0000</a>
            <a href="tel:+971000000000">+971 00 000 0000</a>
            <a href="mailto:mice@masarra.ae">mice@masarra.ae</a>
          </div>
        </div>
        <div className="contact_right">
          <h2 className="contact_form_title">How can we help you?</h2>
          <form className="contact_form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact_form_row">
              <label className="contact_label">
                Your Name
                <input
                  type="text"
                  placeholder="YOUR Name"
                  className="contact_input"
                />
              </label>
              <label className="contact_label">
                Your Email
                <input
                  type="email"
                  placeholder="YOUR Email"
                  className="contact_input"
                />
              </label>
            </div>
            <div className="contact_form_row">
              <label className="contact_label">
                Your Phone
                <div className="contact_phone_wrapper">
                  <span className="contact_phone_prefix">+971 ▼</span>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="contact_input contact_input_phone"
                  />
                </div>
              </label>
              <label className="contact_label">
                Select Service
                <select className="contact_input contact_select">
                  <option value="">Select Service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </select>
              </label>
            </div>
            <label className="contact_label contact_label_full">
              Message
              <textarea
                placeholder="Message"
                className="contact_input contact_textarea"
                rows={4}
              />
            </label>
            <button type="submit" className="contact_submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
