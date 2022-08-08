import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo.png" className="logo" alt="logo" />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <i className="fas fa-bars" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item dropdown main-navbar">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Sports
                    </a>
                    <ul className="dropdown-menu main-menu shadow">
                      <li>
                        <Link to="/sports/soccer">

                        <a className="nav-link" href="soccer-bets-2.html">
                          Soccer
                        </a>
                        </Link>
                      </li>
                  
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="right-area header-action d-flex align-items-center max-un">
                  <Link to="/auth">
                    <button
                      type="button"
                      className="login"
                      data-bs-toggle="modal"
                      data-bs-target="#loginMod"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/auth">
                    <button
                      type="button"
                      className="cmn-btn reg"
                      data-bs-toggle="modal"
                      data-bs-target="#loginMod"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
