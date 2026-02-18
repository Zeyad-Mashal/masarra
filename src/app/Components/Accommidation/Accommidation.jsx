import React from "react";
import "./Accommidation.css";
import Image from "next/image";
const Accommidation = () => {
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
        <div className="Accommidation_right">
          <Image
            src="/images/image4.jpg"
            alt="Accommidation"
            width={500}
            height={500}
          />
          <span>Hotel Name</span>
        </div>
      </div>
    </div>
  );
};

export default Accommidation;
