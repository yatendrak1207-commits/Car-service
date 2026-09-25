import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">
      <Navbar />

      <main>
        <section className="legal-hero">
          <span>PRIVACY POLICY</span>

          <h1>Your Privacy Matters</h1>

          <p>
            This page explains how information may be handled when you use
            AutoCare.
          </p>

          <small>Last updated: September 2026</small>
        </section>

        <section className="legal-content">
          <article>
            <h2>1. Information We Collect</h2>

            <p>
              When you use AutoCare, information may be provided through account
              registration, service bookings, vehicle details, contact forms and
              other features of the platform.
            </p>
          </article>

          <article>
            <h2>2. How We Use Information</h2>

            <p>
              Information may be used to manage your account, process service
              bookings, provide support, communicate important updates and
              improve the platform experience.
            </p>
          </article>

          <article>
            <h2>3. Vehicle Information</h2>

            <p>
              Vehicle details such as registration information, model and
              service history may be associated with your account to help manage
              your service requirements.
            </p>
          </article>

          <article>
            <h2>4. Communication</h2>

            <p>
              We may use the contact information you provide to communicate
              about bookings, account activity, service updates and support
              requests.
            </p>
          </article>

          <article>
            <h2>5. Data Security</h2>

            <p>
              Reasonable technical and organizational measures should be used to
              protect account and service information against unauthorized
              access or misuse.
            </p>
          </article>

          <article>
            <h2>6. Third-Party Services</h2>

            <p>
              Some features may use third-party services such as payment,
              communication, hosting or mapping providers. Their own privacy
              policies may also apply.
            </p>
          </article>

          <article>
            <h2>7. Your Choices</h2>

            <p>
              You may review or update available account information through
              your profile settings. You can also contact support regarding
              questions about your information.
            </p>
          </article>

          <article>
            <h2>8. Policy Updates</h2>

            <p>
              This privacy policy may be updated from time to time to reflect
              changes to the platform or applicable requirements.
            </p>
          </article>

          <article>
            <h2>9. Contact</h2>

            <p>
              If you have questions about this policy, please contact the
              AutoCare support team.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;
