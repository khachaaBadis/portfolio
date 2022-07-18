import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/mangustooo/" target="_blank">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.instagram.com/badiskhachaa/" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/khachaa-badis-790bab244/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ALL rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
