import React from "react";
import "./NewsLetter.css";
const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1> get Exclusive offers on yours email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="your email id" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
