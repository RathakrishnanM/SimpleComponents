import React, { useState } from "react";
import "./App.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Toggle Dropdown
        <span className={isOpen ? "arrow-up" : "arrow-down"}></span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
}
