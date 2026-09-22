import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            AutoCare
          </Link>

          <p>
            Reliable car servicing, repairs and roadside assistance whenever you
            need it.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="LinkedIn">
              LI
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Book Service</Link>
          <Link to="/roadside-assistance">Roadside Assistance</Link>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/about">About Us</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
          <Link to="/faq">FAQ</Link>

          <a href="tel:+919999999999">+91 99999 99999</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 AutoCare. All rights reserved.</p>

        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
