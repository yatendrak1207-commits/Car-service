import Navbar from "../../component/Navbar/Navbar";
import ServiceCard from "../../component/ServiceCard/serviceCard";
import "./Home.css";
import Footer from "../../component/Footer/Footer";

function Home() {
  return (
    <div className="home-page">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">CAR SERVICE & ROAD ASSISTANCE</span>

          <h1>
            Your Car Deserves
            <span>Better Care.</span>
          </h1>

          <p>
            Book trusted car service, repairs and roadside assistance in just a
            few minutes.
          </p>

          <div className="hero-buttons">
            <a href="/booking" className="primary-btn">
              Book a Service
            </a>

            <a href="/roadside-assistance" className="secondary-btn">
              Roadside Assistance
            </a>
          </div>

          {/* Trust Points */}
          <div className="trust-points">
            <div>
              <strong>✓</strong>
              Verified Mechanics
            </div>

            <div>
              <strong>✓</strong>
              Genuine Parts
            </div>

            <div>
              <strong>✓</strong>
              Transparent Pricing
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src="/images/car-service-hero.png" alt="Car Service" />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>10K+</h3>
          <p>Cars Serviced</p>
        </div>

        <div className="stat-item">
          <h3>500+</h3>
          <p>Verified Mechanics</p>
        </div>

        <div className="stat-item">
          <h3>50+</h3>
          <p>Service Locations</p>
        </div>

        <div className="stat-item">
          <h3>4.8/5</h3>
          <p>Customer Rating</p>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services-section">
        <div className="section-heading">
          <span>OUR SERVICES</span>

          <h2>Everything Your Car Needs</h2>

          <p>
            From regular maintenance to emergency repairs, we take care of your
            car from start to finish.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
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
        </div>

        {/* View All Services */}
        <div className="services-action">
          <a href="/services">View All Services →</a>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="why-content">
          {/* Section Heading */}
          <div className="section-heading why-heading">
            <span>WHY AUTOCARE</span>

            <h2>Car Care You Can Trust</h2>

            <p>
              We make car servicing simple, transparent and convenient for every
              car owner.
            </p>
          </div>

          {/* Features */}
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🧑‍🔧</div>

              <div>
                <h3>Verified Mechanics</h3>
                <p>
                  Experienced professionals handle your vehicle with proper care
                  and attention.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">💰</div>

              <div>
                <h3>Transparent Pricing</h3>
                <p>
                  Know the estimated service cost before approving any
                  additional work.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🏠</div>

              <div>
                <h3>Doorstep Service</h3>
                <p>
                  Get selected maintenance and repair services at your preferred
                  location.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🛡️</div>

              <div>
                <h3>Quality Parts</h3>
                <p>
                  Reliable parts and professional servicing to keep your vehicle
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">
        <div className="section-heading">
          <span>HOW IT WORKS</span>

          <h2>Get Your Car Serviced in 3 Steps</h2>

          <p>Booking your next car service is quick and hassle-free.</p>
        </div>

        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-item">
            <div className="step-number">01</div>

            <h3>Choose a Service</h3>

            <p>
              Select the service your car needs from our available service
              options.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-item">
            <div className="step-number">02</div>

            <h3>Book a Slot</h3>

            <p>
              Select your car, preferred location and convenient service date
              and time.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-item">
            <div className="step-number">03</div>

            <h3>Get Your Car Serviced</h3>

            <p>
              Our mechanic takes care of your vehicle and keeps you updated
              about the service.
            </p>
          </div>
        </div>
      </section>
      {/* ================= ROADSIDE ASSISTANCE ================= */}
      <section className="roadside-section">
        <div className="roadside-content">
          <div>
            <span className="roadside-tag">NEED HELP ON THE ROAD?</span>

            <h2>
              Stuck Somewhere?
              <span> We've Got You.</span>
            </h2>

            <p>
              Get quick roadside assistance for breakdowns, flat tyres, battery
              problems and other emergencies.
            </p>

            <a href="/roadside-assistance" className="roadside-btn">
              Get Roadside Assistance →
            </a>
          </div>

          {/* Emergency visual */}
          <div className="roadside-icon">🚗</div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="reviews-section">
        <div className="section-heading">
          <span>CUSTOMER REVIEWS</span>

          <h2>What Our Customers Say</h2>

          <p>Trusted by car owners for reliable service and support.</p>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p>
              "The booking process was really simple and the mechanic arrived on
              time. Very smooth experience."
            </p>

            <div className="review-user">
              <div className="review-avatar">RK</div>

              <div>
                <h4>Rahul Kumar</h4>
                <span>Car Owner</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p>
              "Got my car serviced without having to worry about unnecessary
              charges. The pricing was clear."
            </p>

            <div className="review-user">
              <div className="review-avatar">AS</div>

              <div>
                <h4>Ankit Sharma</h4>
                <span>Car Owner</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>

            <p>
              "I used the roadside assistance service when my battery died. Help
              arrived quickly."
            </p>

            <div className="review-user">
              <div className="review-avatar">PS</div>

              <div>
                <h4>Priya Singh</h4>
                <span>Car Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default Home;
