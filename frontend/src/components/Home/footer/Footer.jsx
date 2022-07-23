import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <img
                  src="./images/icons/location_icon.png"
                  height={36}
                  width={36}
                  alt=""
                ></img>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <img src="./images/icons/phone_icon.png" alt=""></img>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <img src="./images/icons/mail_icon.png" alt=""></img>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row_1">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <div className="logo_wrap">
                      <img
                        src="./Images/logo/logo_icon.png"
                        class="img-fluid"
                        alt="logo"
                      />
                      <div className="tag_wrap">
                        <span className="footer_img">EduCrat</span>
                        <span className="footer_tagline">
                          Bridging the Gap of Learning!
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us :&nbsp;</span>
                  <a href="#">
                    <img
                      src="./Images/Icons/facebook_icon.png"
                      class="img-fluid"
                      alt="logo"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./Images/Icons/instagram_icon.png"
                      class="img-fluid"
                      alt="logo"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./Images/Icons/twitter_icon.png"
                      class="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget footer-widget-head">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum omnis quisquam quidem blanditiis obcaecati illum
                    deleniti iusto vel, eum quas.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                    <img
                      src="./Images/Icons/telegram_icon.png"
                      class="img-fluid"
                      alt="logo"
                    />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved&nbsp;&nbsp;
                  <a href="/">EduCrat</a>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
