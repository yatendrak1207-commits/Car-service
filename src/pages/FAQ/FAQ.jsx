import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I book a car service?",
    answer:
      "Choose a service from the Services page, open its details and click Book This Service. Select your vehicle, preferred date, time and location to continue.",
  },
  {
    question: "Can I add multiple cars to my account?",
    answer:
      "Yes. You can add and manage multiple vehicles from the My Cars section of your account.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. Eligible bookings can be cancelled from the My Bookings section. Cancellation availability can depend on the booking status.",
  },
  {
    question: "Are the prices fixed?",
    answer:
      "Displayed prices are starting or estimated prices. The final price may vary depending on the vehicle condition and additional work required.",
  },
  {
    question: "Do you provide roadside assistance?",
    answer:
      "Yes. You can request help for breakdowns, flat tyres, battery issues, towing and fuel-related emergencies from the Roadside Assistance page.",
  },
  {
    question: "How can I see my previous services?",
    answer:
      "Your completed services can be viewed from the Service History section of your account.",
  },
  {
    question: "Can I contact AutoCare directly?",
    answer:
      "Yes. You can contact our support team through the Contact page or use the available phone support option.",
  },
  {
    question: "How do I change my profile details?",
    answer:
      "Open the Profile section from your dashboard and use the edit option to update your account information.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Navbar />

      <main>
        <section className="faq-hero">
          <span>FAQ</span>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find quick answers to common questions about services, bookings and
            your AutoCare account.
          </p>
        </section>

        <section className="faq-section">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  type="button"
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="faq-contact">
          <h2>Still have questions?</h2>

          <p>Our support team is here to help.</p>

          <Link to="/contact">Contact Us →</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;
