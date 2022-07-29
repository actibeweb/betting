import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container pt-120">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="newsletter">
              <div className="section-text text-center">
                <h5 className="sub-title">Subscribe Us</h5>
                <h3 className="title">For Newsletter</h3>
                <p>
                  Subscribe to our newsletter to receive all the latest news and
                  updates
                </p>
              </div>
              <form action="#">
                <div className="form-group d-flex align-items-center">
                  <input type="text" placeholder="Enter your email Address" />
                  <button>
                    <img
                      src="assets/images/icon/arrow-right-2.png"
                      alt="icon"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area pt-120">
          <div className="row">
            <div className="col-xl-12">
              <div className="menu-item">
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
                <ul className="footer-link">
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms of Services</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="copyright">
                <div className="copy-area">
                  <p>
                    {" "}
                    Copyright © <a href="index.html">Bitbetio</a> | Designed by
                    <a
                      href="https://themeforest.net/user/pixelaxis"
                      className="auth"
                    >
                      Pixelaxis
                    </a>
                  </p>
                </div>
                <div className="social-link d-flex align-items-center">
                  <a href="javascript:void(0)">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="javascript:void(0)">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
