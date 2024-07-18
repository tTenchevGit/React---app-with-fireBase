import React, { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebaseConfig"; 

const UserDropdown = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  
  const handleLogout = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
  };

  
  const getUserName = (email) => {
    if (!email) return "";
    return email.substring(0, email.indexOf("@"));
  };

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <div className="user-greeting" onClick={toggleDropdown}>
        Hello, {getUserName(user.email)}
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <button onClick={handleLogout}>Logout</button>
          <button >Settings</button>
        </div>
      )}
      <style>
        {`
          .user-dropdown {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }

          .user-greeting {
            margin-left: auto;
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
            margin-top: 30px;
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

export default UserDropdown;
