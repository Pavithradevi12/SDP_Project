import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import video from '../videos/land1.mp4'; // Ensure the correct path to your video file

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h2>Most appropriate book site to reach books</h2>
        <h1>Find the book you're looking for <span>easier to read</span></h1>
        <div className="button-container">
          <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      <div className="video-container">
        <video src={video} autoPlay loop muted className="landing-video">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default LandingPage;
  