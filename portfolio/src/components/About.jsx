import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm <strong>Kalai</strong>, a passionate Web Developer and UI/UX Designer with a strong foundation in Computer Science. 
        I specialize in building modern, responsive, and user-friendly web applications using <strong>React, JavaScript, HTML5, CSS3</strong>, 
        and <strong>Bootstrap</strong>.
      </p>
      <p>
        I have hands-on experience working on projects such as <strong>E-Farming Mobile App</strong>, 
        <strong>CarVilla Website</strong>, and <strong>OLX Clone</strong>, focusing on clean code, performance, 
        and excellent user experience.
      </p>
      <p>
        I am always eager to learn new technologies and improve my skills. I enjoy problem-solving and turning 
        ideas into functional, attractive websites and applications. My goal is to deliver products that 
        not only work perfectly but also provide an engaging experience to users.
      </p>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Frontend: React, HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js (basic)</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Tools: VS Code, Git, Figma, Chrome DevTools</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
