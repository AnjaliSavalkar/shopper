import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/Frontend_Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For YOu</h1>
        <p>Only On best sellers products</p>
        <br />
        <button> Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
