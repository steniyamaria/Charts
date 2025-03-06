import React from "react";
import { FaSearch, FaBell } from "react-icons/fa"; // Import icons
import "./TopBar.css"; // Import CSS

const TopBar = () => {
  return (
    <div className="topbar">
      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search campaign, customer, etc" />
      </div>

      {/* Right Section (Notifications & Profile) */}
      <div className="topbar-right">
        <div className="notification-container">
          <FaBell className="notification-icon" />
          <span className="notification-badge"></span> {/* Notification Dot */}
        </div>

        <div className="profile">
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile image URL
            alt="User"
            className="profile-pic"
          />
          <div className="profile-info">
            <span className="profile-name">Manik Jingga</span>
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
