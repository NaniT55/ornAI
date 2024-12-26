"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";
import { useAppSelector } from "@/redux/hooks";
import AuthPopup from "../loginpopup/Loginpopup";

type Props = {
  position: string;
  btnPosition: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
};

const NavigationSection = ({ position, btnPosition, navRef }: Props) => {
  const isMobileNavOpen = useAppSelector((state) => state.mobileNav.isMobileNavOpen);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen((prevState) => !prevState);
  };

  const closeAuthPopup = () => {
    setIsAuthPopupOpen(false);
  };

  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        {/* Home Link */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        {/* Courses Dropdown */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/courses">Courses</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/courses/modern-frontend-frameworks">
                Course Details
              </SubNavlink>
            </li>
          </ul>
        </li>

        {/* Grooming Plans Link */}
        <li className="nav-item">
          <a className="nav-link" href="/grooming-plans">
            Grooming Plans
          </a>
        </li>

        {/* About Us Link */}
        <li className="nav-item">
          <Navlink href="/about">About Us</Navlink>
        </li>

        {/* Contact Link */}
        <li className="nav-item">
          <Navlink href="/contact">Contact</Navlink>
        </li>
      </ul>

      {/* Register/Login Button */}
      <div className={`navbar-buttons ${btnPosition ? "btn-position" : ""}`}>
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
};

export default NavigationSection;
