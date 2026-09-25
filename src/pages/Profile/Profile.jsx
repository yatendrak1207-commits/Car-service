import { Link } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Yatendra Kumar",
    email: "yatendra@example.com",
    phone: "+91 98765 43210",
    city: "Udaipur",
    memberSince: "September 2026",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    if (passwords.newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Password updated successfully.");

    setPasswords({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="profile-page">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-logo">AutoCare</div>

        <nav className="profile-menu">
          <Link to="/dashboard" className="profile-menu-item">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/my-cars" className="profile-menu-item">
            <span>🚗</span>
            My Cars
          </Link>

          <Link to="/bookings" className="profile-menu-item">
            <span>📅</span>
            My Bookings
          </Link>

          <Link to="/service-history" className="profile-menu-item">
            <span>🔧</span>
            Service History
          </Link>

          <Link to="/notifications" className="profile-menu-item">
            <span>🔔</span>
            Notifications
          </Link>

          <Link to="/profile" className="profile-menu-item active">
            <span>👤</span>
            Profile
          </Link>
        </nav>

        <div className="profile-sidebar-bottom">
          <Link to="/" className="profile-menu-item">
            <span>←</span>
            Back to Website
          </Link>

          <button className="profile-logout">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="profile-main">
        {/* Header */}
        <header className="profile-header">
          <div>
            <h1>My Profile</h1>
            <p>Manage your personal information and account settings.</p>
          </div>
        </header>

        {/* Profile Overview */}
        <section className="profile-overview">
          <div className="profile-avatar">{profile.name.charAt(0)}</div>

          <div className="profile-overview-info">
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <span>Member since {profile.memberSince}</span>
          </div>

          <button
            className="edit-profile-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </section>

        {/* Personal Information */}
        <section className="profile-card">
          <div className="profile-card-header">
            <div>
              <h2>Personal Information</h2>
              <p>Your basic account information</p>
            </div>
          </div>

          <form className="profile-form" onSubmit={handleSaveProfile}>
            <div className="profile-form-grid">
              <div className="profile-field">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="profile-field">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="profile-field">
                <label>Mobile Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="profile-field">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing && (
              <div className="profile-save-area">
                <button type="submit" className="profile-save-btn">
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </section>

        {/* Change Password */}
        <section className="profile-card">
          <div className="profile-card-header">
            <div>
              <h2>Change Password</h2>
              <p>Update your account password</p>
            </div>
          </div>

          <form
            className="profile-password-form"
            onSubmit={handleChangePassword}
          >
            <div className="profile-field">
              <label>Current Password</label>

              <input
                type={showPassword ? "text" : "password"}
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
                required
              />
            </div>

            <div className="profile-password-grid">
              <div className="profile-field">
                <label>New Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="profile-field">
                <label>Confirm Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </div>

            <label className="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show password
            </label>

            <button type="submit" className="change-password-btn">
              Update Password
            </button>
          </form>
        </section>

        {/* Account Information */}
        <section className="profile-card account-info-card">
          <div className="profile-card-header">
            <div>
              <h2>Account Information</h2>
              <p>Basic details about your AutoCare account</p>
            </div>
          </div>

          <div className="account-info-grid">
            <div>
              <span>Account Status</span>
              <strong className="active-status">Active</strong>
            </div>

            <div>
              <span>Member Since</span>
              <strong>{profile.memberSince}</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>Customer</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
