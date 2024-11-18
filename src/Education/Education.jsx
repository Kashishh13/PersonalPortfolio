import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
    <h2>Education</h2>
    <div className="education-container">
      <div className="education-box animate__animated animate__fadeInLeft">
        <div className="education-header">
          <h3>2018 - 2019</h3>
          <p>Class 10 (CBSE)</p>
        </div>
        <div className="education-body">
          <p>96.4%</p>
          <p>Board: CBSE</p>
        </div>
      </div>

      <div className="education-box animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="education-header">
          <h3>2020 - 2021</h3>
          <p>Class 12 (CBSE)</p>
        </div>
        <div className="education-body">
          <p>95.6%</p>
          <p>Board: CBSE</p>
        </div>
      </div>

      <div className="education-box animate__animated animate__fadeInLeft animate__delay-2s">
        <div className="education-header">
          <h3>2021 - 2025</h3>
          <p>B.Tech - Computer Science Engineering</p>
        </div>
        <div className="education-body">
          <p>SBSSU, Gurdaspur</p>
          <p>CGPA: 9.05</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Education;
