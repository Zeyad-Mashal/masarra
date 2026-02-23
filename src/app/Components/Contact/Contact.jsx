"use client";
import React, { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // All good — show success modal
    setErrors({});
    setShowSuccess(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsClosing(false);
      setForm(initialForm);
    }, 400);
  };

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
          <form className="contact_form" onSubmit={handleSubmit} noValidate>
            <div className="contact_form_row">
              <label className="contact_label">
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR Name"
                  className={`contact_input${errors.name ? " contact_input_error" : ""}`}
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="contact_error_msg">{errors.name}</span>
                )}
              </label>

              <label className="contact_label">
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR Email"
                  className={`contact_input${errors.email ? " contact_input_error" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="contact_error_msg">{errors.email}</span>
                )}
              </label>
            </div>

            <div className="contact_form_row">
              <label className="contact_label">
                Your Phone
                <div
                  className={`contact_phone_wrapper${errors.phone ? " contact_phone_wrapper_error" : ""}`}
                >
                  <span className="contact_phone_prefix">+971 ▼</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="contact_input contact_input_phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && (
                  <span className="contact_error_msg">{errors.phone}</span>
                )}
              </label>

              <label className="contact_label">
                Select Service
                <select
                  name="service"
                  className={`contact_input contact_select${errors.service ? " contact_input_error" : ""}`}
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </select>
                {errors.service && (
                  <span className="contact_error_msg">{errors.service}</span>
                )}
              </label>
            </div>

            <label className="contact_label contact_label_full">
              Message
              <textarea
                name="message"
                placeholder="Message"
                className={`contact_input contact_textarea${errors.message ? " contact_input_error" : ""}`}
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="contact_error_msg">{errors.message}</span>
              )}
            </label>

            <button type="submit" className="contact_submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* ── Success Modal ── */}
      {showSuccess && (
        <div
          className={`contact_modal_overlay${isClosing ? " contact_modal_overlay_exit" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`contact_modal${isClosing ? " contact_modal_exit" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact_modal_icon">
              <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="contact_modal_circle" cx="26" cy="26" r="25" />
                <polyline className="contact_modal_check" points="14,27 22,35 38,18" />
              </svg>
            </div>
            <h3 className="contact_modal_title">Message Sent!</h3>
            <p className="contact_modal_text">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button className="contact_modal_btn" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
