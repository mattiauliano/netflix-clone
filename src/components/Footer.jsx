import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          <ul role="list">
            <li>
              <a href="#">
                <FaFacebookF size="1.4rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram size="1.4rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter size="1.4rem" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube size="1.4rem" />
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul role="list">
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul role="list">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
          <ul role="list">
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <ul role="list">
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <button>Service Code</button>
        <p>© 1997-2023 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
