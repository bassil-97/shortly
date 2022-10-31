import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import StatsItem from "../../components/StatsItem/StatsItem";
import UrlShorter from "../../components/UrlShorter/UrlShorter";

// Stats Items Icons
import BrandIcon from "../../assets/icon-brand-recognition.svg";
import RecordsIcon from "../../assets/icon-detailed-records.svg";
import CustomizeIcon from "../../assets/icon-fully-customizable.svg";

// Social Media Logos
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

import homeImage from "../../assets/illustration-working.svg";

export default function Home() {
  let brandText = `Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`;

  let recordsText = `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`;

  let customizeText = `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`;

  return (
    <div className="container-fluid home-page_container p-0">
      <Navbar />
      <div className="app-main__container">
        <div className="page-section">
          <div className="row">
            <div className="col-lg-6">
              <h1>more than just shorter links</h1>
              <h4>
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </h4>
              <button type="button" className="main-btn mt-5">
                get started
              </button>
            </div>
            <div className="col-lg-6">
              <img src={homeImage} className="img-fluid" alt="Shorter" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid advanced-stats__container">
        <div className="page-section">
          <UrlShorter />
          <div className="section-header">
            <h1 className="text-center fw-bold mb-4">Advanced Statistics</h1>
            <p className="text-center fw-bold">
              Track how your links are performing across the web with <br /> our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="stats-items">
            <div className="line"></div>
            <StatsItem
              icon={BrandIcon}
              title={"Brand Recognition"}
              content={brandText}
            />
            <div className="mt-4">
              <StatsItem
                icon={RecordsIcon}
                title={"Detailed Records"}
                content={recordsText}
                className="mt-4"
              />
            </div>
            <div className="mt-5">
              <StatsItem
                icon={CustomizeIcon}
                title={"Fully Customizable"}
                content={customizeText}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid boost-links">
        <div className="page-section">
          <h1 className="text-light text-center text-capitalize fw-bold mb-4">
            Boost your links today
          </h1>
          <button type="button" className="main-btn">
            get started
          </button>
        </div>
      </div>

      <footer className="app-footer">
        <div className="page-section">
          <div className="row w-100">
            <div className="col-lg-4 col-md-6 col-xs-6 col">
              <h3 className="mb-0 fw-bold">Shortly</h3>
            </div>
            <div className="col-lg-8 col-md-6 col-xs-6">
              <div className="app-footer-links">
                <div className="row w-100">
                  <div className="col-lg-3">
                    <h6 className="footer-title">features</h6>
                    <ul className="footer-section-list">
                      <li>link shortening</li>
                      <li>branded links</li>
                      <li>analytics</li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h6 className="footer-title">resources</h6>
                    <ul className="footer-section-list">
                      <li>blog</li>
                      <li>developers</li>
                      <li>support</li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h6 className="footer-title">company</h6>
                    <ul className="footer-section-list">
                      <li>about</li>
                      <li>our team</li>
                      <li>careers</li>
                      <li>contact</li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <h6 className="footer-title">socials</h6>
                    <div className="footer-socials">
                      <img src={facebook} alt="fb-icon" />
                      <img src={twitter} alt="twitter-icon" />
                      <img src={pinterest} alt="pinterest-icon" />
                      <img src={instagram} alt="instagram-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
