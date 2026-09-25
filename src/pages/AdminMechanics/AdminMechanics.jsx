import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminMechanics.css";

function AdminMechanics() {
  const [mechanics, setMechanics] = useState([
    {
      id: "MEC001",
      name: "Rakesh Singh",
      phone: "+91 98765 11111",
      specialty: "Engine & General Service",
      bookings: 42,
      rating: 4.9,
      status: "Available",
    },
    {
      id: "MEC002",
      name: "Vikas Sharma",
      phone: "+91 98765 22222",
      specialty: "AC & Electrical",
      bookings: 35,
      rating: 4.8,
      status: "Busy",
    },
    {
      id: "MEC003",
      name: "Amit Kumar",
      phone: "+91 98765 33333",
      specialty: "Brake & Suspension",
      bookings: 29,
      rating: 4.7,
      status: "Available",
    },
    {
      id: "MEC004",
      name: "Suresh Meena",
      phone: "+91 98765 44444",
      specialty: "Tyre & Wheel Care",
      bookings: 24,
      rating: 4.6,
      status: "Unavailable",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredMechanics = mechanics.filter((mechanic) => {
    const value = search.toLowerCase();

    return (
      mechanic.name.toLowerCase().includes(value) ||
      mechanic.id.toLowerCase().includes(value) ||
      mechanic.specialty.toLowerCase().includes(value)
    );
  });

  const changeStatus = (id, status) => {
    setMechanics((prev) =>
      prev.map((mechanic) =>
        mechanic.id === id ? { ...mechanic, status } : mechanic,
      ),
    );
  };

  return (
    <div className="admin-mechanics-page">
      <aside className="admin-mechanics-sidebar">
        <div className="admin-mechanics-logo">
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

          <Link to="/admin/customers">
            <span>👥</span>Customers
          </Link>

          <Link to="/admin/services">
            <span>🔧</span>Services
          </Link>

          <Link to="/admin/mechanics" className="active">
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

        <div className="admin-mechanics-bottom">
          <Link to="/profile">
            <span>⚙️</span>Settings
          </Link>

          <Link to="/">
            <span>↩</span>Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-mechanics-main">
        <header className="admin-mechanics-header">
          <div>
            <span>MECHANIC MANAGEMENT</span>
            <h1>Mechanics</h1>
            <p>Manage mechanics and their service availability.</p>
          </div>

          <button className="add-mechanic-btn">+ Add Mechanic</button>
        </header>

        <div className="mechanic-stats">
          <div>
            <span>Total Mechanics</span>
            <strong>{mechanics.length}</strong>
          </div>

          <div>
            <span>Available</span>
            <strong>
              {mechanics.filter((item) => item.status === "Available").length}
            </strong>
          </div>

          <div>
            <span>Busy</span>
            <strong>
              {mechanics.filter((item) => item.status === "Busy").length}
            </strong>
          </div>

          <div>
            <span>Average Rating</span>
            <strong>
              {(
                mechanics.reduce((total, item) => total + item.rating, 0) /
                mechanics.length
              ).toFixed(1)}
            </strong>
          </div>
        </div>

        <div className="mechanic-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search mechanics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <section className="mechanics-card">
          <div className="mechanics-card-header">
            <div>
              <h2>All Mechanics</h2>
              <p>{filteredMechanics.length} mechanics</p>
            </div>
          </div>

          <div className="mechanics-table-wrapper">
            <table className="mechanics-table">
              <thead>
                <tr>
                  <th>Mechanic</th>
                  <th>Specialty</th>
                  <th>Bookings</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredMechanics.map((mechanic) => (
                  <tr key={mechanic.id}>
                    <td>
                      <div className="mechanic-name">
                        <div>{mechanic.name.charAt(0)}</div>

                        <section>
                          <strong>{mechanic.name}</strong>
                          <small>
                            {mechanic.id} · {mechanic.phone}
                          </small>
                        </section>
                      </div>
                    </td>

                    <td>{mechanic.specialty}</td>

                    <td>{mechanic.bookings}</td>

                    <td>
                      <strong>★ {mechanic.rating}</strong>
                    </td>

                    <td>
                      <select
                        value={mechanic.status}
                        onChange={(e) =>
                          changeStatus(mechanic.id, e.target.value)
                        }
                        className={`mechanic-status ${mechanic.status.toLowerCase()}`}
                      >
                        <option>Available</option>
                        <option>Busy</option>
                        <option>Unavailable</option>
                      </select>
                    </td>

                    <td>
                      <button className="mechanic-view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminMechanics;
