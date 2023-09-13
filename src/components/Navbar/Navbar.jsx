import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top z-2">
      <div className="container">
        <NavLink className="navbar-brand text-uppercase fw-bold fs-4" to="/">
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fa fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link py-1 px-2" to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link py-1 px-2 mx-2" to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link py-1 px-2" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
