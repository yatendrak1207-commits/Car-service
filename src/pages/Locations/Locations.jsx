import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Locations.css";

const locations = [
  {
    city: "Udaipur",
    address: "Panchwati, Udaipur, Rajasthan",
    phone: "+91 98765 43210",
    timing: "8:00 AM – 8:00 PM",
  },
  {
    city: "Jaipur",
    address: "Vaishali Nagar, Jaipur, Rajasthan",
    phone: "+91 98765 43211",
    timing: "8:00 AM – 8:00 PM",
  },
  {
    city: "Delhi NCR",
    address: "Sector 18, Noida, Uttar Pradesh",
    phone: "+91 98765 43212",
    timing: "8:00 AM – 9:00 PM",
  },
];

function Locations() {
  return (
    <div className="locations-page">
      <Navbar />

      <main>
        <section className="locations-hero">
          <span>OUR LOCATIONS</span>

          <h1>Find AutoCare Near You</h1>

          <p>
            Visit our service locations or book a service at your preferred
            location.
          </p>
        </section>

        <section className="locations-section">
          <div className="locations-grid">
            {locations.map((location) => (
              <div className="location-card" key={location.city}>
                <div className="location-icon">📍</div>

                <div className="location-content">
                  <h2>{location.city}</h2>

                  <p>{location.address}</p>

                  <div className="location-info">
                    <div>
                      <span>Phone</span>
                      <strong>{location.phone}</strong>
                    </div>

                    <div>
                      <span>Opening Hours</span>
                      <strong>{location.timing}</strong>
                    </div>
                  </div>

                  <div className="location-actions">
                    <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                      Call Now
                    </a>

                    <Link to="/booking">Book Service</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="location-help">
          <h2>Can't find your location?</h2>

          <p>
            Contact our support team and we'll help you find the nearest
            available service option.
          </p>

          <Link to="/contact">Contact Support →</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Locations;
