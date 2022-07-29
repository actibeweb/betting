import React from 'react'

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
                    Dashboard
                  </a>
                  <ul className="dropdown-menu main-menu shadow">
                    <li>
                      <a className="nav-link" href="dashboard.html">
                        Dashboard
                      </a>
                    </li>
                    <li className="dropend sub-navbar">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Setting
                      </a>
                      <ul className="dropdown-menu sub-menu shadow">
                        <li>
                          <a
                            className="nav-link"
                            href="personal-details-setting.html"
                          >
                            Personal Details
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="modify-login-password.html"
                          >
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                      <a className="nav-link" href="soccer-bets-2.html">
                        Tennis
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="soccer-bets-1.html">
                        Soccer
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="soccer-bets-2.html">
                        NBA
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown main-navbar">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Currency
                  </a>
                  <ul className="dropdown-menu main-menu shadow">
                    <li>
                      <a className="nav-link" href="escrow-bets-fee.html">
                        Escrow Bets Fee
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="currency-bet.html">
                        Currency Bet
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="betting-details.html">
                        Betting Details
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="create-new-currency.html">
                        Create Currency
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown main-navbar">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu main-menu shadow">
                    <li className="dropend sub-navbar">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Tournaments
                      </a>
                      <ul className="dropdown-menu sub-menu shadow">
                        <li>
                          <a className="nav-link" href="tournaments.html">
                            Tournaments
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="tournaments-details.html">
                            Tournaments Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropend sub-navbar">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu sub-menu shadow">
                        <li>
                          <a className="nav-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="blog-details.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="nav-link" href="affiliate.html">
                        Affiliate
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="faqs.html">
                        Faqs
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="privacy-policy.html">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="terms-conditions.html">
                        Terms Conditions
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="error.html">
                        Error
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="right-area header-action d-flex align-items-center max-un">
                <button
                  type="button"
                  className="login"
                  data-bs-toggle="modal"
                  data-bs-target="#loginMod"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="cmn-btn reg"
                  data-bs-toggle="modal"
                  data-bs-target="#loginMod"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Navbar