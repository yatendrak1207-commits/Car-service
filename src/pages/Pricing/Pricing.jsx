import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Pricing.css";

const plans = [
  {
    name: "Basic Care",
    price: "₹699",
    description: "Essential maintenance for regular car care.",
    features: [
      "Basic vehicle inspection",
      "Engine oil check",
      "Brake inspection",
      "Tyre inspection",
      "Basic cleaning",
    ],
  },
  {
    name: "Complete Care",
    price: "₹1,499",
    description: "Complete maintenance for better vehicle performance.",
    popular: true,
    features: [
      "Complete vehicle inspection",
      "Engine oil service",
      "Brake inspection",
      "Battery inspection",
      "Tyre & wheel check",
      "AC performance check",
      "Interior cleaning",
    ],
  },
  {
    name: "Premium Care",
    price: "₹2,499",
    description: "Detailed care for customers who want more.",
    features: [
      "Full vehicle inspection",
      "Engine diagnostics",
      "Brake & suspension check",
      "Battery health check",
      "Wheel alignment check",
      "AC inspection",
      "Interior & exterior detailing",
      "Priority service support",
    ],
  },
];

function Pricing() {
  return (
    <div className="pricing-page">
      <Navbar />

      <main>
        <section className="pricing-hero">
          <span>PRICING</span>

          <h1>Simple & Transparent Pricing</h1>

          <p>
            Choose the service package that fits your vehicle's needs. No hidden
            charges.
          </p>
        </section>

        <section className="pricing-section">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}

                <h2>{plan.name}</h2>

                <p className="pricing-description">{plan.description}</p>

                <div className="pricing-price">
                  <strong>{plan.price}</strong>
                  <span>/ service</span>
                </div>

                <div className="pricing-divider"></div>

                <h3>What's included</h3>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/booking" className="pricing-btn">
                  Book Service
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-note">
          <h2>Need a specific service?</h2>

          <p>
            Service prices may vary depending on your vehicle model and
            additional repairs required.
          </p>

          <Link to="/services">View All Services →</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Pricing;
