"use client";
import React, { useState, useRef } from "react";
import "./SliderSection.css";

const SWIPE_THRESHOLD = 50;

const slides = [
  {
    image: "/images/image4.jpg",
    title: "OUR VENUES",
    subtitle: "Exceptional Access.",
    content: {
      heading: "EXTRAORDINARY VENUES Across Abu Dhabi & The UAE",
      text: "Masarra MICE enjoys access to iconic venues, exclusive settings, and premium MICE inventory across Abu Dhabi and the UAE.",
    },
  },
  {
    image: "/images/image3.jpeg",
    title: "OUR Work",
    subtitle: "Exceptional Access.",
    content: {
      heading: "EXTRAORDINARY VENUES Across Abu Dhabi & The UAE",
      text: "Masarra MICE enjoys access to iconic venues, exclusive settings, and premium MICE inventory across Abu Dhabi and the UAE.",
    },
  },
  {
    image: "/images/image4.jpg",
    title: "OUR VENUES",
    subtitle: "Exceptional Access.",
    content: {
      heading: "EXTRAORDINARY VENUES Across Abu Dhabi & The UAE",
      text: "Masarra MICE enjoys access to iconic venues, exclusive settings, and premium MICE inventory across Abu Dhabi and the UAE.",
    },
  },
  {
    image: "/images/image4.jpg",
    title: "OUR VENUES",
    subtitle: "Exceptional Access.",
    content: {
      heading: "EXTRAORDINARY VENUES Across Abu Dhabi & The UAE",
      text: "Masarra MICE enjoys access to iconic venues, exclusive settings, and premium MICE inventory across Abu Dhabi and the UAE.",
    },
  },
  {
    image: "/images/image4.jpg",
    title: "OUR VENUES",
    subtitle: "Exceptional Access.",
    content: {
      heading: "EXTRAORDINARY VENUES Across Abu Dhabi & The UAE",
      text: "Masarra MICE enjoys access to iconic venues, exclusive settings, and premium MICE inventory across Abu Dhabi and the UAE.",
    },
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const touchStartX = useRef(0);

  const goPrev = () => {
    const next = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setPrevSlide(currentSlide);
    setCurrentSlide(next);
  };

  const goNext = () => {
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setPrevSlide(currentSlide);
    setCurrentSlide(next);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) >= SWIPE_THRESHOLD) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="SliderSection"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slider_bg slider_bg_prev"
        style={{
          backgroundImage: slides[prevSlide].image
            ? `url(${slides[prevSlide].image})`
            : undefined,
        }}
      />
      <div
        className="slider_bg slider_bg_current"
        key={currentSlide}
        style={{
          backgroundImage: slide.image ? `url(${slide.image})` : undefined,
        }}
      />
      <div className="slider_container">
        <div className="slider_item" key={currentSlide}>
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
          <div className="item_content">
            <h3>{slide.content.heading}</h3>
            <p>{slide.content.text}</p>
          </div>
        </div>
      </div>

      <div className="slider_controls">
        <button
          type="button"
          className="slider_nav slider_nav_prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ««
        </button>
        <div className="slider_pagination">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`slider_dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentSlide ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          className="slider_nav slider_nav_next"
          onClick={goNext}
          aria-label="Next slide"
        >
          »»
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
