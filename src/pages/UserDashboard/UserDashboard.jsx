import { Link } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">AutoCare</div>

        <nav className="dashboard-menu">
          <Link to="/dashboard" className="dashboard-menu-item active">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/my-cars" className="dashboard-menu-item">
            <span>🚗</span>
            My Cars
          </Link>

          <Link to="/bookings" className="dashboard-menu-item">
            <span>📅</span>
            My Bookings
          </Link>

          <Link to="/service-history" className="dashboard-menu-item">
            <span>🔧</span>
            Service History
          </Link>

          <Link to="/notifications" className="dashboard-menu-item">
            <span>🔔</span>
            Notifications
          </Link>

          <Link to="/profile" className="dashboard-menu-item">
            <span>👤</span>
            Profile
          </Link>
        </nav>

        <div className="dashboard-sidebar-bottom">
          <Link to="/" className="dashboard-menu-item">
            <span>←</span>
            Back to Website
          </Link>

          <button className="dashboard-logout">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Welcome back, Yatendra 👋</h1>
            <p>Manage your car services and bookings from here.</p>
          </div>

          <div className="dashboard-header-actions">
            <button className="notification-btn">
              🔔
              <span></span>
            </button>

            <div className="dashboard-profile">
              <div className="profile-avatar">Y</div>

              <div>
                <strong>Yatendra</strong>
                <small>Customer</small>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="stat-icon">🚗</div>
            <div>
              <span>Total Cars</span>
              <strong>2</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">📅</div>
            <div>
              <span>Upcoming Bookings</span>
              <strong>1</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">🔧</div>
            <div>
              <span>Services Completed</span>
              <strong>8</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">💰</div>
            <div>
              <span>Total Spent</span>
              <strong>₹12,450</strong>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="dashboard-content-grid">
          {/* Upcoming Booking */}
          <div className="dashboard-card upcoming-booking">
            <div className="card-header">
              <div>
                <h2>Upcoming Booking</h2>
                <p>Your next scheduled service</p>
              </div>

              <Link to="/bookings">View All</Link>
            </div>

            <div className="booking-info">
              <div className="booking-car">
                <div className="car-icon">🚘</div>

                <div>
                  <h3>Hyundai Creta</h3>
                  <p>RJ 27 AB 1234</p>
                </div>
              </div>

              <div className="booking-service">
                <span>Service</span>
                <strong>General Car Service</strong>
              </div>

              <div className="booking-date">
                <span>Date & Time</span>
                <strong>28 Sep 2026 • 11:00 AM</strong>
              </div>

              <span className="booking-status">Confirmed</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used options</p>
              </div>
            </div>

            <div className="quick-actions">
              <Link to="/booking" className="quick-action">
                <span>📅</span>
                <div>
                  <strong>Book Service</strong>
                  <small>Schedule a new service</small>
                </div>
              </Link>

              <Link to="/my-cars" className="quick-action">
                <span>🚗</span>
                <div>
                  <strong>Add Car</strong>
                  <small>Add another vehicle</small>
                </div>
              </Link>

              <Link to="/roadside-assistance" className="quick-action">
                <span>🚨</span>
                <div>
                  <strong>Roadside Assistance</strong>
                  <small>Get emergency help</small>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Services */}
        <section className="dashboard-card recent-services">
          <div className="card-header">
            <div>
              <h2>Recent Services</h2>
              <p>Your latest service activity</p>
            </div>

            <Link to="/service-history">View History</Link>
          </div>

          <div className="service-table">
            <div className="service-row service-row-header">
              <span>Service</span>
              <span>Car</span>
              <span>Date</span>
              <span>Amount</span>
              <span>Status</span>
            </div>

            <div className="service-row">
              <span>Oil Change</span>
              <span>Hyundai Creta</span>
              <span>15 Sep 2026</span>
              <span>₹699</span>
              <span className="completed">Completed</span>
            </div>

            <div className="service-row">
              <span>AC Service</span>
              <span>Maruti Swift</span>
              <span>02 Sep 2026</span>
              <span>₹799</span>
              <span className="completed">Completed</span>
            </div>

            <div className="service-row">
              <span>Brake Service</span>
              <span>Hyundai Creta</span>
              <span>20 Aug 2026</span>
              <span>₹899</span>
              <span className="completed">Completed</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
