import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid mt-4 navbar-wrapper">
        <a className="navbar-brand text-capitalize fw-bold" href="#">
          shortly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                resources
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-light text-dark text-capitalize fw-bold"
            >
              login
            </button>
            <button type="button" className="btn btn-primary main-btn">
              sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
