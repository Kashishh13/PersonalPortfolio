import React, { useState, useEffect } from 'react';
import MyProjects from './MyProjects.js';
import './Projects.css';  // Import the CSS for styling and animation

const Projects = () => {
 
 
  return (
    <div className='education'>
         <h1>My Projects</h1>
    <div className="project-list">
     
      {MyProjects.length > 0 ? (
        MyProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <img
                src={project.image}
                className="project-img"
                alt={project.name}
              />
            </a>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
    </div>
  );
};

export default Projects;
