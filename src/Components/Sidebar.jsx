

import React from "react";
import { FaHome, FaBox, FaComments, FaChartLine, FaBullhorn, FaUsers, FaChartBar, FaCog, FaQuestionCircle, FaMoon } from "react-icons/fa";
import { CgArrowsScrollV } from "react-icons/cg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="brand">Storeshop</h2>

      <select className="store-select">
        <option>Banana Store</option>
      </select>

      <ul className="sidebar-menu">
        <li className="active">
          <FaHome className="icon" />
          Dashboard
        </li>
        <li>
          <FaBox className="icon" />
          Products
        </li>
        <li>
          <FaComments className="icon" />
          Conversation
        </li>
        <li className="notification">
          <FaChartLine className="icon" />
          Analytics <span className="badge">2</span>
        </li>
        <li className="notification">
          <FaBullhorn className="icon" />
          Campaigns <span className="badge">5</span>
        </li>
        <li>
          <FaUsers className="icon" />
          Audience
        </li>
        <li>
          <FaChartBar className="icon" />
          Statistics
        </li>
      </ul>

      <hr className="divider" />

      <ul className="sidebar-menu">
        <li>
          <FaCog className="icon" />
          Settings
        </li>
        <li>
          <FaQuestionCircle className="icon" />
          Help Center
        </li>
      </ul>

      <div className="dark-mode">
        <FaMoon className="icon" />
        Dark Mode
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
