"use client";

import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-logo">
        <img
          src="./images/orn-logo.png"
          alt="ORN-AI Logo"
          className="welcome-logo-image"
        />
      </div>
      <div className="welcome-text">
        <h3>Hi, User</h3>
        <h2>Welcome to ORN-AI</h2>
        <p>Start your learning journey with us</p>
      </div>
      <button className="welcome-button">Start Exploring</button>
    </div>
  );
};

export default Welcome;

