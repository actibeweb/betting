import React from "react";

const Login = () => {
  return (
    <div className="log-reg" style={{marginTop:"6rem",display:"flex",justifyContent:"center"}} >
      <div className="container"  >
        <div className="row">
          <div className="col">
            <div className="" id="loginMod">
              <div className="modal-dialog">
                <div className="modal-content">
                 
                  <ul className="nav log-reg-btn justify-content-around">
                    <li className="bottom-area" role="presentation">
                      <button
                        className="nav-link"
                        id="regArea-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#regArea"
                        type="button"
                        role="tab"
                        aria-controls="regArea"
                        aria-selected="false"
                      >
                        SIGN UP
                      </button>
                    </li>
                    <li className="bottom-area" role="presentation">
                      <button
                        className="nav-link active"
                        id="loginArea-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#loginArea"
                        type="button"
                        role="tab"
                        aria-controls="loginArea"
                        aria-selected="true"
                      >
                        LOGIN
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="loginArea"
                      role="tabpanel"
                      aria-labelledby="loginArea-tab"
                    >
                      <div className="login-reg-content">
                        <div className="modal-body">
                          <div className="head-area">
                            <h6 className="title">Login Direetly With</h6>
                            <div className="social-link d-flex align-items-center">
                              <a href="javascript:void(0)" className="active">
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
                          <div className="form-area">
                            <form action="#">
                              <div className="row">
                                <div className="col-12">
                                  <div className="single-input">
                                    <label htmlFor="logemail">Email</label>
                                    <input
                                      type="text"
                                      id="logemail"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                  <div className="single-input">
                                    <label htmlFor="logpassword">
                                      Password
                                    </label>
                                    <input
                                      type="text"
                                      id="logpassword"
                                      placeholder="Email Password"
                                    />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="remember-me">
                                    <label className="checkbox-single d-flex align-items-center">
                                      <span className="left-area">
                                        <span className="checkbox-area d-flex">
                                          <input
                                            type="checkbox"
                                            defaultChecked="checked"
                                          />
                                          <span className="checkmark" />
                                        </span>
                                        <span className="item-title d-flex align-items-center">
                                          <span>Remember Me</span>
                                        </span>
                                      </span>
                                    </label>
                                    <a href="javascript:void(0)">
                                      Forgot Password
                                    </a>
                                  </div>
                                </div>
                                <span className="btn-border w-100">
                                  <button className="cmn-btn w-100">
                                    LOGIN
                                  </button>
                                </span>
                              </div>
                            </form>
                            <div className="bottom-area text-center">
                              <p>
                                Not a member ?{" "}
                                <a
                                  href="javascript:void(0)"
                                  className="reg-btn"
                                >
                                  Register
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="regArea"
                      role="tabpanel"
                      aria-labelledby="regArea-tab"
                    >
                      <div className="login-reg-content regMode">
                        <div className="modal-body">
                          <div className="head-area">
                            <h6 className="title">Register On Bitbetio</h6>
                            <div className="social-link d-flex align-items-center">
                              <a href="javascript:void(0)" className="active">
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
                          <div className="form-area">
                            <form action="#">
                              <div className="row">
                                <div className="col-12">
                                  <div className="single-input">
                                    <label htmlFor="regemail">Email</label>
                                    <input
                                      type="text"
                                      id="regemail"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                  <div className="single-input">
                                    <label htmlFor="regpassword">
                                      Password
                                    </label>
                                    <input
                                      type="text"
                                      id="regpassword"
                                      placeholder="Email Password"
                                    />
                                  </div>
                                 
                                </div>
                                <div className="col-12">
                                  <div className="remember-me">
                                    <a href="javascript:void(0)">
                                      Have a referral code?
                                    </a>
                                  </div>
                                </div>
                                <span className="btn-border w-100">
                                  <button className="cmn-btn w-100">
                                    SIGN UP
                                  </button>
                                </span>
                              </div>
                            </form>
                            <div className="bottom-area text-center">
                              <p>
                                Already have an member ?{" "}
                                <a
                                  href="javascript:void(0)"
                                  className="log-btn"
                                >
                                  Login
                                </a>
                              </p>
                            </div>
                            <div className="counter-area">
                              <div className="single">
                                <div className="icon-area">
                                  <img
                                    src="assets/images/icon/signup-counter-icon-1.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-area">
                                  <p>25,179k</p>
                                  <p className="mdr">Bets</p>
                                </div>
                              </div>
                              <div className="single">
                                <div className="icon-area">
                                  <img
                                    src="assets/images/icon/signup-counter-icon-2.png"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-area">
                                  <p>6.65 BTC</p>
                                  <p className="mdr">Total Won</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
