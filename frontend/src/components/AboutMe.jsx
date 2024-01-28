
import React from 'react';
import './AboutMe.css'; 

const AboutMe = () => {
  const image = "https://portal.hagbes.com/mrf/images/solomon_yeshiwas.png";
  return (
    <div className="about-me-container">
      <div className="profile-picture">
        <img src={image} alt="Profile" className="rounded-full" />
      </div>
      <div className="info">
        <h2 className="text-2xl font-bold mb-4">Solomon Yeshiwas</h2>
        <p className="text-gray-600 mb-4">
        An enthusiastic software engineer, Web Developer .
        </p>
        <div className="social-links">
           <a href="https://twitter.com/Mrsolomon_y" target="_blank" rel="noopener noreferrer" className="mr-4">
            Twitter
          </a>
          <a href="https://linkedin.com/in/selestyle" target="_blank" rel="noopener noreferrer" className="mr-4">
            LinkedIn
          </a>
          <a href="https://github.com/Mrsele" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
