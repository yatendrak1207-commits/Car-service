import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login data:", formData);

    // Backend / JWT login yahan connect hoga
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-visual">
        <div className="login-overlay">
          <Link to="/" className="login-logo">
            AutoCare
          </Link>

          <div className="login-visual-content">
            <span>CAR CARE MADE SIMPLE</span>

            <h1>
              Your car deserves
              <br />
              better care.
            </h1>

            <p>
              Book reliable car services, manage your vehicles and keep
              everything in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-form-side">
        <div className="login-box">
          <Link to="/" className="mobile-login-logo">
            AutoCare
          </Link>

          <div className="login-heading">
            <span>WELCOME BACK</span>

            <h2>Login to your account</h2>

            <p>Enter your details to continue to AutoCare.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="login-field">
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

            {/* Password */}
            <div className="login-field">
              <div className="password-label">
                <label>Password</label>

                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="password-toggle"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <label className="remember-row">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              <span>Remember me</span>
            </label>

            {/* Login */}
            <button type="submit" className="login-btn">
              Login
              <span>→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup"> Create an account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
