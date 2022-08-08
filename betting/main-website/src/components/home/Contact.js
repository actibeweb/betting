import React from 'react'

const Contact = () => {
  return (
    <>
    {/* Banner Section start */}
    <section className="banner-section inner-banner contact">
      <div className="overlay">
        <div className="shape-area">
          <img
            src="assets/images/contact-illus.png"
            className="contact-illu"
            alt="image"
          />
        </div>
        <div className="banner-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="main-content">
                  <h1>Contact Us</h1>
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
                          Contact Us
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
    {/* Contact In start */}
    <section className="contact-section">
      <div className="overlay">
        <div className="container bg-area">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="title">Get in touch with us</h2>
                <p>
                  Fill up the form and our team will get back to you within 24
                  hours
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="form-content">
                <form action="#">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="single-input">
                        <label htmlFor="fname">Name</label>
                        <input
                          type="text"
                          id="fname"
                          placeholder="What's your name?"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <label htmlFor="email">Your email address</label>
                        <input
                          type="text"
                          id="email"
                          placeholder="What's your Email?"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="(123) 480 - 3540"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Enter Your Subject?"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          placeholder="I would like to get in touch with you..."
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-10">
                      <div className="btn-border w-100 mt-40">
                        <button className="cmn-btn w-100">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Contact In end */}
    {/* FAQs In start */}
    <section className="faqs-section faqs-page">
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
          <div className="d-flex justify-content-center">
            <ul className="nav" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="cmn-btn active"
                  id="general-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#general"
                  type="button"
                  role="tab"
                  aria-controls="general"
                  aria-selected="true"
                >
                  general
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="cmn-btn"
                  id="affiliate-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#affiliate"
                  type="button"
                  role="tab"
                  aria-controls="affiliate"
                  aria-selected="false"
                >
                  affiliate
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="cmn-btn"
                  id="sports-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sports"
                  type="button"
                  role="tab"
                  aria-controls="sports"
                  aria-selected="false"
                >
                  sports
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="cmn-btn"
                  id="tournament-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tournament"
                  type="button"
                  role="tab"
                  aria-controls="tournament"
                  aria-selected="false"
                >
                  tournament
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="general"
              role="tabpanel"
              aria-labelledby="general-tab"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-xl-10">
                  <div className="faq-box">
                    <div className="accordion" id="accordionFaqsGeneral">
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="headingGeneralOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralOne"
                            aria-expanded="false"
                            aria-controls="collapseGeneralOne"
                          >
                            I want to play at Bitbetio, What do i need to do?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralOne"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralTwo"
                            aria-expanded="false"
                            aria-controls="collapseGeneralTwo"
                          >
                            How fast do I get paid once I win a bet?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralTwo"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralThree"
                            aria-expanded="false"
                            aria-controls="collapseGeneralThree"
                          >
                            What are the commissions I have to pay?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralThree"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralFour"
                            aria-expanded="false"
                            aria-controls="collapseGeneralFour"
                          >
                            Can I set the odds for any bet I want?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralFour"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralFive"
                            aria-expanded="false"
                            aria-controls="collapseGeneralFive"
                          >
                            What kind of Escrow do you provide?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralFive"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralsix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralsix"
                            aria-expanded="false"
                            aria-controls="collapseGeneralsix"
                          >
                            What makes us unique?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralsix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralsix"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralsaven">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralsaven"
                            aria-expanded="false"
                            aria-controls="collapseGeneralsaven"
                          >
                            Is the Escrow payment secured?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralsaven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralsaven"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneraleight">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneraleight"
                            aria-expanded="false"
                            aria-controls="collapseGeneraleight"
                          >
                            How do I deposit/transfer money to my transactions?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneraleight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneraleight"
                          data-bs-parent="#accordionFaqsGeneral"
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
                        <h5 className="accordion-header" id="headingGeneralNine">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseGeneralNight"
                            aria-expanded="false"
                            aria-controls="collapseGeneralNight"
                          >
                            How do I withdraw money from my Bitbetio Bets account?
                          </button>
                        </h5>
                        <div
                          id="collapseGeneralNight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingGeneralNine"
                          data-bs-parent="#accordionFaqsGeneral"
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
            <div
              className="tab-pane fade"
              id="affiliate"
              role="tabpanel"
              aria-labelledby="affiliate-tab"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-xl-10">
                  <div className="faq-box">
                    <div className="accordion" id="accordionFaqsAffiliate">
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="headingAffiliateOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateOne"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateOne"
                          >
                            I want to play at Bitbetio, What do i need to do?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateOne"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5 className="accordion-header" id="headingAffiliateTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateTwo"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateTwo"
                          >
                            How fast do I get paid once I win a bet?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateTwo"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliateThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateThree"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateThree"
                          >
                            What are the commissions I have to pay?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateThree"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliateFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateFour"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateFour"
                          >
                            Can I set the odds for any bet I want?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateFour"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliateFive"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateFive"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateFive"
                          >
                            What kind of Escrow do you provide?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateFive"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5 className="accordion-header" id="headingAffiliatesix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliatesix"
                            aria-expanded="false"
                            aria-controls="collapseAffiliatesix"
                          >
                            What makes us unique?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliatesix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliatesix"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliatesaven"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliatesaven"
                            aria-expanded="false"
                            aria-controls="collapseAffiliatesaven"
                          >
                            Is the Escrow payment secured?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliatesaven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliatesaven"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliateeight"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateeight"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateeight"
                          >
                            How do I deposit/transfer money to my transactions?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateeight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateeight"
                          data-bs-parent="#accordionFaqsAffiliate"
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
                        <h5
                          className="accordion-header"
                          id="headingAffiliateNine"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseAffiliateNight"
                            aria-expanded="false"
                            aria-controls="collapseAffiliateNight"
                          >
                            How do I withdraw money from my Bitbetio Bets account?
                          </button>
                        </h5>
                        <div
                          id="collapseAffiliateNight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingAffiliateNine"
                          data-bs-parent="#accordionFaqsAffiliate"
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
            <div
              className="tab-pane fade"
              id="sports"
              role="tabpanel"
              aria-labelledby="sports-tab"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-xl-10">
                  <div className="faq-box">
                    <div className="accordion" id="accordionFaqsSports">
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="headingSportsOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsOne"
                            aria-expanded="false"
                            aria-controls="collapseSportsOne"
                          >
                            I want to play at Bitbetio, What do i need to do?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsOne"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportsTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsTwo"
                            aria-expanded="false"
                            aria-controls="collapseSportsTwo"
                          >
                            How fast do I get paid once I win a bet?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsTwo"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportsThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsThree"
                            aria-expanded="false"
                            aria-controls="collapseSportsThree"
                          >
                            What are the commissions I have to pay?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsThree"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportsFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsFour"
                            aria-expanded="false"
                            aria-controls="collapseSportsFour"
                          >
                            Can I set the odds for any bet I want?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsFour"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportsFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsFive"
                            aria-expanded="false"
                            aria-controls="collapseSportsFive"
                          >
                            What kind of Escrow do you provide?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsFive"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportssix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportssix"
                            aria-expanded="false"
                            aria-controls="collapseSportssix"
                          >
                            What makes us unique?
                          </button>
                        </h5>
                        <div
                          id="collapseSportssix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportssix"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportssaven">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportssaven"
                            aria-expanded="false"
                            aria-controls="collapseSportssaven"
                          >
                            Is the Escrow payment secured?
                          </button>
                        </h5>
                        <div
                          id="collapseSportssaven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportssaven"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportseight">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportseight"
                            aria-expanded="false"
                            aria-controls="collapseSportseight"
                          >
                            How do I deposit/transfer money to my transactions?
                          </button>
                        </h5>
                        <div
                          id="collapseSportseight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportseight"
                          data-bs-parent="#accordionFaqsSports"
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
                        <h5 className="accordion-header" id="headingSportsNine">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSportsNight"
                            aria-expanded="false"
                            aria-controls="collapseSportsNight"
                          >
                            How do I withdraw money from my Bitbetio Bets account?
                          </button>
                        </h5>
                        <div
                          id="collapseSportsNight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSportsNine"
                          data-bs-parent="#accordionFaqsSports"
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
            <div
              className="tab-pane fade"
              id="tournament"
              role="tabpanel"
              aria-labelledby="tournament-tab"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-xl-10">
                  <div className="faq-box">
                    <div className="accordion" id="accordionFaqsTournament">
                      <div className="accordion-item">
                        <h5
                          className="accordion-header"
                          id="headingTournamentOne"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentOne"
                            aria-expanded="false"
                            aria-controls="collapseTournamentOne"
                          >
                            I want to play at Bitbetio, What do i need to do?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentOne"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentTwo"
                            aria-expanded="false"
                            aria-controls="collapseTournamentTwo"
                          >
                            How fast do I get paid once I win a bet?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentTwo"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentThree"
                            aria-expanded="false"
                            aria-controls="collapseTournamentThree"
                          >
                            What are the commissions I have to pay?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentThree"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentFour"
                            aria-expanded="false"
                            aria-controls="collapseTournamentFour"
                          >
                            Can I set the odds for any bet I want?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentFour"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentFive"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentFive"
                            aria-expanded="false"
                            aria-controls="collapseTournamentFive"
                          >
                            What kind of Escrow do you provide?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentFive"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentsix"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentsix"
                            aria-expanded="false"
                            aria-controls="collapseTournamentsix"
                          >
                            What makes us unique?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentsix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentsix"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentsaven"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentsaven"
                            aria-expanded="false"
                            aria-controls="collapseTournamentsaven"
                          >
                            Is the Escrow payment secured?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentsaven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentsaven"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamenteight"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamenteight"
                            aria-expanded="false"
                            aria-controls="collapseTournamenteight"
                          >
                            How do I deposit/transfer money to my transactions?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamenteight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamenteight"
                          data-bs-parent="#accordionFaqsTournament"
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
                        <h5
                          className="accordion-header"
                          id="headingTournamentNine"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTournamentNight"
                            aria-expanded="false"
                            aria-controls="collapseTournamentNight"
                          >
                            How do I withdraw money from my Bitbetio Bets account?
                          </button>
                        </h5>
                        <div
                          id="collapseTournamentNight"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTournamentNine"
                          data-bs-parent="#accordionFaqsTournament"
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
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Contact