import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        <section className="contact-hero">
          <span>CONTACT US</span>

          <h1>How Can We Help?</h1>

          <p>
            Have a question about a service, booking or roadside assistance? Get
            in touch with our team.
          </p>
        </section>

        <section className="contact-section">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Our support team is available to help you with your car service
              requirements.
            </p>

            <div className="contact-info-item">
              <div>📞</div>

              <div>
                <span>Phone</span>
                <strong>+91 98765 43210</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <div>✉️</div>

              <div>
                <span>Email</span>
                <strong>support@autocare.com</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <div>📍</div>

              <div>
                <span>Office</span>
                <strong>Udaipur, Rajasthan</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <div>🕒</div>

              <div>
                <span>Support Hours</span>
                <strong>8:00 AM – 8:00 PM</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>

                <h2>Message Received</h2>

                <p>
                  Thanks for contacting us. Our team will get back to you
                  shortly.
                </p>

                <button onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-grid">
                    <div className="contact-form-group">
                      <label>Name</label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Email</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-grid">
                    <div className="contact-form-group">
                      <label>Phone</label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Subject</label>

                      <input
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label>Message</label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </section>

        <section className="contact-emergency">
          <div>
            <span>NEED IMMEDIATE HELP?</span>

            <h2>Request Roadside Assistance</h2>

            <p>
              Get help for breakdowns, flat tyres, battery issues and towing.
            </p>
          </div>

          <Link to="/roadside-assistance">Get Roadside Help →</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
