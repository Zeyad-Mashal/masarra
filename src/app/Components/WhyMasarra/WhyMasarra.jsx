"use client";
import React, { useState } from "react";
import "./WhyMasarra.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import Modal from "../Modal/Modal";

const items = [
  {
    title: "Expert-Led Event Management",
    subtitle: "Professional Excellence",
    description:
      "Our seasoned event specialists bring decades of combined experience to every project. From intimate corporate retreats to large-scale international conferences, we manage every detail with precision and care.",
    points: [
      "End-to-end event planning & execution",
      "Dedicated project management team",
      "Real-time coordination & logistics",
      "Post-event analysis & reporting",
    ],
  },
  {
    title: "Tailored & Exclusive Experiences",
    subtitle: "Bespoke by Design",
    description:
      "No two clients are alike, and neither are our programmes. We craft fully customised MICE experiences that reflect your brand identity and exceed your audience's expectations.",
    points: [
      "Custom theme & concept development",
      "Exclusive access to private venues",
      "Personalised delegate journeys",
      "Branded collateral & experiences",
    ],
  },
  {
    title: "Local Strength. Real Advantage.",
    subtitle: "Deep-Rooted Connections",
    description:
      "Our unparalleled network across Abu Dhabi and the UAE gives your event a genuine edge — from priority venue access to preferred supplier rates and insider knowledge.",
    points: [
      "Exclusive partnerships with top venues",
      "Priority bookings & preferred rates",
      "Insider destination knowledge",
      "Strong government & authority relations",
    ],
  },
  {
    title: "Trusted Within The Destination",
    subtitle: "Reputation Built on Results",
    description:
      "Years of delivering outstanding MICE programmes have earned Masarra the trust of global corporations, government entities, and leading travel agencies alike.",
    points: [
      "Proven track record of success",
      "Long-term client relationships",
      "Transparent communication & reporting",
      "Award-winning service standards",
    ],
  },
];

const WhyMasarra = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="WhyMasarra">
      <div className="overlay"></div>
      <h1>Why Masarra</h1>
      <p>One Partner. Full Ownership. Real Impact.</p>
      <div className="WhyMasarra_content">
        {items.map((item, index) => (
          <div
            key={index}
            className="WhyMasarra_item"
            onClick={() => setActiveModal(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveModal(item)}
          >
            <p>{item.title}</p>
            <RiArrowDownDoubleFill />
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        data={activeModal}
      />
    </div>
  );
};

export default WhyMasarra;
