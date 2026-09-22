import { Link, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./ServiceDetails.css";

const services = {
  "general-car-service": {
    icon: "🔧",
    title: "General Car Service",
    price: "₹999",
    duration: "2–3 Hours",
    description:
      "Complete inspection and maintenance service to keep your car running smoothly.",
    includes: [
      "Engine inspection",
      "Brake inspection",
      "Fluid level check",
      "Tyre pressure check",
      "Battery inspection",
      "Basic vehicle diagnostics",
    ],
  },

  "oil-change": {
    icon: "🛢️",
    title: "Oil Change",
    price: "₹699",
    duration: "45–60 Minutes",
    description:
      "Engine oil replacement with inspection of essential vehicle components.",
    includes: [
      "Old oil removal",
      "New engine oil",
      "Oil filter inspection",
      "Engine inspection",
      "Fluid level check",
    ],
  },

  "battery-service": {
    icon: "🔋",
    title: "Battery Service",
    price: "₹499",
    duration: "30–45 Minutes",
    description:
      "Battery inspection, testing and jump-start assistance for your vehicle.",
    includes: [
      "Battery health check",
      "Voltage testing",
      "Terminal inspection",
      "Battery cleaning",
      "Jump-start assistance",
    ],
  },

  "tyre-wheel-care": {
    icon: "🛞",
    title: "Tyre & Wheel Care",
    price: "₹599",
    duration: "60–90 Minutes",
    description:
      "Complete tyre inspection with wheel alignment and balancing support.",
    includes: [
      "Tyre pressure check",
      "Tyre condition inspection",
      "Wheel alignment",
      "Wheel balancing",
      "Tyre rotation check",
    ],
  },

  "ac-service": {
    icon: "❄️",
    title: "AC Service",
    price: "₹799",
    duration: "1–2 Hours",
    description: "AC inspection and cleaning to improve cooling performance.",
    includes: [
      "AC performance check",
      "Cooling inspection",
      "AC filter inspection",
      "Vent cleaning",
      "Basic AC diagnostics",
    ],
  },

  "brake-service": {
    icon: "🧰",
    title: "Brake Service",
    price: "₹899",
    duration: "1–2 Hours",
    description: "Brake inspection and replacement of worn-out components.",
    includes: [
      "Brake pad inspection",
      "Brake disc inspection",
      "Brake fluid check",
      "Brake system inspection",
      "Basic brake diagnostics",
    ],
  },

  "engine-repair": {
    icon: "⚙️",
    title: "Engine Repair",
    price: "₹1499",
    duration: "2–5 Hours",
    description:
      "Professional engine diagnostics and repair service for common engine problems.",
    includes: [
      "Engine diagnostics",
      "Error code inspection",
      "Engine component inspection",
      "Fluid inspection",
      "Repair recommendations",
    ],
  },

  "electrical-repair": {
    icon: "💡",
    title: "Electrical Repair",
    price: "₹699",
    duration: "1–2 Hours",
    description:
      "Electrical inspection and troubleshooting for common vehicle electrical issues.",
    includes: [
      "Electrical system inspection",
      "Battery connection check",
      "Fuse inspection",
      "Lighting inspection",
      "Basic electrical diagnostics",
    ],
  },

  "car-detailing": {
    icon: "🚘",
    title: "Car Detailing",
    price: "₹999",
    duration: "2–4 Hours",
    description:
      "Professional interior and exterior cleaning to refresh your vehicle.",
    includes: [
      "Exterior cleaning",
      "Interior cleaning",
      "Dashboard cleaning",
      "Vacuum cleaning",
      "Basic polishing",
    ],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services[serviceId];

  // Invalid service URL
  if (!service) {
    return (
      <>
        <Navbar />

        <div className="service-not-found">
          <h1>Service Not Found</h1>

          <p>The service you are looking for does not exist.</p>

          <Link to="/services">← Back to Services</Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <div className="service-details-page">
      <Navbar />

      {/* Hero */}
      <section className="service-details-hero">
        <div className="service-details-icon">{service.icon}</div>

        <span>SERVICE DETAILS</span>

        <h1>{service.title}</h1>

        <p>{service.description}</p>
      </section>

      {/* Main Content */}
      <section className="service-details-content">
        {/* Left */}
        <div className="service-details-main">
          <h2>What's Included</h2>

          <div className="included-list">
            {service.includes.map((item, index) => (
              <div className="included-item" key={index}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Booking Card */}
        <div className="service-booking-card">
          <span>Starting Price</span>

          <h2>{service.price}</h2>

          <div className="service-duration">⏱ {service.duration}</div>

          <Link
            to={`/booking?service=${serviceId}`}
            className="service-book-btn"
          >
            Book This Service
          </Link>

          <Link to="/services" className="back-services-btn">
            ← View All Services
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServiceDetails;
