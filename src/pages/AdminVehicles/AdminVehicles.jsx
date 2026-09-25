import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminVehicles.css";

function AdminVehicles() {
  const [vehicles] = useState([
    {
      id: "CAR001",
      customer: "Rahul Kumar",
      brand: "Hyundai",
      model: "Creta",
      number: "RJ 27 AB 1234",
      year: "2022",
      fuel: "Petrol",
      services: 5,
    },
    {
      id: "CAR002",
      customer: "Aman Sharma",
      brand: "Maruti Suzuki",
      model: "Swift",
      number: "RJ 27 CD 5678",
      year: "2021",
      fuel: "Petrol",
      services: 3,
    },
    {
      id: "CAR003",
      customer: "Priya Singh",
      brand: "Honda",
      model: "City",
      number: "RJ 27 EF 4567",
      year: "2023",
      fuel: "Petrol",
      services: 7,
    },
    {
      id: "CAR004",
      customer: "Mohit Verma",
      brand: "Tata",
      model: "Nexon",
      number: "RJ 27 GH 7890",
      year: "2022",
      fuel: "Diesel",
      services: 2,
    },
    {
      id: "CAR005",
      customer: "Neha Sharma",
      brand: "Kia",
      model: "Seltos",
      number: "RJ 27 JK 3456",
      year: "2024",
      fuel: "Petrol",
      services: 1,
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) => {
    const value = search.toLowerCase();

    return (
      vehicle.customer.toLowerCase().includes(value) ||
      vehicle.brand.toLowerCase().includes(value) ||
      vehicle.model.toLowerCase().includes(value) ||
      vehicle.number.toLowerCase().includes(value)
    );
  });

  return (
    <div className="admin-vehicles-page">
      <aside className="admin-vehicles-sidebar">
        <div className="admin-vehicles-logo">
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

          <Link to="/admin/mechanics">
            <span>🧑‍🔧</span>Mechanics
          </Link>

          <Link to="/admin/vehicles" className="active">
            <span>🚗</span>Vehicles
          </Link>

          <Link to="/admin/reviews">
            <span>⭐</span>Reviews
          </Link>

          <Link to="/admin/roadside">
            <span>🚨</span>Roadside Requests
          </Link>
        </nav>

        <div className="admin-vehicles-bottom">
          <Link to="/profile">
            <span>⚙️</span>Settings
          </Link>

          <Link to="/">
            <span>↩</span>Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-vehicles-main">
        <header className="admin-vehicles-header">
          <div>
            <span>VEHICLE MANAGEMENT</span>
            <h1>Vehicles</h1>
            <p>View all vehicles registered by customers.</p>
          </div>
        </header>

        <div className="vehicle-stats">
          <div>
            <span>Total Vehicles</span>
            <strong>{vehicles.length}</strong>
          </div>

          <div>
            <span>Petrol</span>
            <strong>
              {vehicles.filter((item) => item.fuel === "Petrol").length}
            </strong>
          </div>

          <div>
            <span>Diesel</span>
            <strong>
              {vehicles.filter((item) => item.fuel === "Diesel").length}
            </strong>
          </div>

          <div>
            <span>Total Services</span>
            <strong>
              {vehicles.reduce((total, item) => total + item.services, 0)}
            </strong>
          </div>
        </div>

        <div className="vehicle-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search vehicle, customer or registration..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <section className="vehicles-admin-card">
          <div className="vehicles-admin-header">
            <div>
              <h2>All Vehicles</h2>
              <p>Showing {filteredVehicles.length} vehicles</p>
            </div>
          </div>

          <div className="vehicles-table-wrapper">
            <table className="vehicles-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Customer</th>
                  <th>Registration</th>
                  <th>Year</th>
                  <th>Fuel</th>
                  <th>Services</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>
                      <div className="vehicle-name">
                        <div className="vehicle-icon">🚗</div>

                        <section>
                          <strong>
                            {vehicle.brand} {vehicle.model}
                          </strong>

                          <small>{vehicle.id}</small>
                        </section>
                      </div>
                    </td>

                    <td>{vehicle.customer}</td>

                    <td>
                      <strong>{vehicle.number}</strong>
                    </td>

                    <td>{vehicle.year}</td>

                    <td>{vehicle.fuel}</td>

                    <td>{vehicle.services}</td>

                    <td>
                      <button className="vehicle-view-btn">View</button>
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

export default AdminVehicles;
