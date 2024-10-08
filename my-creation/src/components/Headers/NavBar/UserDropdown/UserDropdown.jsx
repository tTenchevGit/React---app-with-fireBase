import React, { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../../config/firebaseConfig"; 
import { useAuth } from "../../../../context/AuthContext";
import PayBill from "./PayBill";
import { Link, useNavigate } from "react-router-dom";

const UserDropdown = ({user, count}) => {
  const { spentClicks, withdrawVisibleUntil } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

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

  useEffect(() => {
    const now = new Date();
    if (withdrawVisibleUntil && now < new Date(withdrawVisibleUntil)) {
      setShowWithdraw(true);
    } else {
      setShowWithdraw(false);
    }
  }, [withdrawVisibleUntil]);

  // useEffect(() => {
  //   const now = Date.now();
  //   const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
  //   const recentClicks = spentClicks.filter(click => click > thirtyDaysAgo);

  //   // Check if there are 30 or more clicks in the last 30 days
  //   if (recentClicks.length >= 30) {
  //     if (!withdrawVisibleUntil) {
  //       // Set withdraw visibility for the next 30 days if not already set
  //       const visibilityUntil = new Date(now + 30 * 24 * 60 * 60 * 1000);
  //       localStorage.setItem('withdrawVisibleUntil', visibilityUntil);
  //       setShowWithdraw(true);
  //     } else if (new Date() < new Date(withdrawVisibleUntil)) {
  //       // Show withdraw button if within the visibility period
  //       setShowWithdraw(true);
  //     } else {
  //       setShowWithdraw(false);
  //     }
  //   } else {
  //     setShowWithdraw(false);
  //   }
  // }, [spentClicks, withdrawVisibleUntil]);
  
  const handleLogout = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
  };

  
  const getUserName = (email) => {
    if (!email) return "";
    return email.substring(0, email.indexOf("@"));
  };

  const handlePayClick = () => {
    navigate('/paybill', { state: { count } }); // Navigate to PayBill with count as state
  };


  const handleWithdrawClick = () => {
    navigate('/Withdrawal', { state: { count } }); // Pass count via state
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
          
           {count <= 0 && <button onClick={handlePayClick}>Pay</button>}
          {count > 0 && showWithdraw && <button  onClick={handleWithdrawClick} >Withdraw</button>}
          
          
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
