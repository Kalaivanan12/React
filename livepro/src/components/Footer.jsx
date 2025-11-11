import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* ======= Top Menu Tabs ======= */}
      <div className="footer-tabs">
        <ul>
          <li>REAL ESTATE</li>
          <li>RENTALS</li>
          <li>PROJECTS</li>
          <li>CITY DATA</li>
          <li>POPULAR SEARCHES</li>
        </ul>
      </div>

      {/* ======= Properties Section ======= */}
      <div className="footer-links">
        <h3>Find Properties for Sale</h3>
        <div className="footer-grid">
          <ul>
            <li>Flats in Mumbai</li>
            <li>Flats in Bengaluru</li>
            <li>Flats in Hyderabad</li>
            <li>Flats in Pune</li>
            <li>Flats in Chennai</li>
          </ul>
          <ul>
            <li>Flats in Delhi</li>
            <li>Flats in Gurgaon</li>
            <li>Flats in Noida</li>
            <li>Flats in Kolkata</li>
            <li>Flats in Ahmedabad</li>
          </ul>
          <ul>
            <li>Flats in Thane</li>
            <li>Flats in Navi Mumbai</li>
            <li>Flats in Faridabad</li>
            <li>Flats in Ghaziabad</li>
            <li>Flats in Coimbatore</li>
          </ul>
          <ul>
            <li>Properties in India</li>
            <li>Agricultural Lands in India</li>
            <li>Plots in India</li>
            <li>Flats in India</li>
          </ul>
        </div>
      </div>

      {/* ======= Great Place to Work Banner ======= */}
      <div className="footer-banner">
      </div>

      {/* ======= Bottom Section ======= */}
      <div className="footer-bottom">
        <img src="./src/img/plots/gptw.png" alt="Great Place to Work" />
        <div className="footer-column company">
          <h4>COMPANY</h4>
          <ul>
            <li>Careers</li>
            <li>About Us</li>
            <li>For Partners</li>
            <li>Terms</li>
            <li>Annual Return</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Unsubscribe</li>
            <li>Merger Hearing Advertisement</li>
          </ul>
        </div>

        <div className="footer-column partner">
          <h4>PARTNER SITES</h4>
          <ul>
            <li>realestate.com.au</li>
            <li>realtor.com</li>
            <li>99.co</li>
            <li>collinsdictionary.com</li>
          </ul>
        </div>

        <div className="footer-column explore">
          <h4>EXPLORE</h4>
          <ul>
            <li>News</li>
            <li>Home Loans</li>
            <li>Sitemap</li>
            <li>International</li>
          </ul>
        </div>

        <div className="footer-column app">
          <h4>EXPERIENCE HOUSING APP ON MOBILE</h4>
          <div className="app-buttons">
            <img src="./src/img/app-store.png" alt="App Store" />
            <img src="./src/img/google-play.png" alt="Google Play" />
          </div>

          <div className="qr-section">
            <img src="./src/img/qr-code.png" alt="QR Code" className="qr-img" />
            <p>
              Open camera &<br />
               scan the QR code to<br />
              Download the App
            </p>
          </div>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-copy">
        ©2012–25 Locon Solutions Pvt. Ltd.
      </div>
    </footer>
  );
}

export default Footer;
