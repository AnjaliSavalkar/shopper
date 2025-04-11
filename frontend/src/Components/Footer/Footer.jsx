import React from "react";
import "./Footer.css";
import fotter_logo from "../Assets/Frontend_Assets/logo_big.png";
import insta from "../Assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../Assets/Frontend_Assets/pintester_icon.png";
import whatsapp from "../Assets/Frontend_Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="fotter">
      <div className="fotter-logo">
        <img src={fotter_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="fotter-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fotter-socials-icon">
        <div className="fotter-icons-container">
          <img src={insta} alt="" />
        </div>
        <div className="fotter-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="fotter-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="fotter-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
