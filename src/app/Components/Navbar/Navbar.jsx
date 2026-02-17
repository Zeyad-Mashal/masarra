"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="navbar">
      <ul
        id="navbar-menu"
        className={`navbar__links ${isOpen ? "is-open" : ""}`}
      >
        <li onClick={() => setIsOpen(false)}>WHY MASSARA</li>
        <li onClick={() => setIsOpen(false)}>OUR SERVICES</li>
        <li onClick={() => setIsOpen(false)}>OUR VENUES</li>
        <li onClick={() => setIsOpen(false)}>OUR OFFICES</li>
        <li onClick={() => setIsOpen(false)}>CONTACT US</li>
      </ul>
      <div className="logo">
        <p>logo</p>
      </div>

      <button
        type="button"
        className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="navbar__toggleLine" />
        <span className="navbar__toggleLine" />
        <span className="navbar__toggleLine" />
      </button>
    </div>
  );
};

export default Navbar;
