import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const token = localStorage.getItem("token");
  console.log(token);
  const isDisabled = !token;

  const handleItemClick = (item) => {
    if (isDisabled) return;
    setSelectedItem(item);
    onItemClick(item);
  };

  const getItemClassName = (item) => {
    let className = selectedItem === item ? "selected" : "";
    if (isDisabled) className += " disabled";
    return className;
  };

  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li
            className={getItemClassName("dashboard")}
            onClick={() => handleItemClick("dashboard")}
          >
            Welcome
          </li>
          <li
            className={getItemClassName("user-search")}
            onClick={() => handleItemClick("user-search")}
          >
            User Search
          </li>
          <li
            className={getItemClassName("room-management")}
            onClick={() => handleItemClick("room-management")}
          >
            Room Management
          </li>
          <li
            className={getItemClassName("payment-history")}
            onClick={() => handleItemClick("payment-history")}
          >
            Payment History
          </li>
          <li
            className={getItemClassName("attendance-history")}
            onClick={() => handleItemClick("attendance-history")}
          >
            Attendance History
          </li>

          <li
            className={getItemClassName("qr")}
            onClick={() => handleItemClick("qr")}
          >
            Generate QR
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
