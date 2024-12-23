"use client";

import React, { useState } from "react";

const EmailVerify = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending OTP logic
    setIsOtpSent(true);
    alert("OTP sent to your email!");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate OTP verification logic
    if (otp === "123456") {
      setIsVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="email-verify-container">
      <h2>Verify Your Email</h2>
      <p>
        Please verify your Email Id by clicking on the "Send OTP" button. <br />
        Enter the OTP received through email:
      </p>

      {!isOtpSent ? (
        <form onSubmit={handleEmailSubmit} className="email-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-send-otp">
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="otp-form">
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-verify-otp">
            Verify OTP
          </button>
        </form>
      )}

      {isVerified && <p className="verification-success">Your email has been verified successfully!</p>}
    </div>
  );
};

export default EmailVerify;

