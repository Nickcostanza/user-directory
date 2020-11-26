import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item search">
            <Link
              to="/all"
              className={window.location.pathname === "/all" ? "nav-link active" : "nav-link"}
            >
              All Employees
            </Link>
          </li>
        </ul>
      </div>
      <div className="search-div">
        
      </div>
    </nav>
  );
}

export default Navbar;