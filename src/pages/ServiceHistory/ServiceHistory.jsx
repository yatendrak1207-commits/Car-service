import { Link } from "react-router-dom";
import "./ServiceHistory.css";

function ServiceHistory() {
  const services = [
    {
      id: 1,
      service: "General Car Service",
      car: "Hyundai Creta",
      number: "RJ 27 AB 1234",
      date: "18 Sep 2026",
      amount: "₹999",
      status: "Completed",
    },
    {
      id: 2,
      service: "Oil Change",
      car: "Maruti Suzuki Swift",
      number: "RJ 27 CD 5678",
      date: "02 Aug 2026",
      amount: "₹699",
      status: "Completed",
    },
    {
      id: 3,
      service: "AC Service",
      car: "Hyundai Creta",
      number: "RJ 27 AB 1234",
      date: "15 Jun 2026",
      amount: "₹799",
      status: "Completed",
    },
    {
      id: 4,
      service: "Brake Service",
      car: "Maruti Suzuki Swift",
      number: "RJ 27 CD 5678",
      date: "20 Apr 2026",
      amount: "₹899",
      status: "Completed",
    },
  ];

  return (
    <div className="service-history-page">
      {/* Sidebar */}
      <aside className="service-history-sidebar">
        <div className="service-history-logo">AutoCare</div>

        <nav className="service-history-menu">
          <Link to="/dashboard" className="service-history-menu-item">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/my-cars" className="service-history-menu-item">
            <span>🚗</span>
            My Cars
          </Link>

          <Link to="/bookings" className="service-history-menu-item">
            <span>📅</span>
            My Bookings
          </Link>

          <Link
            to="/service-history"
            className="service-history-menu-item active"
          >
            <span>🔧</span>
            Service History
          </Link>

          <Link to="/notifications" className="service-history-menu-item">
            <span>🔔</span>
            Notifications
          </Link>

          <Link to="/profile" className="service-history-menu-item">
            <span>👤</span>
            Profile
          </Link>
        </nav>

        <div className="service-history-sidebar-bottom">
          <Link to="/" className="service-history-menu-item">
            <span>←</span>
            Back to Website
          </Link>

          <button className="service-history-logout">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="service-history-main">
        {/* Header */}
        <header className="service-history-header">
          <div>
            <h1>Service History</h1>
            <p>View your previous car services and maintenance records.</p>
          </div>

          <Link to="/booking" className="service-history-book-btn">
            + Book Service
          </Link>
        </header>

        {/* Summary */}
        <div className="service-history-summary">
          <div className="history-summary-card">
            <span>Total Services</span>
            <strong>{services.length}</strong>
            <small>All service records</small>
          </div>

          <div className="history-summary-card">
            <span>Completed</span>
            <strong>
              {services.filter((item) => item.status === "Completed").length}
            </strong>
            <small>Successfully completed</small>
          </div>

          <div className="history-summary-card">
            <span>Total Spent</span>
            <strong>₹3,396</strong>
            <small>Across all services</small>
          </div>
        </div>

        {/* Service List */}
        <section className="service-history-section">
          <div className="service-history-section-header">
            <div>
              <h2>Service Records</h2>
              <p>Your complete maintenance history</p>
            </div>

            <select className="history-filter">
              <option>All Services</option>
              <option>General Service</option>
              <option>Oil Change</option>
              <option>AC Service</option>
              <option>Brake Service</option>
            </select>
          </div>

          <div className="service-history-list">
            {services.map((item) => (
              <div className="history-card" key={item.id}>
                <div className="history-card-icon">🔧</div>

                <div className="history-card-info">
                  <h3>{item.service}</h3>

                  <p>
                    {item.car} • {item.number}
                  </p>

                  <span>Service Date: {item.date}</span>
                </div>

                <div className="history-card-amount">
                  <span>Amount</span>
                  <strong>{item.amount}</strong>
                </div>

                <div className="history-card-status">
                  <span>{item.status}</span>
                </div>

                <button className="history-view-btn">View Details</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServiceHistory;
