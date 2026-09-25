import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminCustomers.css";

function AdminCustomers() {
  const [customers, setCustomers] = useState([
    {
      id: "CUS001",
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      phone: "+91 98765 43210",
      city: "Udaipur",
      cars: 2,
      bookings: 8,
      spent: 8450,
      status: "Active",
    },
    {
      id: "CUS002",
      name: "Aman Sharma",
      email: "aman@gmail.com",
      phone: "+91 98765 11223",
      city: "Udaipur",
      cars: 1,
      bookings: 5,
      spent: 4299,
      status: "Active",
    },
    {
      id: "CUS003",
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "+91 98765 22334",
      city: "Jaipur",
      cars: 2,
      bookings: 11,
      spent: 12450,
      status: "Active",
    },
    {
      id: "CUS004",
      name: "Mohit Verma",
      email: "mohit@gmail.com",
      phone: "+91 98765 33445",
      city: "Delhi",
      cars: 1,
      bookings: 3,
      spent: 2199,
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customers.filter((customer) => {
    const value = search.toLowerCase();

    return (
      customer.name.toLowerCase().includes(value) ||
      customer.email.toLowerCase().includes(value) ||
      customer.phone.includes(value) ||
      customer.id.toLowerCase().includes(value)
    );
  });

  const toggleStatus = (id) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: customer.status === "Active" ? "Inactive" : "Active",
            }
          : customer,
      ),
    );
  };

  return (
    <div className="admin-customers-page">
      <aside className="admin-customers-sidebar">
        <div className="admin-customers-logo">
          AutoCare
          <span>ADMIN</span>
        </div>

        <nav>
          <Link to="/admin">
            <span>▣</span>Dashboard
          </Link>

          <Link to="/admin/bookings">
            <span>📅</span>Bookings
          </Link>

          <Link to="/admin/customers" className="active">
            <span>👥</span>Customers
          </Link>

          <Link to="/admin/services">
            <span>🔧</span>Services
          </Link>

          <Link to="/admin/mechanics">
            <span>🧑‍🔧</span>Mechanics
          </Link>

          <Link to="/admin/vehicles">
            <span>🚗</span>Vehicles
          </Link>

          <Link to="/admin/reviews">
            <span>⭐</span>Reviews
          </Link>

          <Link to="/admin/roadside">
            <span>🚨</span>Roadside Requests
          </Link>
        </nav>

        <div className="admin-customers-bottom">
          <Link to="/profile">
            <span>⚙️</span>Settings
          </Link>

          <Link to="/">
            <span>↩</span>Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-customers-main">
        <header className="admin-customers-header">
          <div>
            <span>CUSTOMER MANAGEMENT</span>
            <h1>Customers</h1>
            <p>Manage all registered AutoCare customers.</p>
          </div>
        </header>

        <div className="customer-stats">
          <div>
            <span>Total Customers</span>
            <strong>{customers.length}</strong>
          </div>

          <div>
            <span>Active Customers</span>
            <strong>
              {customers.filter((item) => item.status === "Active").length}
            </strong>
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>
              {customers.reduce((total, item) => total + item.bookings, 0)}
            </strong>
          </div>

          <div>
            <span>Total Revenue</span>
            <strong>
              ₹
              {customers
                .reduce((total, item) => total + item.spent, 0)
                .toLocaleString()}
            </strong>
          </div>
        </div>

        <div className="customer-filter">
          <div>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <section className="customers-card">
          <div className="customers-card-header">
            <div>
              <h2>All Customers</h2>
              <p>Showing {filteredCustomers.length} customers</p>
            </div>
          </div>

          <div className="customers-table-wrapper">
            <table className="customers-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Contact</th>
                  <th>City</th>
                  <th>Cars</th>
                  <th>Bookings</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="customer-name-cell">
                        <div>{customer.name.charAt(0)}</div>

                        <section>
                          <strong>{customer.name}</strong>
                          <small>{customer.id}</small>
                        </section>
                      </div>
                    </td>

                    <td>
                      <div className="customer-contact">
                        <strong>{customer.email}</strong>
                        <small>{customer.phone}</small>
                      </div>
                    </td>

                    <td>{customer.city}</td>

                    <td>{customer.cars}</td>

                    <td>{customer.bookings}</td>

                    <td>
                      <strong>₹{customer.spent.toLocaleString()}</strong>
                    </td>

                    <td>
                      <button
                        className={`customer-status ${customer.status.toLowerCase()}`}
                        onClick={() => toggleStatus(customer.id)}
                      >
                        {customer.status}
                      </button>
                    </td>

                    <td>
                      <button
                        className="customer-view-btn"
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {selectedCustomer && (
        <div
          className="customer-modal-overlay"
          onClick={() => setSelectedCustomer(null)}
        >
          <div className="customer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="customer-modal-header">
              <div>
                <span>CUSTOMER DETAILS</span>
                <h2>{selectedCustomer.name}</h2>
              </div>

              <button onClick={() => setSelectedCustomer(null)}>×</button>
            </div>

            <div className="customer-modal-details">
              <div>
                <span>Customer ID</span>
                <strong>{selectedCustomer.id}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{selectedCustomer.email}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{selectedCustomer.phone}</strong>
              </div>

              <div>
                <span>City</span>
                <strong>{selectedCustomer.city}</strong>
              </div>

              <div>
                <span>Total Cars</span>
                <strong>{selectedCustomer.cars}</strong>
              </div>

              <div>
                <span>Total Bookings</span>
                <strong>{selectedCustomer.bookings}</strong>
              </div>

              <div>
                <span>Total Spent</span>
                <strong>₹{selectedCustomer.spent.toLocaleString()}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedCustomer.status}</strong>
              </div>
            </div>

            <button
              className="close-customer-modal"
              onClick={() => setSelectedCustomer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCustomers;
