import React from "react";
import "./WhyMasarra.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const WhyMasarra = () => {
  return (
    <div className="WhyMasarra">
      <div className="overlay"></div>
      <h1>Why Masarra</h1>
      <p>One Partner. Full Ownershio. Real Impact.</p>
      <div className="WhyMasarra_content">
        <div className="WhyMasarra_item">
          <p>Expert-Led Event Management</p> <RiArrowDownDoubleFill />
        </div>
        <div className="WhyMasarra_item">
          <p>Tailored & Exclusive Experiences</p> <RiArrowDownDoubleFill />
        </div>
        <div className="WhyMasarra_item">
          <p>Local Strength. Real Advantage.</p> <RiArrowDownDoubleFill />
        </div>
        <div className="WhyMasarra_item">
          <p>Trusted Within The Destination</p> <RiArrowDownDoubleFill />
        </div>
      </div>
    </div>
  );
};

export default WhyMasarra;
