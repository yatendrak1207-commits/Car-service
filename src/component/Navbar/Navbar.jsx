import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <Link to="/" className="navbar-logo">
        AutoCare
      </Link>

      {/* Main Navigation */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/locations">Locations</Link>
      </div>

      {/* Right Side Actions */}
      <div className="navbar-actions">
        <Link to="/login" className="navbar-login">
          Login
        </Link>

        <Link to="/booking" className="navbar-book">
          Book Service
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
