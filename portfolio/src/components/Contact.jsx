import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTicktick } from "react-icons/si"; // Using SiTicktick as a placeholder for TickBig

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:kalaivanankarthi31@gmail.com">kalaivanankarthi31@gmail.com</a></p>
      <p>Phone: 8870051316</p>
      <p className="social-links">
        <a href="https://linkedin.com/in/kalaivanan31" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a> | 
        <a href="https://github.com/Kalaivanan12" target="_blank" rel="noreferrer">
          <FaGithub size={24} /> GitHub
        </a> | 
        <a href="https://www.tickbig.com/profile/Kalaivanan-ESA2dPwqcp" target="_blank" rel="noreferrer">
          <SiTicktick size={24} /> TickBig
        </a>
      </p>
    </section>
  );
}

export default Contact;
