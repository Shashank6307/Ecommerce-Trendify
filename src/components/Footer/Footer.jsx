import React from "react";
import logo from "../assets/shopping-bag.png";
import Insa from "../assets/instagram_icon.png";
import Pin from "../assets/imagee.png";
import Wats from "../assets/whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Trendify</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="social-icon">
        <div className="icon-container">
          <img src={Insa} alt="" />
        </div>
        <div className="icon-container">
          <img src={Pin} alt="" />
        </div>
        <div className="icon-container">
          <img src={Wats} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024-All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
