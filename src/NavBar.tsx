import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { BiGift } from "react-icons/bi";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import "./NavBar.css";

function NavBar() {
  const location = useLocation(); // Get the current path

  // Function to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="navbar">
      <nav>
        <Link to="/" className={`navItem ${isActive("/") ? "active" : ""}`}>
          <GrOverview className="icon" />
          <span>Overview</span>
        </Link>
        <Link
          to="/expenses"
          className={`navItem ${isActive("/expenses") ? "active" : ""}`}
        >
          <FaRegMoneyBill1 className="icon" />
          <span>Expenses</span>
        </Link>
        <Link
          to="/settings"
          className={`navItem ${isActive("/settings") ? "active" : ""}`}
        >
          <FiSettings className="icon" />
          <span>Setting</span>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
