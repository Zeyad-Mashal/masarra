"use client";
import React, { useState } from "react";
import "./Accommidation.css";
import Image from "next/image";
import Modal from "../Modal/Modal";

const accommodationData = {
  title: "Luxury Hotel Accommodation",
  subtitle: "Stay, Elevated.",
  description:
    "From central business hotels to standout landmark properties, we connect your programme with the right place to stay — across Abu Dhabi, the UAE and beyond. Nothing generic. Everything considered.",
  points: [
    "5-star landmark & iconic hotel properties",
    "Tailored group rate negotiation",
    "Room blocking, allocation & rooming lists",
    "VIP check-in & suite upgrades",
    "F&B credits & exclusive amenity packages",
    "Coverage across Abu Dhabi, UAE & beyond",
  ],
};

const Accommidation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="Accommidation">
      <h1>ACCOMMODATION</h1>
      <p>Stay, Elevated.</p>
      <div className="Accommidation_container">
        <div className="Accommidation_left">
          <h2>The right hotel makes the difference.</h2>
          <p>
            From central business hotels to standout landmark properties, we
            connect your programme with the right place to stay — across Abu
            Dhabi, the UAE and beyond. Nothing generic. Everything considered.
          </p>
        </div>
        <div
          className="Accommidation_right accommidation_clickable"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          title="Click to learn more"
        >
          <Image
            src="/images/image4.jpg"
            alt="Accommidation"
            width={500}
            height={500}
          />
          <span>Hotel Name</span>
          <div className="accommidation_overlay_hint">
            <span>Learn More</span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={accommodationData}
      />
    </div>
  );
};

export default Accommidation;
