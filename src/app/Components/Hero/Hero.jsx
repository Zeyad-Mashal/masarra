"use client";

import React, { useEffect, useRef } from "react";
import "./Hero.css";
const Hero = () => {
  const videoRef = useRef(null);

  // iOS Safari can ignore autoplay; try play() when it can.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may still be blocked; ignore silently.
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
      return;
    }

    video.addEventListener("canplay", tryPlay, { once: true });
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <div className="hero">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-label="Massara background video"
      >
        <source src="/images/massara.mp4" type="video/mp4" />
      </video>
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
