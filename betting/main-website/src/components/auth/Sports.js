import React from 'react'

const Sports = () => {
  return (
    <>
    {/* Banner Section start */}
    <section className="banner-section inner-banner soccer-bets">
      <div className="overlay">
       
        <div className="banner-content">
          <div className="container">
           
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="main-content">
                  <h1>Soccer Bet </h1>
                  <div className="breadcrumb-area">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb d-flex align-items-center">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Soccer Bet
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Banner Section end */}
    {/* All Soccer Bets start */}
    <section className="bet-this-game all-soccer-bets">
      <div className="overlay pb-120">
        <div className="container">
          <div className="filter-section mb-60">
            <div className="section-text text-center">
              <h3>All Soccer Bets</h3>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-xl-3 col-lg-6">
                  <div className="input-area">
                    <img src="assets/images/icon/search-icon.png" alt="icon" />
                    <input type="text" placeholder="Search by League name" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="single-input">
                    <select>
                      <option>Search by team name</option>
                      <option value={2}>Team 1</option>
                      <option value={3}>Team 2</option>
                      <option value={4}>Team 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="single-input">
                    <select>
                      <option>Select League</option>
                      <option value={1}>League 1</option>
                      <option value={2}>League 2</option>
                      <option value={3}>League 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="input-area">
                    <img src="assets/images/icon/date-icon.png" alt="icon" />
                    <input
                      type="text"
                      id="dateSelect"
                      placeholder="Select Date"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Arsenal</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-1.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division- Belarus</h6>
                  </div>
                  <div className="team-single">
                    <h4>Volna</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-2.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Apollon</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-3.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division (Cyprus)</h6>
                  </div>
                  <div className="team-single">
                    <h4>Paeek</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-4.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Raufoss</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-5.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division (Norway)</h6>
                  </div>
                  <div className="team-single">
                    <h4>Åsane</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-6.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Lida</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-6.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division (Cyprus)</h6>
                  </div>
                  <div className="team-single">
                    <h4>Paeek</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-7.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Sūduva</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-8.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division- Belarus</h6>
                  </div>
                  <div className="team-single">
                    <h4>Dainava</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-9.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-area">
                <div className="head-area d-flex align-items-center">
                  <span className="mdr cmn-btn">Pick Winner</span>
                  <p>Mar 23, 2022,3:45PM EDT</p>
                </div>
                <div className="main-content">
                  <div className="team-single">
                    <h4>Eagle</h4>
                    <span className="mdr">Home</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-10.png" alt="image" />
                    </div>
                  </div>
                  <div className="mid-area text-center">
                    <div className="countdown d-flex align-items-center justify-content-center">
                      <h4>
                        <span className="hours">00</span>
                        <span className="ref">h</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="minutes">00</span>
                        <span className="ref">m</span>
                        <span className="seperator">:</span>
                      </h4>
                      <h4>
                        <span className="seconds">00</span>
                        <span className="ref">s</span>
                      </h4>
                    </div>
                    <h6>Division- Belarus</h6>
                  </div>
                  <div className="team-single">
                    <h4>Paeek</h4>
                    <span className="mdr">Away</span>
                    <div className="img-area">
                      <img src="assets/images/team-logo-11.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="bottom-item">
                  <button
                    type="button"
                    className="cmn-btn firstTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Eagle will win
                  </button>
                  <button
                    type="button"
                    className="cmn-btn draw"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Draw
                  </button>
                  <button
                    type="button"
                    className="cmn-btn lastTeam"
                    data-bs-toggle="modal"
                    data-bs-target="#betpop-up"
                  >
                    Paeek will win
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-center mt-60"
              >
                <ul className="pagination justify-content-center align-items-center">
                  <li className="page-item">
                    <a
                      className="page-btn previous"
                      href="javascript:void(0)"
                      aria-label="Previous"
                    >
                      <img src="assets/images/icon/arrow-left.png" alt="icon" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link xlr" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link xlr active" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link xlr" href="javascript:void(0)">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link xlr" href="javascript:void(0)">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-btn next"
                      href="javascript:void(0)"
                      aria-label="Next"
                    >
                      <img src="assets/images/icon/arrow-right.png" alt="icon" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* All Soccer Bets end */}
    {/* Betpop Up Modal start */}
    <div className="betpopmodal">
      <div className="modal fade" id="betpop-up" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-9 col-lg-11">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="top-item">
                      <a href="javascript:void(0)" className="cmn-btn firstTeam">
                        Eagle will win
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="cmn-btn active draw"
                      >
                        Draw
                      </a>
                      <a href="javascript:void(0)" className="cmn-btn lastTeam">
                        Paeek will win
                      </a>
                    </div>
                    <div className="select-odds d-flex align-items-center">
                      <h6>Select Odds</h6>
                      <div className="d-flex in-dec-val">
                        <input
                          type="text"
                          defaultValue="1.5"
                          className="InDeVal2"
                        />
                        <div className="btn-area">
                          <button className="plus2">
                            <img
                              src="assets/images/icon/up-arrow.png"
                              alt="icon"
                            />
                          </button>
                          <button className="minus2">
                            <img
                              src="assets/images/icon/down-arrow.png"
                              alt="icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mid-area">
                      <div className="single-area">
                        <div className="item-title d-flex align-items-center justify-content-between">
                          <span>Bet Value :</span>
                          <select>
                            <option value="eth">ETH</option>
                            <option value="eth">ETH</option>
                            <option value="eth">ETH</option>
                          </select>
                        </div>
                        <div className="d-flex in-dec-val">
                          <input
                            type="text"
                            defaultValue="0.1"
                            className="InDeVal1"
                          />
                          <div className="btn-area">
                            <button className="plus">
                              <img
                                src="assets/images/icon/up-arrow.png"
                                alt="icon"
                              />
                            </button>
                            <button className="minus">
                              <img
                                src="assets/images/icon/down-arrow.png"
                                alt="icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="single-area quick-amounts">
                        <div className="item-title d-flex align-items-center">
                          <p>Quick Amounts</p>
                        </div>
                        <div className="input-item">
                          <button className="quickIn">0.005</button>
                          <button className="quickIn">0.025</button>
                          <button className="quickIn">0.1</button>
                          <button className="quickIn">0.5</button>
                          <button className="quickIn">2.5</button>
                        </div>
                      </div>
                      <div className="single-area smart-value">
                        <div className="item-title d-flex align-items-center">
                          <p className="mdr">Smart Contact Value</p>
                        </div>
                        <div className="contact-val d-flex align-items-center">
                          <h4>0.1103</h4>
                          <h5>ETH</h5>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-area">
                      <div className="fee-area">
                        <p>
                          Winner will get: <span className="amount">0.179</span>{" "}
                          ETH
                        </p>
                        <p className="fee">
                          Escrow Fee: <span>5%</span>
                        </p>
                      </div>
                      <div className="btn-area">
                        <button>Make (0.1 ETH) Bet</button>
                      </div>
                      <div className="bottom-right">
                        <p>Game Closes:</p>
                        <p className="date-area">
                          Mar <span>21,2021-1:00</span> Am
                        </p>
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
    {/* Betpop Up Modal end */}
    {/* How it Works start */}
    <section className="how-it-works">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Get to Know</h5>
                <h2 className="title">How Bitbetio Works?</h2>
                <p>
                  Our platform has been designed from the ground up to be tailored
                  to the unique form of betting and settlement offered by the
                  blockchain. Follow these simple steps and make profits!
                </p>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <ul className="nav" role="tablist">
                  <li className="nav-item" role="presentation">
                    <h5
                      className="nav-link active"
                      id="sport-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sport"
                      role="tab"
                      aria-controls="sport"
                      aria-selected="true"
                    >
                      <span className="image-area">
                        <img
                          src="assets/images/icon/how-works-icon-1.png"
                          alt="icon"
                        />
                      </span>
                      Choose a sport
                    </h5>
                  </li>
                  <li className="nav-item" role="presentation">
                    <h5
                      className="nav-link"
                      id="match-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#match"
                      role="tab"
                      aria-controls="match"
                      aria-selected="false"
                    >
                      <span className="image-area">
                        <img
                          src="assets/images/icon/how-works-icon-2.png"
                          alt="icon"
                        />
                      </span>
                      Choose a match
                    </h5>
                  </li>
                  <li className="nav-item" role="presentation">
                    <h5
                      className="nav-link"
                      id="team-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team"
                      role="tab"
                      aria-controls="team"
                      aria-selected="false"
                    >
                      <span className="image-area">
                        <img
                          src="assets/images/icon/how-works-icon-3.png"
                          alt="icon"
                        />
                      </span>
                      Choose your team
                    </h5>
                  </li>
                  <li className="nav-item" role="presentation">
                    <h5
                      className="nav-link"
                      id="odds-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#odds"
                      role="tab"
                      aria-controls="odds"
                      aria-selected="false"
                    >
                      <span className="image-area">
                        <img
                          src="assets/images/icon/how-works-icon-4.png"
                          alt="icon"
                        />
                      </span>
                      Choose your odds
                    </h5>
                  </li>
                  <li className="nav-item" role="presentation">
                    <h5
                      className="nav-link"
                      id="amount-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#amount"
                      role="tab"
                      aria-controls="amount"
                      aria-selected="false"
                    >
                      <span className="image-area">
                        <img
                          src="assets/images/icon/how-works-icon-5.png"
                          alt="icon"
                        />
                      </span>
                      Choose your amount
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="sport"
                    role="tabpanel"
                    aria-labelledby="sport-tab"
                  >
                    <h4>Select a Sport</h4>
                    <div className="img-area">
                      <img src="assets/images/process-img-1.png" alt="image" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="match"
                    role="tabpanel"
                    aria-labelledby="match-tab"
                  >
                    <h4>Select a Match</h4>
                    <div className="img-area">
                      <img src="assets/images/process-img-2.png" alt="image" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="team"
                    role="tabpanel"
                    aria-labelledby="team-tab"
                  >
                    <h4>Select a Team</h4>
                    <div className="img-area">
                      <img src="assets/images/process-img-3.png" alt="image" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="odds"
                    role="tabpanel"
                    aria-labelledby="odds-tab"
                  >
                    <h4>Select Odds</h4>
                    <div className="img-area">
                      <img src="assets/images/process-img-4.png" alt="image" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="amount"
                    role="tabpanel"
                    aria-labelledby="amount-tab"
                  >
                    <h4>Select Bet Amount </h4>
                    <div className="img-area">
                      <img src="assets/images/process-img-5.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-section">
          <div className="container pt-120">
            <div className="row cus-mar">
              <div className="col-xl-4 col-md-6">
                <div className="single-area d-flex align-items-center">
                  <div className="img-area">
                    <img
                      src="assets/images/icon/counter-icon-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="text-area">
                    <h3 className="m-none">
                      <span>€</span>
                      <span className="counter">1304,941</span>
                    </h3>
                    <p>Paid Out Prize in Total</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-area d-flex align-items-center">
                  <div className="img-area">
                    <img
                      src="assets/images/icon/counter-icon-2.png"
                      alt="image"
                    />
                  </div>
                  <div className="text-area">
                    <h3 className="m-none">
                      <span className="counter">76,752</span>
                    </h3>
                    <p>Winners</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="single-area d-flex align-items-center">
                  <div className="img-area">
                    <img
                      src="assets/images/icon/counter-icon-3.png"
                      alt="image"
                    />
                  </div>
                  <div className="text-area">
                    <h3 className="m-none">
                      <span className="counter">4,392</span>
                    </h3>
                    <p>Players online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* How it Works end */}
    {/* FAQs In start */}
    <section className="faqs-section">
      <div className="overlay pt-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h5 className="sub-title">Frequently Asked Questions</h5>
                <h2 className="title">If you have questions we have answer</h2>
                <p>
                  Answers for our most popular questions about sportsbetting,
                  crypto, and bitbetio
                </p>
              </div>
            </div>
          </div>
          <div className="row faq-bg d-flex justify-content-center">
            <div className="col-xl-10">
              <div className="faq-box mt-60 mb-60">
                <div className="accordion" id="accordionFaqs">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        I want to play at Bitbetio, What do i need to do?
                      </button>
                    </h5>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How fast do I get paid once I win a bet?
                      </button>
                    </h5>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What are the commissions I have to pay?
                      </button>
                    </h5>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I set the odds for any bet I want?
                      </button>
                    </h5>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What kind of Escrow do you provide?
                      </button>
                    </h5>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        What makes us unique?
                      </button>
                    </h5>
                    <div
                      id="collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingsaven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesaven"
                        aria-expanded="false"
                        aria-controls="collapsesaven"
                      >
                        Is the Escrow payment secured?
                      </button>
                    </h5>
                    <div
                      id="collapsesaven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsaven"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingeight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseeight"
                        aria-expanded="false"
                        aria-controls="collapseeight"
                      >
                        How do I deposit/transfer money to my transactions?
                      </button>
                    </h5>
                    <div
                      id="collapseeight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingeight"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingNine">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNight"
                        aria-expanded="false"
                        aria-controls="collapseNight"
                      >
                        How do I withdraw money from my Bitbetio Bets account?
                      </button>
                    </h5>
                    <div
                      id="collapseNight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionFaqs"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQs In end */}
  </>
  
  )
}

export default Sports