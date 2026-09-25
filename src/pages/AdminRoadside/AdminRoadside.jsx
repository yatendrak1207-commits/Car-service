import { useState } from "react";
import { Link } from "react-router-dom";

import "./AdminRoadside.css";

function AdminRoadside() {
  const [requests, setRequests] = useState([
    {
      id: "RSA001",
      customer: "Rahul Kumar",
      phone: "+91 98765 43210",
      vehicle: "Hyundai Creta",
      registration: "RJ 27 AB 1234",
      type: "Breakdown",
      location: "Panchwati, Udaipur",
      date: "24 Sep 2026",
      time: "10:35 AM",
      status: "Pending",
    },
    {
      id: "RSA002",
      customer: "Aman Sharma",
      phone: "+91 98765 11223",
      vehicle: "Maruti Swift",
      registration: "RJ 27 CD 5678",
      type: "Flat Tyre",
      location: "Chetak Circle, Udaipur",
      date: "24 Sep 2026",
      time: "09:20 AM",
      status: "Assigned",
    },
    {
      id: "RSA003",
      customer: "Priya Singh",
      phone: "+91 98765 22334",
      vehicle: "Honda City",
      registration: "RJ 27 EF 4567",
      type: "Battery",
      location: "Hiran Magri, Udaipur",
      date: "23 Sep 2026",
      time: "06:45 PM",
      status: "Completed",
    },
    {
      id: "RSA004",
      customer: "Mohit Verma",
      phone: "+91 98765 33445",
      vehicle: "Tata Nexon",
      registration: "RJ 27 GH 7890",
      type: "Towing",
      location: "Surajpole, Udaipur",
      date: "23 Sep 2026",
      time: "04:10 PM",
      status: "In Progress",
    },
    {
      id: "RSA005",
      customer: "Neha Sharma",
      phone: "+91 98765 44556",
      vehicle: "Kia Seltos",
      registration: "RJ 27 JK 3456",
      type: "Fuel",
      location: "Shobhagpura, Udaipur",
      date: "22 Sep 2026",
      time: "02:30 PM",
      status: "Completed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status } : request,
      ),
    );
  };

  const deleteRequest = (id) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));

    if (selectedRequest?.id === id) {
      setSelectedRequest(null);
    }
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.customer.toLowerCase().includes(search.toLowerCase()) ||
      request.phone.toLowerCase().includes(search.toLowerCase()) ||
      request.id.toLowerCase().includes(search.toLowerCase()) ||
      request.registration.toLowerCase().includes(search.toLowerCase()) ||
      request.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || request.status === filter;

    return matchesSearch && matchesFilter;
  });

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "Pending",
  ).length;

  const activeRequests = requests.filter(
    (request) =>
      request.status === "Assigned" || request.status === "In Progress",
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "Completed",
  ).length;

  return (
    <div className="admin-roadside-page">
      {/* SIDEBAR */}
      <aside className="admin-roadside-sidebar">
        <div className="admin-roadside-logo">
          AutoCare
          <span>ADMIN PANEL</span>
        </div>

        <nav>
          <Link to="/admin">
            <span>▦</span>
            Dashboard
          </Link>

          <Link to="/admin/bookings">
            <span>▣</span>
            Bookings
          </Link>

          <Link to="/admin/customers">
            <span>♙</span>
            Customers
          </Link>

          <Link to="/admin/services">
            <span>⚙</span>
            Services
          </Link>

          <Link to="/admin/mechanics">
            <span>🔧</span>
            Mechanics
          </Link>

          <Link to="/admin/vehicles">
            <span>🚗</span>
            Vehicles
          </Link>

          <Link to="/admin/reviews">
            <span>★</span>
            Reviews
          </Link>

          <Link to="/admin/roadside" className="active">
            <span>🚨</span>
            Roadside Requests
          </Link>
        </nav>

        <div className="admin-roadside-bottom">
          <Link to="/profile">
            <span>◉</span>
            Settings
          </Link>

          <Link to="/">
            <span>←</span>
            Back to Website
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-roadside-main">
        <header className="admin-roadside-header">
          <div>
            <span>ROAD SIDE ASSISTANCE</span>
            <h1>Roadside Requests</h1>
            <p>
              Manage emergency roadside assistance requests and service status.
            </p>
          </div>

          <a href="tel:+919876543210" className="roadside-emergency-btn">
            ☎ Emergency Line
          </a>
        </header>

        {/* STATS */}
        <section className="roadside-stats">
          <div>
            <span>Total Requests</span>
            <strong>{totalRequests}</strong>
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingRequests}</strong>
          </div>

          <div>
            <span>Active Requests</span>
            <strong>{activeRequests}</strong>
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedRequests}</strong>
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section className="roadside-controls">
          <div className="roadside-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search customer, request ID, vehicle or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </section>

        {/* TABLE */}
        <section className="roadside-card">
          <div className="roadside-card-header">
            <div>
              <h2>Assistance Requests</h2>
              <p>View and manage customer emergency assistance requests.</p>
            </div>

            <span className="request-count">
              {filteredRequests.length} Requests
            </span>
          </div>

          <div className="roadside-table-wrapper">
            <table className="roadside-table">
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Customer</th>
                  <th>Vehicle</th>
                  <th>Assistance</th>
                  <th>Location</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id}>
                    <td>
                      <strong className="request-id">{request.id}</strong>
                    </td>

                    <td>
                      <div className="roadside-customer">
                        <div className="roadside-avatar">
                          {request.customer.charAt(0)}
                        </div>

                        <section>
                          <strong>{request.customer}</strong>
                          <small>{request.phone}</small>
                        </section>
                      </div>
                    </td>

                    <td>
                      <div className="roadside-vehicle">
                        <strong>{request.vehicle}</strong>
                        <small>{request.registration}</small>
                      </div>
                    </td>

                    <td>
                      <span className="assistance-type">{request.type}</span>
                    </td>

                    <td>
                      <span className="request-location">
                        📍 {request.location}
                      </span>
                    </td>

                    <td>
                      <div className="request-date">
                        <strong>{request.date}</strong>
                        <small>{request.time}</small>
                      </div>
                    </td>

                    <td>
                      <select
                        className={`roadside-status ${request.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        value={request.status}
                        onChange={(e) =>
                          updateStatus(request.id, e.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                      </select>
                    </td>

                    <td>
                      <div className="roadside-actions">
                        <button onClick={() => setSelectedRequest(request)}>
                          View
                        </button>

                        <button
                          className="delete-request"
                          onClick={() => deleteRequest(request.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredRequests.length === 0 && (
              <div className="roadside-empty">
                <div>🚗</div>
                <h3>No requests found</h3>
                <p>Try changing your search or status filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* VIEW MODAL */}
      {selectedRequest && (
        <div
          className="roadside-modal-overlay"
          onClick={() => setSelectedRequest(null)}
        >
          <div className="roadside-modal" onClick={(e) => e.stopPropagation()}>
            <div className="roadside-modal-header">
              <div>
                <span>REQUEST DETAILS</span>
                <h2>{selectedRequest.id}</h2>
              </div>

              <button onClick={() => setSelectedRequest(null)}>×</button>
            </div>

            <div className="roadside-modal-grid">
              <div>
                <span>Customer</span>
                <strong>{selectedRequest.customer}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{selectedRequest.phone}</strong>
              </div>

              <div>
                <span>Vehicle</span>
                <strong>{selectedRequest.vehicle}</strong>
              </div>

              <div>
                <span>Registration</span>
                <strong>{selectedRequest.registration}</strong>
              </div>

              <div>
                <span>Assistance Type</span>
                <strong>{selectedRequest.type}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedRequest.status}</strong>
              </div>

              <div className="full-width">
                <span>Location</span>
                <strong>{selectedRequest.location}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{selectedRequest.date}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{selectedRequest.time}</strong>
              </div>
            </div>

            <div className="roadside-modal-actions">
              <a href={`tel:${selectedRequest.phone}`}>☎ Call Customer</a>

              <a
                href={`https://wa.me/${selectedRequest.phone.replace(
                  /[^0-9]/g,
                  "",
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRoadside;
