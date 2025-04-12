import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="menu">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "auto", marginLeft: "-40px" }}
        />

        {/* Brand Name */}
        <Link className="navbar-brand page-scroll" to="/">
          <span className="virtual">Virtual </span>
          <span className="trainr">TrainR</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about">About</a>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <animateTransform
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sections
              </animateTransform>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#services">Services</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#portfolio">Gallery</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Login and Signup Buttons */}
          <div className="d-flex ms-auto">
            <Link to="/login" className="btn btn-login me-2">Login</Link>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
