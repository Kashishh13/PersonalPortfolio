import React from 'react';
import './Head.css';  
import photo from './photo.jpg'
const Head= () => {
  return (
    <div className="header">
      <div className="left">
        <img src={photo} alt="Your Name" className="profile-photo" />
        <h1>Kashish Gupta</h1>
      </div>
      <div className="right">
  <p>
    Hi, I'm <strong>Kashish Gupta</strong>, a passionate <strong>MERN Stack Developer</strong> dedicated to building <span className="highlight">high-performance</span>, <span className="highlight">scalable</span>, and <span className="highlight">user-friendly</span> web applications. With expertise in 
    <span className="tech-highlight">MongoDB</span>, <span className="tech-highlight">Express.js</span>, <span className="tech-highlight">React</span>, and <span className="tech-highlight">Node.js</span>, I specialize in developing <strong>full-stack solutions</strong> that provide <span className="highlight">seamless user experiences</span> and robust back-end functionality.
  </p>
</div>


    </div>
  );
};

export default Head;
