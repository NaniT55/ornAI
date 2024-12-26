"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Welcome: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("loggedInUser");

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

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
        <h3>Hi, {loggedInUser || "Guest"}</h3>
        <h2>Welcome to ORN-AI</h2>
        <p>Start your learning journey with us</p>
      </div>
      <div className="welcome-actions">
        <button className="welcome-button">Start Exploring</button>
        <button className="welcome-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
