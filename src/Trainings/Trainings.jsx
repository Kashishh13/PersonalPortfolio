import React from 'react';
import './Trainings.css';

const Trainings = () => {
  return (
    <div className="education">
      <h2>Trainings And Certifications</h2>
      <div className="education-container">
        <div className="training-box animate__animated animate__fadeInLeft">
          <div className="education-header">
            <h3>June 2023-July 2023</h3>
          </div>
          <div className="education-body">
            <p>React JS</p>
            <p>Solitaire Infosys Mohali</p>
            <a
              href="https://drive.google.com/file/d/1P3vk12O0ArPQbp1C9pjlnoEdTmn1uxDe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="training-link"
            >
              View Certificate
            </a>
          </div>
        </div>

        <div className="training-box animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="education-header">
            <h3>June 2024-July 2024</h3>
          </div>
          <div className="education-body">
            <p>Node JS</p>
            <p>Internshala Trainings</p>
            <a
              href="https://drive.google.com/file/d/1cKyEhg2ihYLwLepk9ngBeGQjAM6ww1zH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="training-link"
            >
              View Certificate
            </a>
          </div>
        </div>

        <div className="training-box animate__animated animate__fadeInLeft animate__delay-2s">
          <div className="education-header">
            <h3>July 2024-Aug 2024</h3>
          </div>
          <div className="education-body">
            <p>Machine Learning</p>
            <p>Internshala Trainings</p>
            <a
              href="https://drive.google.com/file/d/1nxI054dYDmiTJi08rH1Qu0sf7L0yL5Q8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="training-link"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
