import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx"; 
import UserDropdown from "./UserDropdown"; 

const NavBar = ({ count }) => {
  const { user, spentClicks } = useAuth(); // Access the user and spentClicks from the context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Monitor clicks outside the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navBar">
      <div ref={menuRef} className={`links ${isMenuOpen ? "open" : ""} ${user ? "user-true" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">Rules</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <Link to="/" className="logo">
        <img
          height={50}
          width={50}
          src="/src/assets/img/de61da8b-7c63-442a-a882-c9c7e522df0a.webp"
          alt="Logo"
        />
      </Link>
      <div className="auth-options">
        {user ? (
          <UserDropdown user={user} count={count} spentClicks={spentClicks} />
        ) : (
          <div className="auth-options-item">
            <Link className="signUpButton" to="/signup">
              Sign Up
            </Link>
            <Link className="signUpButton" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
      <style>
        {`
          .auth-options-item {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .navBar {
            display: flex;
            align-items: center;
            padding: 30px 20px;
            background-color: black;
            color: white;
            width: 100%;
            position: relative;
            box-sizing: border-box;
          }

          .signUpButton {
            padding: 4px 10px;
            text-decoration: none;
            color: #fff;
            background-color: #007bff;
            border-radius: 5px;
            margin-left: 10px; /* Added margin for spacing between buttons */
          }

          .logo {
            position: absolute; /* Absolutely position the logo */
            left: 50%;
            transform: translateX(-50%); /* Center the logo horizontally */
            text-align: center;
          }

          .navBar .logo {
            flex: 1;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
          }

          .navBar .links {
            display: flex;
            gap: 15px;
          }
          
          /* Hide links on mobile by default */
          .navBar .links {
            display: none;
          }

          /* Show links on larger screens */
          @media (min-width: 769px) {
            .navBar .links {
              display: flex;
            }

            .navBar .hamburger {
              display: none;
            }
          }
          
          /* Hamburger menu button */
          .navBar .hamburger {
            display: none;
            font-size: 24px;
            cursor: pointer;
          }
          
          /* Show hamburger menu and hide links on mobile */
          @media (max-width: 768px) {
            .navBar {
              justify-content: space-between;
            }
            
            .navBar .links {
              display: none;
              flex-direction: column;
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              background-color: black;
              text-align: center;
              padding: 10px 0;
            }
            
            .navBar .links.open {
              display: flex;
              margin-top: 50px;
              z-index: 10;
            }
            .navBar .links.open.user-true {
              margin-top: 30px !important;
            }
          
            .navBar .hamburger {
              display: block;
            }
          
            .navBar .logo {
              flex: none;
            }
          }
          
          /* Link styles */
          .navBar .links a {
            color: white;
            text-decoration: none;
            padding: 10px;
          }
          
          .navBar .links a:hover {
            background-color: #555;
          }

          .auth-options {
            margin-left: auto; /* Ensure the auth options (Sign Up or UserDropdown) are on the right side */
            display: flex;
            align-items: center;
          }

          .user-dropdown {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }

          .user-greeting {
            color: white;
            padding: 10px;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 10px;
            z-index: 1;
          }

          .dropdown-menu button {
            background: none;
            border: none;
            padding: 10px;
            cursor: pointer;
            width: 100%;
            text-align: left;
          }

          .dropdown-menu button:hover {
            background-color: #f0f0f0;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
