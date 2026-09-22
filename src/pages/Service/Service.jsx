import Navbar from "../../component/Navbar/Navbar";
import ServiceCard from "../../component/ServiceCard/serviceCard";
import Footer from "../../component/Footer/Footer";

import "./service.css";

function Services() {
  return (
    <div className="services-page">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="services-header">
        <span>OUR SERVICES</span>

        <h1>Complete Care For Your Car</h1>

        <p>
          Choose from our range of professional car servicing, maintenance and
          repair services.
        </p>
      </section>

      {/* Services */}
      <section className="all-services">
        <ServiceCard
          icon="🔧"
          title="General Car Service"
          description="Complete inspection, maintenance and servicing of your vehicle."
          price="₹999"
          slug="general-car-service"
        />

        <ServiceCard
          icon="🛢️"
          title="Oil Change"
          description="Engine oil replacement with inspection of essential components."
          price="₹699"
          slug="oil-change"
        />

        <ServiceCard
          icon="🔋"
          title="Battery Service"
          description="Battery inspection, replacement and jump-start assistance."
          price="₹499"
          slug="battery-service"
        />

        <ServiceCard
          icon="🛞"
          title="Tyre & Wheel Care"
          description="Tyre inspection, wheel alignment and balancing services."
          price="₹599"
          slug="tyre-wheel-care"
        />

        <ServiceCard
          icon="❄️"
          title="AC Service"
          description="AC inspection, cleaning and cooling performance check."
          price="₹799"
          slug="ac-service"
        />

        <ServiceCard
          icon="🧰"
          title="Brake Service"
          description="Brake inspection and replacement of worn-out components."
          price="₹899"
          slug="brake-service"
        />

        <ServiceCard
          icon="⚙️"
          title="Engine Repair"
          description="Engine diagnostics and professional repair services."
          price="₹1499"
          slug="engine-repair"
        />

        <ServiceCard
          icon="💡"
          title="Electrical Repair"
          description="Complete electrical inspection and troubleshooting."
          price="₹699"
          slug="electrical-repair"
        />

        <ServiceCard
          icon="🚘"
          title="Car Detailing"
          description="Professional interior and exterior cleaning for your car."
          price="₹999"
          slug="car-detailing"
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
