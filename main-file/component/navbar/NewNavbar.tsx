// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import AuthPopup from "../loginpopup/Loginpopup";
// import { useRouter } from "next/navigation";

// function NewNavbar() {
//   const router = useRouter();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleAuthPopup = () => {
//     setIsAuthPopupOpen(!isAuthPopupOpen);
//   };

//   const closeAuthPopup = () => {
//     setIsAuthPopupOpen(false);
//   };

//   const handleRoute = () => {
//     router.push("/");
//   };

//   return (
//     <div className="main-nav">
//       <div className="navbar-logo">
//         <img
//           src="./images/orn-logo.png"
//           alt="logo"
//           className=""
//           onClick={handleRoute}
//         />
//       </div>
//       <div className="navbar-container">
//         {/* Navigation Links */}
//         <ul className="navbar-links">
//           <li className="navbar-item">
//             <Link href="/" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           <li
//             className="navbar-item navbar-dropdown"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <Link
//               href="#"
//               className="navbar-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleDropdown();
//               }}
//             >
//               Courses <i className="fas fa-chevron-down"></i>
//             </Link>
//             <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
//               <li>
//                 <Link href="/">All Courses</Link>
//               </li>
//               <li>
//                 <Link href="/">My Course Details</Link>
//               </li>
//             </ul>
//           </li>
//           <li className="navbar-item">
//             <Link href="/groomingplans" className="navbar-link">
//               Grooming Plans
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link href="/Franchise" className="navbar-link">
//               Franchise
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link href="/" className="navbar-link">
//               About Us
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link href="/contact" className="navbar-link">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {/* Buttons Section */}
//       <div className="navbar-buttons">
//         <button
//           className="navbar-button register-button"
//           onClick={toggleAuthPopup}
//         >
//           Register | Login
//         </button>
//       </div>
//       {/* Auth Popup */}
//       {isAuthPopupOpen && <AuthPopup closePopup={closeAuthPopup} />}
//     </div>
//   );
// }

// export default NewNavbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthPopup from "../loginpopup/Loginpopup";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function NewNavbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen(!isAuthPopupOpen);
  };

  const closeAuthPopup = () => {
    setIsAuthPopupOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  const handleNavigate = () => {
    router.push("/sign-in");
  };

  return (
    <div className="main-nav">
      <div className="navbar-logo">
        <img
          src="./images/orn-ai-rectangular-logo-1.png"
          alt="logo"
          onClick={() => (window.location.href = "/")}
        />
      </div>

      {/* Hamburger Menu Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>

      {/* Navbar Links */}
      <div className={`navbar-container ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li className={`navbar-item ${isActive("/")}`}>
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li
            className={`navbar-item navbar-dropdown ${
              isDropdownOpen ? "open" : ""
            }`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="#"
              className="navbar-link"
              onClick={(e) => e.preventDefault()}
            >
              Courses <i className="fas fa-chevron-down"></i>
            </Link>
            <ul
              className={`dropdown-menu tf__droap_menu ${
                isDropdownOpen ? "show" : ""
              }`}
            >
              <li>
                <Link href="#" className={isActive("#")}>
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="#" className={isActive("#")}>
                  My Course Details
                </Link>
              </li>
            </ul>
          </li>
          <li className={`navbar-item ${isActive("/groomingplans")}`}>
            <Link href="/groomingplans" className="navbar-link">
              Grooming Plans
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/Franchise")}`}>
            <Link href="/Franchise" className="navbar-link">
              Franchise
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/about")}`}>
            <Link href="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className={`navbar-item ${isActive("/contact")}`}>
            <Link href="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons Section */}
        <div className="navbar-buttons">
          <button
            className="navbar-button register-button"
            onClick={handleNavigate}
          >
            Register | Login
          </button>
        </div>
      </div>

      {/* Auth Popup */}
      {isAuthPopupOpen && <AuthPopup closePopup={closeAuthPopup} />}
    </div>
  );
}

export default NewNavbar;
