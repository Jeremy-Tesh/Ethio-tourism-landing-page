import React from "react";
import { Link } from "react-router-dom";
import Ethlogo from "../assets/svg/ethio.png";

import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";

const NavbarMain = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Ethlogo} alt="logo" style={{ width: "65%" }} />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="nav justify-content-end">
          {currentUser ? (
            <li className="nav-item">
              <div
                className="btn btn-secondary"
                tabindex="-1"
                onClick={() => auth.signOut()}
              >
                sign out
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/" tabindex="-1">
                sign in
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMain;
