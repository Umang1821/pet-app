import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-heading">Dashboard</h2>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/Details" className="navbar-link">Details</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Help" className="navbar-link">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
