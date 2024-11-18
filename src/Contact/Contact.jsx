import React from 'react';
import './Contact.css'; // Add styles in this file
import { MdEmail } from "react-icons/md";
import { FaPhone, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='lbg'>
    <div className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-item">
          <MdEmail className="contact-icon" />
          <a href="mailto:guptakashishh13@example.com" className="contact-link">
            guptakashishh13@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+91 9530869005" className="contact-link">
            +91 9530869005
          </a>
        </div>
        <div className="contact-item">
          <FaGithubSquare className="contact-icon" />
          <a
            href="https://github.com/Kashishh13"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/kashish-gupta-406036283/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
