import { Link } from "react-router-dom";
import { useState } from "react";
import "./MyCars.css";

function MyCars() {
  const [cars, setCars] = useState([
    {
      id: 1,
      brand: "Hyundai",
      model: "Creta",
      number: "RJ 27 AB 1234",
      year: "2022",
      fuel: "Petrol",
      transmission: "Manual",
    },
    {
      id: 2,
      brand: "Maruti Suzuki",
      model: "Swift",
      number: "RJ 27 CD 5678",
      year: "2021",
      fuel: "Petrol",
      transmission: "Manual",
    },
  ]);
  const [showAddCar, setShowAddCar] = useState(false);
  const [editingCar, setEditingCar] = useState(null);

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    number: "",
    year: "",
    fuel: "",
    transmission: "",
  });

  const handleCarChange = (e) => {
    const { name, value } = e.target;

    setNewCar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCar = (e) => {
    e.preventDefault();

    if (editingCar) {
      // Existing car update
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.id === editingCar.id
            ? {
                ...car,
                ...newCar,
              }
            : car,
        ),
      );
    } else {
      // New car add
      const carToAdd = {
        ...newCar,
        id: Date.now(),
      };

      setCars((prevCars) => [...prevCars, carToAdd]);
    }

    // Modal close
    setShowAddCar(false);

    // Edit mode reset
    setEditingCar(null);

    // Form reset
    setNewCar({
      brand: "",
      model: "",
      number: "",
      year: "",
      fuel: "",
      transmission: "",
    });
  };
  const handleDeleteCar = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?",
    );

    if (!confirmDelete) return;

    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };
  const handleEditCar = (car) => {
    setEditingCar(car);

    setNewCar({
      brand: car.brand,
      model: car.model,
      number: car.number,
      year: car.year,
      fuel: car.fuel,
      transmission: car.transmission,
    });

    setShowAddCar(true);
  };
  return (
    <div className="my-cars-page">
      {/* Sidebar */}
      <aside className="my-cars-sidebar">
        <div className="my-cars-logo">AutoCare</div>

        <nav className="my-cars-menu">
          <Link to="/dashboard" className="my-cars-menu-item">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/my-cars" className="my-cars-menu-item active">
            <span>🚗</span>
            My Cars
          </Link>

          <Link to="/bookings" className="my-cars-menu-item">
            <span>📅</span>
            My Bookings
          </Link>

          <Link to="/service-history" className="my-cars-menu-item">
            <span>🔧</span>
            Service History
          </Link>

          <Link to="/notifications" className="my-cars-menu-item">
            <span>🔔</span>
            Notifications
          </Link>

          <Link to="/profile" className="my-cars-menu-item">
            <span>👤</span>
            Profile
          </Link>
        </nav>

        <div className="my-cars-sidebar-bottom">
          <Link to="/" className="my-cars-menu-item">
            <span>←</span>
            Back to Website
          </Link>

          <button className="my-cars-logout">
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="my-cars-main">
        {/* Header */}
        <header className="my-cars-header">
          <div>
            <h1>My Cars</h1>

            <p>
              Manage your vehicles and keep their details ready for service
              bookings.
            </p>
          </div>

          <button className="add-car-btn" onClick={() => setShowAddCar(true)}>
            + Add New Car
          </button>
        </header>

        {/* Cars Count */}
        <div className="cars-summary">
          <div>
            <span>Total Vehicles</span>
            <strong>{cars.length}</strong>
          </div>

          <div className="cars-summary-icon">🚗</div>
        </div>

        {/* Cars */}
        <section className="cars-section">
          <div className="cars-section-header">
            <div>
              <h2>Saved Vehicles</h2>
              <p>Your registered cars</p>
            </div>
          </div>

          <div className="cars-grid">
            {cars.map((car) => (
              <div className="car-card" key={car.id}>
                {/* Car Top */}
                <div className="car-card-top">
                  <div className="car-image-box">🚘</div>

                  <div className="car-card-actions">
                    <button
                      type="button"
                      title="Edit"
                      onClick={() => handleEditCar(car)}
                    >
                      ✏️
                    </button>

                    <button
                      title="Delete"
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Car Details */}
                <div className="car-card-content">
                  <h3>
                    {car.brand} {car.model}
                  </h3>

                  <div className="car-number">{car.number}</div>

                  <div className="car-details">
                    <div>
                      <span>Year</span>
                      <strong>{car.year}</strong>
                    </div>

                    <div>
                      <span>Fuel</span>
                      <strong>{car.fuel}</strong>
                    </div>

                    <div>
                      <span>Transmission</span>
                      <strong>{car.transmission}</strong>
                    </div>
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="car-card-bottom">
                  <Link
                    to={`/booking?car=${car.id}`}
                    className="service-car-btn"
                  >
                    Book Service
                  </Link>

                  <button className="view-history-btn">Service History</button>
                </div>
              </div>
            ))}

            {/* Add Car Card */}
            <button
              className="add-car-card"
              onClick={() => setShowAddCar(true)}
            >
              <div className="add-car-icon">+</div>

              <h3>Add New Vehicle</h3>

              <p>Add your car details for faster bookings.</p>
            </button>
          </div>
        </section>
      </main>

      {/* ================= ADD CAR MODAL ================= */}

      {showAddCar && (
        <div
          className="add-car-modal-overlay"
          onClick={() => setShowAddCar(false)}
        >
          <div className="add-car-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="add-car-modal-header">
              <div>
                <h2>{editingCar ? "Edit Car" : "Add New Car"}</h2>

                <p>
                  {editingCar
                    ? "Update your vehicle details below."
                    : "Enter your vehicle details below."}
                </p>
              </div>

              <button
                className="close-modal-btn"
                onClick={() => setShowAddCar(false)}
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddCar}>
              <div className="car-form-grid">
                {/* Brand */}
                <div className="car-form-group">
                  <label>Car Brand</label>

                  <input
                    type="text"
                    name="brand"
                    placeholder="e.g. Hyundai"
                    value={newCar.brand}
                    onChange={handleCarChange}
                    required
                  />
                </div>

                {/* Model */}
                <div className="car-form-group">
                  <label>Car Model</label>

                  <input
                    type="text"
                    name="model"
                    placeholder="e.g. Creta"
                    value={newCar.model}
                    onChange={handleCarChange}
                    required
                  />
                </div>

                {/* Registration */}
                <div className="car-form-group">
                  <label>Registration Number</label>

                  <input
                    type="text"
                    name="number"
                    placeholder="e.g. RJ 27 AB 1234"
                    value={newCar.number}
                    onChange={handleCarChange}
                    required
                  />
                </div>

                {/* Year */}
                <div className="car-form-group">
                  <label>Manufacturing Year</label>

                  <input
                    type="number"
                    name="year"
                    placeholder="e.g. 2022"
                    min="1990"
                    max="2026"
                    value={newCar.year}
                    onChange={handleCarChange}
                    required
                  />
                </div>

                {/* Fuel */}
                <div className="car-form-group">
                  <label>Fuel Type</label>

                  <select
                    name="fuel"
                    value={newCar.fuel}
                    onChange={handleCarChange}
                    required
                  >
                    <option value="">Select fuel</option>

                    <option value="Petrol">Petrol</option>

                    <option value="Diesel">Diesel</option>

                    <option value="CNG">CNG</option>

                    <option value="Electric">Electric</option>

                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                {/* Transmission */}
                <div className="car-form-group">
                  <label>Transmission</label>

                  <select
                    name="transmission"
                    value={newCar.transmission}
                    onChange={handleCarChange}
                    required
                  >
                    <option value="">Select transmission</option>

                    <option value="Manual">Manual</option>

                    <option value="Automatic">Automatic</option>

                    <option value="AMT">AMT</option>

                    <option value="CVT">CVT</option>

                    <option value="DCT">DCT</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="add-car-modal-actions">
                <button
                  type="button"
                  className="cancel-car-btn"
                  onClick={() => setShowAddCar(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="save-car-btn">
                  {editingCar ? "Update Car" : "Add Car"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCars;
