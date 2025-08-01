import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>CAR MAKES</h4>
        <p>"Our Service most".</p>
        <p>info@carmakes.com</p>
        <p>+91 9874561230</p>
      </div>

      <div className="footer-section">
        <h4>ABOUT DETAILS</h4>
        <ul>
          <li>About Us</li>
          <li>Service</li>
          <li>Terms of service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>TOP BRANDS</h4>
        <div className="footer-brands">
          <ul>
            <li>BMW</li>
            <li>Lamborghini</li>
            <li>Camaro</li>
            <li>Audi</li>
            <li>Infiniti</li>
            <li>Nissan</li>
          </ul>
          <ul>
            <li>Ferrari</li>
            <li>Porsche</li>
            <li>Land Rover</li>
            <li>Aston Martin</li>
            <li>Mersedes</li>
          </ul>
        </div>
      </div>

      <div className="footer-section">
        <h4>NEWS LETTER</h4>
        <p>Subscribe to get latest news update and informations</p>
        <div className="newsletter">
          <input type="email" placeholder="Add Email" />
          <button>→</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
