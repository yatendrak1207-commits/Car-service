import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Bookings",
      value: "248",
      change: "+12%",
      icon: "📅",
    },
    {
      title: "Customers",
      value: "186",
      change: "+8%",
      icon: "👥",
    },
    {
      title: "Total Services",
      value: "9",
      change: "Active",
      icon: "🔧",
    },
    {
      title: "Revenue",
      value: "₹2,84,650",
      change: "+15%",
      icon: "💰",
    },
  ];

  const recentBookings = [
    {
      id: "BK001",
      customer: "Rahul Kumar",
      service: "General Car Service",
      car: "Hyundai Creta",
      date: "28 Sep 2026",
      amount: "₹999",
      status: "Confirmed",
    },
    {
      id: "BK002",
      customer: "Aman Sharma",
      service: "AC Service",
      car: "Maruti Swift",
      date: "27 Sep 2026",
      amount: "₹799",
      status: "Pending",
    },
    {
      id: "BK003",
      customer: "Priya Singh",
      service: "Brake Service",
      car: "Honda City",
      date: "26 Sep 2026",
      amount: "₹899",
      status: "Completed",
    },
    {
      id: "BK004",
      customer: "Mohit Verma",
      service: "Oil Change",
      car: "Tata Nexon",
      date: "25 Sep 2026",
      amount: "₹699",
      status: "Confirmed",
    },
  ];

  const services = [
    {
      name: "General Car Service",
      bookings: 68,
      revenue: "₹67,932",
    },
    {
      name: "Oil Change",
      bookings: 45,
      revenue: "₹31,455",
    },
    {
      name: "AC Service",
      bookings: 38,
      revenue: "₹30,362",
    },
    {
      name: "Brake Service",
      bookings: 31,
      revenue: "₹27,869",
    },
  ];

  return (
    <div className="admin-page">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          AutoCare
          <span>ADMIN</span>
        </div>

        <nav className="admin-nav">
          <Link to="/admin" className="admin-nav-link active">
            <span>▣</span>
            Dashboard
          </Link>

          <Link to="/admin/bookings" className="admin-nav-link">
            <span>📅</span>
            Bookings
          </Link>

          <Link to="/admin/customers" className="admin-nav-link">
            <span>👥</span>
            Customers
          </Link>

          <Link to="/admin/services" className="admin-nav-link">
            <span>🔧</span>
            Services
          </Link>

          <Link to="/admin/mechanics" className="admin-nav-link">
            <span>🧑‍🔧</span>
            Mechanics
          </Link>

          <Link to="/admin/vehicles" className="admin-nav-link">
            <span>🚗</span>
            Vehicles
          </Link>

          <Link to="/admin/reviews" className="admin-nav-link">
            <span>⭐</span>
            Reviews
          </Link>

          <Link to="/admin/roadside" className="admin-nav-link">
            <span>🚨</span>
            Roadside Requests
          </Link>
        </nav>

        <div className="admin-sidebar-bottom">
          <Link to="/profile" className="admin-nav-link">
            <span>⚙️</span>
            Settings
          </Link>

          <Link to="/" className="admin-nav-link">
            <span>↩</span>
            Back to Website
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        {/* HEADER */}
        <header className="admin-header">
          <div>
            <span className="admin-small-title">ADMIN DASHBOARD</span>

            <h1>Welcome back, Admin 👋</h1>

            <p>Here's what's happening with your car service business today.</p>
          </div>

          <div className="admin-header-right">
            <button className="admin-notification">
              🔔
              <span></span>
            </button>

            <div className="admin-profile">
              <div className="admin-avatar">A</div>

              <div>
                <strong>Admin</strong>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        {/* STATS */}
        <section className="admin-stats">
          {stats.map((stat) => (
            <div className="admin-stat-card" key={stat.title}>
              <div className="admin-stat-top">
                <div className="admin-stat-icon">{stat.icon}</div>

                <span className="admin-stat-change">{stat.change}</span>
              </div>

              <span className="admin-stat-title">{stat.title}</span>

              <strong>{stat.value}</strong>
            </div>
          ))}
        </section>

        {/* QUICK ACTIONS */}
        <section className="admin-quick-actions">
          <div className="admin-section-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Manage your business quickly.</p>
            </div>
          </div>

          <div className="quick-action-grid">
            <Link to="/admin/bookings">
              <span>📅</span>
              <div>
                <strong>Manage Bookings</strong>
                <small>View and update bookings</small>
              </div>
            </Link>

            <Link to="/admin/services">
              <span>🔧</span>
              <div>
                <strong>Manage Services</strong>
                <small>Add or edit services</small>
              </div>
            </Link>

            <Link to="/admin/customers">
              <span>👥</span>
              <div>
                <strong>Customers</strong>
                <small>View customer information</small>
              </div>
            </Link>

            <Link to="/admin/mechanics">
              <span>🧑‍🔧</span>
              <div>
                <strong>Mechanics</strong>
                <small>Manage service mechanics</small>
              </div>
            </Link>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="admin-content-grid">
          {/* RECENT BOOKINGS */}
          <div className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <h2>Recent Bookings</h2>
                <p>Latest customer bookings</p>
              </div>

              <Link to="/admin/bookings">View All →</Link>
            </div>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Booking</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        <strong>{booking.id}</strong>
                      </td>

                      <td>{booking.customer}</td>

                      <td>
                        <div className="table-service">
                          <strong>{booking.service}</strong>
                          <small>{booking.car}</small>
                        </div>
                      </td>

                      <td>{booking.date}</td>

                      <td>
                        <strong>{booking.amount}</strong>
                      </td>

                      <td>
                        <span
                          className={`admin-status ${booking.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TOP SERVICES */}
          <div className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <h2>Popular Services</h2>
                <p>Most booked services</p>
              </div>

              <Link to="/admin/services">Manage →</Link>
            </div>

            <div className="popular-services">
              {services.map((service, index) => (
                <div className="popular-service" key={service.name}>
                  <div className="popular-service-number">{index + 1}</div>

                  <div className="popular-service-info">
                    <strong>{service.name}</strong>

                    <div className="service-progress">
                      <span
                        style={{
                          width: `${Math.max(30, 100 - index * 18)}%`,
                        }}
                      ></span>
                    </div>

                    <small>{service.bookings} bookings</small>
                  </div>

                  <strong className="service-revenue">{service.revenue}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CARDS */}
        <section className="admin-bottom-grid">
          <div className="admin-info-card">
            <div className="info-card-icon">🚨</div>

            <div>
              <span>Roadside Requests</span>
              <strong>7</strong>
              <small>3 currently active</small>
            </div>

            <Link to="/admin/roadside">View →</Link>
          </div>

          <div className="admin-info-card">
            <div className="info-card-icon">⭐</div>

            <div>
              <span>New Reviews</span>
              <strong>12</strong>
              <small>Average rating 4.8</small>
            </div>

            <Link to="/admin/reviews">View →</Link>
          </div>

          <div className="admin-info-card">
            <div className="info-card-icon">🧑‍🔧</div>

            <div>
              <span>Active Mechanics</span>
              <strong>14</strong>
              <small>2 currently unavailable</small>
            </div>

            <Link to="/admin/mechanics">View →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
