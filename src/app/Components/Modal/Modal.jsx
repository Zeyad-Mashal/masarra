"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 30,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const Modal = ({ isOpen, onClose, data }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          className="modal_backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal_container"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative top bar */}
            <div className="modal_top_bar" />

            {/* Close button */}
            <button
              className="modal_close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <IoClose />
            </button>

            {/* Icon / Emoji if provided */}
            {data.icon && (
              <div className="modal_icon">{data.icon}</div>
            )}

            {/* Content */}
            <div className="modal_body">
              <h2 className="modal_title">{data.title}</h2>
              {data.subtitle && (
                <p className="modal_subtitle">{data.subtitle}</p>
              )}
              {data.description && (
                <p className="modal_description">{data.description}</p>
              )}
              {data.points && data.points.length > 0 && (
                <ul className="modal_points">
                  {data.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
