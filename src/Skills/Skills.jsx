import React from 'react';
import './Skills.css'; // Create a separate CSS file for styling

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS', level: 95 },
  { name: 'HTML', level: 95 },
  { name: 'MonngoDb', level: 80 },
];

const Skills = () => {
  return (
    <div className='lbg'>
    <div className="skills-timeline">
      <h2>My Skills</h2>
      <div className="timeline">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar-background">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              />
                </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
