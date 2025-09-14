import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h1>Hello, I'm <span>Kalaivanan</span></h1>
      <p>Web Developer | UI/UX Designer</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Work</a>
        <a href="/resume.pdf" download className="btn resume-btn">
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
