import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  };

  return (
    <div className="forgot-password-page">
      <Navbar />

      <main className="forgot-password-main">
        <div className="forgot-password-card">
          <div className="forgot-password-icon">🔐</div>

          {!submitted ? (
            <>
              <span className="forgot-password-label">ACCOUNT RECOVERY</span>

              <h1>Forgot Your Password?</h1>

              <p>
                Enter your registered email address and we'll send you
                instructions to reset your password.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="forgot-form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="forgot-submit-btn">
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="forgot-success">
              <div className="success-icon">✓</div>

              <span className="forgot-password-label">CHECK YOUR EMAIL</span>

              <h1>Reset Link Sent</h1>

              <p>
                If an account exists for <strong>{email}</strong>, you will
                receive password reset instructions shortly.
              </p>

              <button
                className="forgot-submit-btn"
                onClick={() => setSubmitted(false)}
              >
                Try Another Email
              </button>
            </div>
          )}

          <div className="forgot-back-login">
            <Link to="/login">← Back to Login</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ForgotPassword;
