import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive updates!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              OHMYNAILS
            </Link>
          </div>
          <small className="website-rights">OHMYNAILS © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/ohmynails.nz/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link tiktok"
              to="https://www.tiktok.com/@ohmynailsnz"
              target="_blank"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
