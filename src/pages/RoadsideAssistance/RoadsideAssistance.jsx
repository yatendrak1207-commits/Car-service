import { Link } from "react-router-dom";
import { useState } from "react";
import "./RoadsideAssistance.css";

function RoadsideAssistance() {
  const [selectedType, setSelectedType] = useState("Breakdown");

  const [formData, setFormData] = useState({
    vehicle: "",
    location: "",
    phone: "",
    description: "",
  });

  const assistanceTypes = [
    {
      name: "Breakdown",
      icon: "🚗",
    },
    {
      name: "Flat Tyre",
      icon: "🛞",
    },
    {
      name: "Battery",
      icon: "🔋",
    },
    {
      name: "Towing",
      icon: "🚛",
    },
    {
      name: "Fuel",
      icon: "⛽",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setFormData((prev) => ({
          ...prev,
          location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
        }));
      },
      () => {
        alert("Unable to access your location.");
      },
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.vehicle || !formData.location || !formData.phone) {
      alert("Please fill all required details.");
      return;
    }

    alert(
      `Assistance request submitted for ${selectedType}. Our team will contact you shortly.`,
    );
  };

  return (
    <div className="roadside-page">
      {/* ================= HERO ================= */}

      <section className="roadside-hero">
        <div className="roadside-hero-content">
          <span className="roadside-badge">🚨 24/7 Roadside Assistance</span>

          <h1>
            Stranded on the Road?
            <br />
            We're Here to Help.
          </h1>

          <p>
            Get quick roadside assistance for breakdowns, flat tyres, battery
            problems, towing and other vehicle emergencies.
          </p>
        </div>
      </section>

      {/* ================= REQUEST FORM ================= */}

      <main className="roadside-container">
        <div className="roadside-card">
          {/* Assistance Type */}

          <section className="roadside-section">
            <div className="roadside-section-title">
              <h2>What do you need help with?</h2>
              <p>Select the type of roadside assistance you need.</p>
            </div>

            <div className="assistance-types">
              {assistanceTypes.map((type) => (
                <button
                  key={type.name}
                  type="button"
                  className={`assistance-type ${
                    selectedType === type.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedType(type.name)}
                >
                  <div className="assistance-type-icon">{type.icon}</div>

                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Emergency Notice */}

          <div className="emergency-box">
            <div className="emergency-icon">🚨</div>

            <div>
              <h3>Need immediate help?</h3>

              <p>
                If you are in an unsafe situation, move your vehicle to a safe
                location and contact emergency services.
              </p>
            </div>
          </div>

          {/* Form */}

          <form className="roadside-form" onSubmit={handleSubmit}>
            <section className="roadside-section">
              <div className="roadside-section-title">
                <h2>Vehicle & Location</h2>
                <p>Tell us where you are and which vehicle needs assistance.</p>
              </div>

              <div className="roadside-form-grid">
                {/* Vehicle */}

                <div className="roadside-field">
                  <label>Select Vehicle *</label>

                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your vehicle</option>

                    <option value="Hyundai Creta - RJ 27 AB 1234">
                      Hyundai Creta - RJ 27 AB 1234
                    </option>

                    <option value="Maruti Suzuki Swift - RJ 27 CD 5678">
                      Maruti Suzuki Swift - RJ 27 CD 5678
                    </option>

                    <option value="Other Vehicle">Other Vehicle</option>
                  </select>
                </div>

                {/* Phone */}

                <div className="roadside-field">
                  <label>Contact Number *</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                {/* Location */}

                <div className="roadside-field full">
                  <label>Current Location *</label>

                  <div className="location-row">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your current location"
                      required
                    />

                    <button
                      type="button"
                      className="location-btn"
                      onClick={handleLocation}
                    >
                      📍 Use My Location
                    </button>
                  </div>
                </div>

                {/* Problem */}

                <div className="roadside-field full">
                  <label>Describe the Problem</label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us what happened to your vehicle..."
                  />
                </div>
              </div>
            </section>

            {/* Submit */}

            <button type="submit" className="request-assistance-btn">
              🚨 Request Roadside Assistance
            </button>
          </form>

          {/* Quick Contact */}

          <div className="roadside-quick-contact">
            <a
              href="tel:+919876543210"
              className="quick-contact-btn call-assistance"
            >
              📞 Call Assistance
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="quick-contact-btn whatsapp-assistance"
            >
              💬 WhatsApp Assistance
            </a>
          </div>
        </div>
      </main>

      {/* ================= INFO ================= */}

      <section className="roadside-info-section">
        <div className="roadside-info-grid">
          <div className="roadside-info-card">
            <div className="roadside-info-icon">⚡</div>

            <h3>Quick Response</h3>

            <p>
              Share your location and issue details so our support team can
              respond quickly.
            </p>
          </div>

          <div className="roadside-info-card">
            <div className="roadside-info-icon">🧰</div>

            <h3>Multiple Assistance Options</h3>

            <p>
              Get help for breakdowns, flat tyres, battery issues, fuel problems
              and towing.
            </p>
          </div>

          <div className="roadside-info-card">
            <div className="roadside-info-icon">🛡️</div>

            <h3>Reliable Support</h3>

            <p>
              Our assistance service is designed to help you get back on the
              road safely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoadsideAssistance;
