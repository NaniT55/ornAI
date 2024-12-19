"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthPopup from "../loginpopup/Loginpopup";
import { useRouter } from "next/navigation";

function NewNavbar() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen(!isAuthPopupOpen);
  };

  const closeAuthPopup = () => {
    setIsAuthPopupOpen(false);
  };

  const handleRoute = () => {
    router.push("/");
  };

  return (
    <div className="main-nav">
      <div className="navbar-logo">
        <img
          src="./images/orn-logo.png"
          alt="logo"
          className=""
          onClick={handleRoute}
        />
      </div>
      <div className="navbar-container">
        {/* Navigation Links */}
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li
            className="navbar-item navbar-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="#"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Courses <i className="fas fa-chevron-down"></i>
            </Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <Link href="/">All Courses</Link>
              </li>
              <li>
                <Link href="/">My Course Details</Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link href="/groomingplans" className="navbar-link">
              Grooming Plans
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/Franchise" className="navbar-link">
              Franchise
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Buttons Section */}
      <div className="navbar-buttons">
        <button
          className="navbar-button register-button"
          onClick={toggleAuthPopup}
        >
          Register | Login
        </button>
      </div>
      {/* Auth Popup */}
      {isAuthPopupOpen && <AuthPopup closePopup={closeAuthPopup} />}
    </div>
  );
}

export default NewNavbar;
