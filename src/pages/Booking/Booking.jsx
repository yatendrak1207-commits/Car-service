import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useState } from "react";
import "./Booking.css";

const services = {
  "general-car-service": {
    title: "General Car Service",
    price: "₹999",
  },
  "oil-change": {
    title: "Oil Change",
    price: "₹699",
  },
  "battery-service": {
    title: "Battery Service",
    price: "₹499",
  },
  "tyre-wheel-care": {
    title: "Tyre & Wheel Care",
    price: "₹599",
  },
  "ac-service": {
    title: "AC Service",
    price: "₹799",
  },
  "brake-service": {
    title: "Brake Service",
    price: "₹899",
  },
  "engine-repair": {
    title: "Engine Repair",
    price: "₹1499",
  },
  "electrical-repair": {
    title: "Electrical Repair",
    price: "₹699",
  },
  "car-detailing": {
    title: "Car Detailing",
    price: "₹999",
  },
};
function Booking() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const serviceId = searchParams.get("service");
  const carId = searchParams.get("car");

  const selectedService = services[serviceId] || {
    title: "Select a Service",
    price: "₹0",
  };
  const cars = {
    1: {
      brand: "Hyundai",
      model: "Creta",
      number: "RJ 27 AB 1234",
      fuel: "Petrol",
    },
    2: {
      brand: "Maruti Suzuki",
      model: "Swift",
      number: "RJ 27 CD 5678",
      fuel: "Petrol",
    },
  };

  const selectedCar = cars[carId];
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="booking-page">
      <Navbar />

      {/* Header */}
      <section className="booking-header">
        <span>BOOK A SERVICE</span>

        <h1>Book Your Car Service</h1>

        <p>Choose your car, preferred date and service location.</p>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <div className="booking-form-card">
          <div className="booking-step-heading">
            <span>01</span>

            <div>
              <h2>Service Details</h2>
              <p>Select the service you need.</p>
            </div>
          </div>

          {/* Selected Service */}
          <div className="selected-service">
            <div className="selected-service-icon">🔧</div>

            <div>
              <h3>{selectedService.title}</h3>
              <p>Starting from {selectedService.price}</p>
            </div>

            <Link to="/services">Change</Link>
          </div>

          {/* Car Details */}
          <div className="booking-step-heading">
            <span>02</span>

            <div>
              <h2>Car Details</h2>
              <p>Tell us about your vehicle.</p>
            </div>
          </div>

          <div className="booking-grid">
            <div className="form-group">
              <label>Car Brand</label>

              <select value={selectedCar?.brand || ""} disabled={!!selectedCar}>
                <option value="">Select brand</option>
                <option>Maruti Suzuki</option>
                <option>Hyundai</option>
                <option>Tata</option>
                <option>Mahindra</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Kia</option>
                <option>Volkswagen</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Car Model</label>

              <input
                type="text"
                placeholder="e.g. Creta"
                value={selectedCar?.model || ""}
              />
            </div>

            <div className="form-group">
              <label>Registration Number</label>

              <input
                type="text"
                placeholder="e.g. RJ 27 AB 1234"
                value={selectedCar?.number || ""}
              />
            </div>

            <div className="form-group">
              <label>Fuel Type</label>

              <select value={selectedCar?.fuel || ""} disabled={!!selectedCar}>
                <option value="">Select fuel type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>CNG</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="booking-step-heading">
            <span>03</span>

            <div>
              <h2>Date & Time</h2>
              <p>Choose a convenient service slot.</p>
            </div>
          </div>

          <div className="booking-grid">
            <div className="form-group">
              <label>Service Date</label>

              <input
                type="date"
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Preferred Time</label>

              <select
                value={serviceTime}
                onChange={(e) => setServiceTime(e.target.value)}
              >
                <option value="">Select time</option>
                <option>09:00 AM - 11:00 AM</option>
                <option>11:00 AM - 01:00 PM</option>
                <option>01:00 PM - 03:00 PM</option>
                <option>03:00 PM - 05:00 PM</option>
                <option>05:00 PM - 07:00 PM</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="booking-step-heading">
            <span>04</span>

            <div>
              <h2>Service Location</h2>
              <p>Where should we service your car?</p>
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              rows="4"
              placeholder="Enter your complete address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="booking-grid">
            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>PIN Code</label>

              <input
                type="text"
                placeholder="Enter PIN code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="booking-step-heading">
            <span>05</span>

            <div>
              <h2>Contact Details</h2>
              <p>How can we contact you?</p>
            </div>
          </div>

          <div className="booking-grid">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="confirm-booking-btn"
            onClick={() => {
              navigate("/payment", {
                state: {
                  service: selectedService,
                  car: selectedCar,
                  date: serviceDate,
                  time: serviceTime,
                  address,
                  city,
                  pinCode,
                  fullName,
                  phone,
                },
              });
            }}
          >
            Confirm Booking
          </button>
        </div>

        {/* Summary */}
        <aside className="booking-summary">
          <span>BOOKING SUMMARY</span>

          <h2>{selectedService.title}</h2>

          <div className="summary-row">
            <span>Service</span>
            <strong>{selectedService.title}</strong>
          </div>

          <div className="summary-row">
            <span>Starting Price</span>
            <strong>{selectedService.price}</strong>
          </div>

          <div className="summary-divider"></div>

          <p>
            Final price may vary depending on the vehicle condition and
            additional work required.
          </p>
        </aside>
      </section>

      <Footer />
    </div>
  );
}

export default Booking;
