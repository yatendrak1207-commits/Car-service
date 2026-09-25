import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    console.log("Signup data:", formData);

    // Backend signup / API yahan connect hoga
  };

  return (
    <div className="signup-page">
      {/* Left Side */}
      <div className="signup-visual">
        <div className="signup-overlay">
          <Link to="/" className="signup-logo">
            AutoCare
          </Link>

          <div className="signup-visual-content">
            <span>JOIN AUTOCARE</span>

            <h1>
              Take better
              <br />
              care of your car.
            </h1>

            <p>
              Create your AutoCare account and manage your services, vehicles
              and bookings in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="signup-form-side">
        <div className="signup-box">
          <Link to="/" className="mobile-signup-logo">
            AutoCare
          </Link>

          <div className="signup-heading">
            <span>CREATE ACCOUNT</span>

            <h2>Create your account</h2>

            <p>Enter your details to get started with AutoCare.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="signup-field">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email + Phone */}
            <div className="signup-grid">
              <div className="signup-field">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-field">
                <label>Mobile Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-field">
              <label>Password</label>

              <div className="signup-password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <small>Use at least 6 characters.</small>
            </div>

            {/* Confirm Password */}
            <div className="signup-field">
              <label>Confirm Password</label>

              <div className="signup-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="signup-terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>
                I agree to the <Link to="/terms">Terms & Conditions</Link> and
                Privacy Policy.
              </span>
            </label>

            {/* Error */}
            {error && <div className="signup-error">{error}</div>}

            {/* Button */}
            <button
              type="submit"
              className={`signup-btn ${!formData.terms ? "disabled" : ""}`}
              disabled={!formData.terms}
            >
              Create Account
              <span>→</span>
            </button>
          </form>

          <div className="signup-divider">
            <span>OR</span>
          </div>

          <p className="login-link-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

          <Link to="/" className="signup-back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
