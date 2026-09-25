import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-page">
      <Navbar />

      <main>
        <section className="legal-hero">
          <span>TERMS & CONDITIONS</span>

          <h1>Terms of Service</h1>

          <p>
            Please review the terms that apply when using the AutoCare platform.
          </p>

          <small>Last updated: September 2026</small>
        </section>

        <section className="legal-content">
          <article>
            <h2>1. Using AutoCare</h2>

            <p>
              By using AutoCare, you agree to use the platform for lawful
              purposes and provide accurate information when creating an account
              or making a booking.
            </p>
          </article>

          <article>
            <h2>2. Account Responsibility</h2>

            <p>
              You are responsible for maintaining the confidentiality of your
              account information and for activity performed through your
              account.
            </p>
          </article>

          <article>
            <h2>3. Service Bookings</h2>

            <p>
              A booking request may include vehicle details, selected service,
              date, time and location. Availability may vary depending on
              service capacity and location.
            </p>
          </article>

          <article>
            <h2>4. Pricing</h2>

            <p>
              Prices displayed on the platform may represent starting or
              estimated service prices. Additional work may result in additional
              charges after vehicle inspection.
            </p>
          </article>

          <article>
            <h2>5. Cancellations</h2>

            <p>
              Booking cancellation may be subject to the booking status, service
              availability and applicable cancellation conditions.
            </p>
          </article>

          <article>
            <h2>6. Vehicle Information</h2>

            <p>
              Customers are responsible for providing accurate vehicle
              information. Incorrect information may affect service planning and
              pricing.
            </p>
          </article>

          <article>
            <h2>7. Roadside Assistance</h2>

            <p>
              Roadside assistance availability depends on location, service
              capacity and the type of assistance requested. Response times may
              vary.
            </p>
          </article>

          <article>
            <h2>8. Payments</h2>

            <p>
              Payment options and applicable charges may vary depending on the
              selected service and payment method.
            </p>
          </article>

          <article>
            <h2>9. Changes to the Platform</h2>

            <p>
              AutoCare may update, modify or improve platform features, services
              and content from time to time.
            </p>
          </article>

          <article>
            <h2>10. Contact</h2>

            <p>
              If you have questions regarding these terms, please contact the
              AutoCare support team.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Terms;
