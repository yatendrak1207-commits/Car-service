import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminBookings.css";

function AdminBookings() {
  const [bookings, setBookings] = useState([
    {
      id: "BK001",
      customer: "Rahul Kumar",
      phone: "+91 98765 43210",
      service: "General Car Service",
      car: "Hyundai Creta",
      number: "RJ 27 AB 1234",
      date: "28 Sep 2026",
      time: "10:00 AM",
      amount: 999,
      status: "Confirmed",
    },
    {
      id: "BK002",
      customer: "Aman Sharma",
      phone: "+91 98765 11223",
      service: "AC Service",
      car: "Maruti Swift",
      number: "RJ 27 CD 5678",
      date: "27 Sep 2026",
      time: "11:30 AM",
      amount: 799,
      status: "Pending",
    },
    {
      id: "BK003",
      customer: "Priya Singh",
      phone: "+91 98765 22334",
      service: "Brake Service",
      car: "Honda City",
      number: "RJ 27 EF 4567",
      date: "26 Sep 2026",
      time: "02:00 PM",
      amount: 899,
      status: "Completed",
    },
    {
      id: "BK004",
      customer: "Mohit Verma",
      phone: "+91 98765 33445",
      service: "Oil Change",
      car: "Tata Nexon",
      number: "RJ 27 GH 7890",
      date: "25 Sep 2026",
      time: "09:30 AM",
      amount: 699,
      status: "Confirmed",
    },
    {
      id: "BK005",
      customer: "Neha Sharma",
      phone: "+91 98765 44556",
      service: "Battery Service",
      car: "Kia Seltos",
      number: "RJ 27 JK 3456",
      date: "24 Sep 2026",
      time: "04:00 PM",
      amount: 499,
      status: "Cancelled",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking,
      ),
    );
  };

  const filteredBookings = bookings.filter((booking) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      booking.id.toLowerCase().includes(searchText) ||
      booking.customer.toLowerCase().includes(searchText) ||
      booking.service.toLowerCase().includes(searchText) ||
      booking.car.toLowerCase().includes(searchText) ||
      booking.number.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(
    (item) => item.status === "Pending",
  ).length;
  const confirmedBookings = bookings.filter(
    (item) => item.status === "Confirmed",
  ).length;
  const completedBookings = bookings.filter(
    (item) => item.status === "Completed",
  ).length;

  return (
    <div className="admin-bookings-page">
      {/* SIDEBAR */}
      <aside className="admin-bookings-sidebar">
        <div className="admin-bookings-logo">
          AutoCare
          <span>ADMIN</span>
        </div>

        <nav>
          <Link to="/admin">
            <span>▣</span>
            Dashboard
          </Link>

          <Link to="/admin/bookings" className="active">
            <span>📅</span>
            Bookings
          </Link>

          <Link to="/admin/customers">
            <span>👥</span>
            Customers
          </Link>

          <Link to="/admin/services">
            <span>🔧</span>
            Services
          </Link>

          <Link to="/admin/mechanics">
            <span>🧑‍🔧</span>
            Mechanics
          </Link>

          <Link to="/admin/vehicles">
            <span>🚗</span>
            Vehicles
          </Link>

          <Link to="/admin/reviews">
            <span>⭐</span>
            Reviews
          </Link>

          <Link to="/admin/roadside">
            <span>🚨</span>
            Roadside Requests
          </Link>
        </nav>

        <div className="admin-bookings-bottom">
          <Link to="/profile">
            <span>⚙️</span>
            Settings
          </Link>

          <Link to="/">
            <span>↩</span>
            Back to Website
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-bookings-main">
        {/* HEADER */}
        <div className="admin-bookings-header">
          <div>
            <span>BOOKING MANAGEMENT</span>

            <h1>Manage Bookings</h1>

            <p>View, manage and update all customer service bookings.</p>
          </div>

          <Link to="/booking" className="admin-new-booking">
            + New Booking
          </Link>
        </div>

        {/* STATS */}
        <div className="admin-booking-stats">
          <div className="admin-booking-stat">
            <span>Total Bookings</span>
            <strong>{totalBookings}</strong>
          </div>

          <div className="admin-booking-stat pending">
            <span>Pending</span>
            <strong>{pendingBookings}</strong>
          </div>

          <div className="admin-booking-stat confirmed">
            <span>Confirmed</span>
            <strong>{confirmedBookings}</strong>
          </div>

          <div className="admin-booking-stat completed">
            <span>Completed</span>
            <strong>{completedBookings}</strong>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="booking-filter-card">
          <div className="booking-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search booking, customer, service or car..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="admin-bookings-card">
          <div className="admin-bookings-card-header">
            <div>
              <h2>All Bookings</h2>
              <p>
                Showing {filteredBookings.length} of {bookings.length} bookings
              </p>
            </div>
          </div>

          <div className="admin-bookings-table-wrapper">
            <table className="admin-bookings-table">
              <thead>
                <tr>
                  <th>Booking</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Vehicle</th>
                  <th>Date & Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        <strong className="booking-id">{booking.id}</strong>
                      </td>

                      <td>
                        <div className="customer-cell">
                          <strong>{booking.customer}</strong>
                          <small>{booking.phone}</small>
                        </div>
                      </td>

                      <td>
                        <strong>{booking.service}</strong>
                      </td>

                      <td>
                        <div className="vehicle-cell">
                          <strong>{booking.car}</strong>
                          <small>{booking.number}</small>
                        </div>
                      </td>

                      <td>
                        <div className="date-cell">
                          <strong>{booking.date}</strong>
                          <small>{booking.time}</small>
                        </div>
                      </td>

                      <td>
                        <strong>₹{booking.amount}</strong>
                      </td>

                      <td>
                        <select
                          className={`status-select ${booking.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          value={booking.status}
                          onChange={(e) =>
                            updateStatus(booking.id, e.target.value)
                          }
                        >
                          <option>Pending</option>
                          <option>Confirmed</option>
                          <option>Completed</option>
                          <option>Cancelled</option>
                        </select>
                      </td>

                      <td>
                        <button
                          className="view-booking-btn"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="no-bookings">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* DETAILS MODAL */}
      {selectedBooking && (
        <div
          className="booking-modal-overlay"
          onClick={() => setSelectedBooking(null)}
        >
          <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
            <div className="booking-modal-header">
              <div>
                <span>BOOKING DETAILS</span>
                <h2>{selectedBooking.id}</h2>
              </div>

              <button onClick={() => setSelectedBooking(null)}>×</button>
            </div>

            <div className="modal-status-row">
              <span>Status</span>

              <span
                className={`modal-status ${selectedBooking.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {selectedBooking.status}
              </span>
            </div>

            <div className="modal-details">
              <div>
                <span>Customer</span>
                <strong>{selectedBooking.customer}</strong>
                <small>{selectedBooking.phone}</small>
              </div>

              <div>
                <span>Service</span>
                <strong>{selectedBooking.service}</strong>
              </div>

              <div>
                <span>Vehicle</span>
                <strong>{selectedBooking.car}</strong>
                <small>{selectedBooking.number}</small>
              </div>

              <div>
                <span>Date & Time</span>
                <strong>{selectedBooking.date}</strong>
                <small>{selectedBooking.time}</small>
              </div>

              <div>
                <span>Amount</span>
                <strong>₹{selectedBooking.amount}</strong>
              </div>
            </div>

            <div className="modal-actions">
              {selectedBooking.status === "Pending" && (
                <button
                  className="confirm-btn"
                  onClick={() => {
                    updateStatus(selectedBooking.id, "Confirmed");
                    setSelectedBooking({
                      ...selectedBooking,
                      status: "Confirmed",
                    });
                  }}
                >
                  Confirm Booking
                </button>
              )}

              {selectedBooking.status === "Confirmed" && (
                <button
                  className="complete-btn"
                  onClick={() => {
                    updateStatus(selectedBooking.id, "Completed");
                    setSelectedBooking({
                      ...selectedBooking,
                      status: "Completed",
                    });
                  }}
                >
                  Mark Completed
                </button>
              )}

              <button
                className="close-modal-btn"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminBookings;
