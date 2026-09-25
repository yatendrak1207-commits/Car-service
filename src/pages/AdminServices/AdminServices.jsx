import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminServices.css";

function AdminServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Car Service",
      category: "Maintenance",
      price: 999,
      bookings: 68,
      status: "Active",
    },
    {
      id: 2,
      name: "Oil Change",
      category: "Maintenance",
      price: 699,
      bookings: 45,
      status: "Active",
    },
    {
      id: 3,
      name: "Battery Service",
      category: "Electrical",
      price: 499,
      bookings: 29,
      status: "Active",
    },
    {
      id: 4,
      name: "Tyre & Wheel Care",
      category: "Tyres",
      price: 599,
      bookings: 32,
      status: "Active",
    },
    {
      id: 5,
      name: "AC Service",
      category: "AC",
      price: 799,
      bookings: 38,
      status: "Active",
    },
    {
      id: 6,
      name: "Brake Service",
      category: "Brakes",
      price: 899,
      bookings: 31,
      status: "Active",
    },
    {
      id: 7,
      name: "Engine Repair",
      category: "Repair",
      price: 1499,
      bookings: 18,
      status: "Active",
    },
    {
      id: 8,
      name: "Electrical Repair",
      category: "Electrical",
      price: 699,
      bookings: 21,
      status: "Inactive",
    },
    {
      id: 9,
      name: "Car Detailing",
      category: "Detailing",
      price: 999,
      bookings: 26,
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newService, setNewService] = useState({
    name: "",
    category: "",
    price: "",
  });

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service,
      ),
    );
  };

  const handleAddService = (e) => {
    e.preventDefault();

    if (!newService.name || !newService.price) return;

    setServices((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newService.name,
        category: newService.category || "General",
        price: Number(newService.price),
        bookings: 0,
        status: "Active",
      },
    ]);

    setNewService({
      name: "",
      category: "",
      price: "",
    });

    setShowForm(false);
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <div className="admin-services-page">
      <aside className="admin-services-sidebar">
        <div className="admin-services-logo">
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

          <Link to="/admin/services" className="active">
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

        <div className="admin-services-bottom">
          <Link to="/profile">
            <span>⚙️</span>Settings
          </Link>

          <Link to="/">
            <span>↩</span>Back to Website
          </Link>
        </div>
      </aside>

      <main className="admin-services-main">
        <header className="admin-services-header">
          <div>
            <span>SERVICE MANAGEMENT</span>
            <h1>Services</h1>
            <p>Manage the services available to customers.</p>
          </div>

          <button className="add-service-btn" onClick={() => setShowForm(true)}>
            + Add Service
          </button>
        </header>

        <div className="service-admin-stats">
          <div>
            <span>Total Services</span>
            <strong>{services.length}</strong>
          </div>

          <div>
            <span>Active Services</span>
            <strong>
              {services.filter((item) => item.status === "Active").length}
            </strong>
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>
              {services.reduce((total, item) => total + item.bookings, 0)}
            </strong>
          </div>

          <div>
            <span>Average Price</span>
            <strong>
              ₹
              {Math.round(
                services.reduce((total, item) => total + item.price, 0) /
                  services.length,
              )}
            </strong>
          </div>
        </div>

        <div className="service-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <section className="services-admin-card">
          <div className="services-admin-header">
            <div>
              <h2>All Services</h2>
              <p>{filteredServices.length} services</p>
            </div>
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <div className="service-admin-item" key={service.id}>
                <div className="service-admin-top">
                  <div className="service-admin-icon">🔧</div>

                  <button
                    className={`service-admin-status ${service.status.toLowerCase()}`}
                    onClick={() => toggleService(service.id)}
                  >
                    {service.status}
                  </button>
                </div>

                <h3>{service.name}</h3>

                <span className="service-category">{service.category}</span>

                <div className="service-admin-info">
                  <div>
                    <span>Starting Price</span>
                    <strong>₹{service.price}</strong>
                  </div>

                  <div>
                    <span>Bookings</span>
                    <strong>{service.bookings}</strong>
                  </div>
                </div>

                <div className="service-admin-actions">
                  <button>Edit</button>

                  <button
                    className="delete-service"
                    onClick={() => deleteService(service.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showForm && (
        <div
          className="service-modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <form
            className="service-modal"
            onSubmit={handleAddService}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="service-modal-header">
              <div>
                <span>NEW SERVICE</span>
                <h2>Add Service</h2>
              </div>

              <button type="button" onClick={() => setShowForm(false)}>
                ×
              </button>
            </div>

            <label>
              Service Name
              <input
                type="text"
                value={newService.name}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    name: e.target.value,
                  })
                }
                placeholder="e.g. Full Car Wash"
              />
            </label>

            <label>
              Category
              <input
                type="text"
                value={newService.category}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    category: e.target.value,
                  })
                }
                placeholder="e.g. Detailing"
              />
            </label>

            <label>
              Starting Price
              <input
                type="number"
                value={newService.price}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    price: e.target.value,
                  })
                }
                placeholder="999"
              />
            </label>

            <button type="submit" className="save-service-btn">
              Add Service
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminServices;
