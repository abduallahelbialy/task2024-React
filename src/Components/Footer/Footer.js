// Footer.js

import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We specialize in providing high-quality automobile products.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>{" "}
            <ul>
              <li>
                Home
              </li>
              <li>
                Products
              </li>
              <li>
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>{" "}
            <p>Follow us on social media to get the latest updates.</p>
            <div className="social-icons">
              <a href="#/" className="icon">
              <FaTwitter/>
              </a>
              <a href="#/" className="icon">
                <FaFacebook/>
              </a>
              <a href="#/" className="icon">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
