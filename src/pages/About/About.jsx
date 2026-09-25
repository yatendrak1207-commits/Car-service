import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./About.css";

const features = [
  {
    icon: "🧑‍🔧",
    title: "Verified Mechanics",
    description:
      "Our service process is designed around skilled professionals and proper vehicle care.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "Get clear estimated prices before approving additional work on your vehicle.",
  },
  {
    icon: "🏠",
    title: "Convenient Service",
    description:
      "Book your service online and choose a suitable service location.",
  },
  {
    icon: "🛡️",
    title: "Reliable Support",
    description:
      "Our support system helps customers manage bookings and roadside requests.",
  },
];

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <main>
        <section className="about-hero">
          <span>ABOUT AUTOCARE</span>

          <h1>Making Car Care Simple</h1>

          <p>
            AutoCare is designed to make vehicle servicing, maintenance and
            roadside assistance easier for everyday car owners.
          </p>
        </section>

        <section className="about-story">
          <div className="about-story-content">
            <span>OUR STORY</span>

            <h2>A Better Way to Take Care of Your Car</h2>

            <p>
              Managing car maintenance can often feel complicated. Finding
              reliable service, understanding costs and keeping track of service
              history can take time.
            </p>

            <p>
              AutoCare brings these experiences together in one simple platform,
              allowing customers to explore services, book appointments, manage
              their vehicles and request roadside assistance.
            </p>

            <Link to="/services">Explore Our Services →</Link>
          </div>

          <div className="about-story-card">
            <div className="about-story-icon">🚘</div>

            <h3>Complete Car Care</h3>

            <p>
              From routine maintenance to emergency roadside support, keep
              everything organized in one place.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-section-heading">
            <span>WHY AUTOCARE</span>

            <h2>Built Around Your Convenience</h2>

            <p>
              We focus on making the complete car service experience simple and
              transparent.
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature) => (
              <div className="about-feature-card" key={feature.title}>
                <div className="about-feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h2>Ready to Take Care of Your Car?</h2>

          <p>Book your next service with AutoCare.</p>

          <Link to="/booking">Book a Service →</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
