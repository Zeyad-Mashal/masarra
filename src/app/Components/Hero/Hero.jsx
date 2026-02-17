import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <video src="/images/massara.mp4" autoPlay muted loop></video>
      <div className="hero-content">
        <h1>
          MICE <span>unScripted</span>
        </h1>
        <p>
          Meetings that move people. <br /> Incentives that spark connection.{" "}
          <br /> Events that leave a mark.
        </p>
      </div>
    </div>
  );
};

export default Hero;
