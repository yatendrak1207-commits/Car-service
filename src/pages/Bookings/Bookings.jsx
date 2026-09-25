import { Link } from "react-router-dom";
import "./Bookings.css";

function Bookings() {
  const bookings = [
    {
      id: "BK001",
      service: "General Car Service",
      car: "Hyundai Creta",
      number: "RJ 27 AB 1234",
      date: "28 Sep 2026",
      time: "10:00 AM",
      location: "Udaipur",
      amount: "₹999",
      status: "Confirmed",
    },
    {
      id: "BK002",
      service: "AC Service",
      car: "Maruti Suzuki Swift",
      number: "RJ 27 CD 5678",
      date: "15 Jun 2026",
      time: "11:30 AM",
      location: "Udaipur",
      amount: "₹799",
      status: "Completed",
    },
  ];

  return (
    <div className="bookings-page">
      {/* Sidebar */}
      <aside className="bookings-sidebar">
        <div className="sidebar-logo">AutoCare</div>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/my-cars">My Cars</Link>

          <Link to="/bookings" className="active">
            My Bookings
          </Link>

          <Link to="/service-history">Service History</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Link to="/" className="back-website">
          ← Back to Website
        </Link>
      </aside>

      {/* Main Content */}
      <main className="bookings-main">
        <div className="bookings-header">
          <div>
            <span>MY BOOKINGS</span>
            <h1>Your Bookings</h1>
            <p>View and manage all your car service bookings.</p>
          </div>

          <Link to="/booking" className="new-booking-btn">
            + Book New Service
          </Link>
        </div>

        {/* Booking Stats */}
        <div className="booking-stats">
          <div className="booking-stat-card">
            <span>Total Bookings</span>
            <strong>{bookings.length}</strong>
          </div>

          <div className="booking-stat-card">
            <span>Upcoming</span>
            <strong>
              {bookings.filter((item) => item.status === "Confirmed").length}
            </strong>
          </div>

          <div className="booking-stat-card">
            <span>Completed</span>
            <strong>
              {bookings.filter((item) => item.status === "Completed").length}
            </strong>
          </div>
        </div>

        {/* Bookings */}
        <section className="bookings-section">
          <div className="section-title">
            <h2>Booking History</h2>
            <span>{bookings.length} bookings</span>
          </div>

          <div className="bookings-list">
            {bookings.map((booking) => (
              <div className="booking-card" key={booking.id}>
                <div className="booking-card-top">
                  <div>
                    <span className="booking-id">{booking.id}</span>

                    <h3>{booking.service}</h3>
                  </div>

                  <span
                    className={`booking-status ${booking.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="booking-details">
                  <div>
                    <span>Car</span>
                    <strong>{booking.car}</strong>
                    <small>{booking.number}</small>
                  </div>

                  <div>
                    <span>Date & Time</span>
                    <strong>{booking.date}</strong>
                    <small>{booking.time}</small>
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>{booking.location}</strong>
                  </div>

                  <div>
                    <span>Amount</span>
                    <strong>{booking.amount}</strong>
                  </div>
                </div>

                <div className="booking-card-bottom">
                  <span>
                    Booking ID: <strong>{booking.id}</strong>
                  </span>

                  <div className="booking-actions">
                    <button>View Details</button>

                    {booking.status === "Confirmed" && (
                      <button className="cancel-btn">Cancel Booking</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Bookings;
