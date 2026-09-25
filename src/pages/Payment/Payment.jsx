import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const location = useLocation();

  // Booking page se received data
  const bookingData = location.state || {};

  const service = bookingData.service || {
    title: "General Car Service",
    price: "₹999",
  };

  const car = bookingData.car || {
    brand: "Hyundai",
    model: "Creta",
    number: "RJ 27 AB 1234",
    fuel: "Petrol",
  };

  // ₹999 -> 999
  const servicePrice = parseInt(service.price.replace("₹", ""));

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const tax = 100;

  const totalBeforeDiscount = servicePrice + tax;
  const finalAmount = totalBeforeDiscount - discount;

  // Coupon
  const handleCoupon = () => {
    if (coupon.trim().toUpperCase() === "AUTO100") {
      setDiscount(100);
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  // Payment
  const handlePayment = (e) => {
    e.preventDefault();

    setPaymentSuccess(true);
  };

  // =========================
  // PAYMENT SUCCESS
  // =========================

  if (paymentSuccess) {
    return (
      <div className="payment-success-page">
        <div className="payment-success-card">
          <div className="success-icon">✓</div>

          <h1>Payment Successful!</h1>

          <p>
            Your payment of <strong>₹{finalAmount}</strong> has been
            successfully processed.
          </p>

          <div className="payment-success-details">
            <div>
              <span>Service</span>
              <strong>{service.title}</strong>
            </div>

            <div>
              <span>Vehicle</span>
              <strong>
                {car.brand} {car.model}
              </strong>
            </div>

            <div>
              <span>Registration</span>
              <strong>{car.number}</strong>
            </div>

            <div>
              <span>Payment Method</span>
              <strong>{paymentMethod.toUpperCase()}</strong>
            </div>

            <div>
              <span>Transaction ID</span>
              <strong>AC{Date.now()}</strong>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/dashboard" className="success-dashboard-btn">
              Go to Dashboard
            </Link>

            <Link to="/" className="success-home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // PAYMENT PAGE
  // =========================

  return (
    <div className="payment-page">
      {/* Header */}
      <section className="payment-header">
        <div>
          <span className="payment-badge">🔒 Secure Checkout</span>

          <h1>Complete Your Payment</h1>

          <p>Review your booking details and select a payment method.</p>
        </div>
      </section>

      {/* Main */}
      <main className="payment-container">
        <div className="payment-grid">
          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="payment-left">
            {/* Booking Summary */}
            <section className="payment-card">
              <div className="payment-card-header">
                <div>
                  <h2>Booking Summary</h2>

                  <p>Your selected service details</p>
                </div>

                <span className="booking-status">Confirmed</span>
              </div>

              <div className="booking-details">
                <div className="booking-detail">
                  <span>Service</span>

                  <strong>{service.title}</strong>
                </div>

                <div className="booking-detail">
                  <span>Vehicle</span>

                  <strong>
                    {car.brand} {car.model}
                  </strong>
                </div>

                <div className="booking-detail">
                  <span>Registration</span>

                  <strong>{car.number}</strong>
                </div>

                <div className="booking-detail">
                  <span>Date</span>

                  <strong>{bookingData.date || "Not selected"}</strong>
                </div>

                <div className="booking-detail">
                  <span>Time</span>

                  <strong>{bookingData.time || "Not selected"}</strong>
                </div>

                <div className="booking-detail">
                  <span>Location</span>

                  <strong>{bookingData.city || "Not selected"}</strong>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="payment-card">
              <div className="payment-card-header">
                <div>
                  <h2>Payment Method</h2>

                  <p>Choose how you want to pay</p>
                </div>
              </div>

              <div className="payment-methods">
                {/* UPI */}
                <button
                  type="button"
                  className={`payment-method ${
                    paymentMethod === "upi" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <span className="payment-method-icon">📱</span>

                  <span>
                    <strong>UPI</strong>

                    <small>Google Pay, PhonePe, Paytm</small>
                  </span>

                  <span className="method-radio">
                    {paymentMethod === "upi" ? "●" : "○"}
                  </span>
                </button>

                {/* CARD */}
                <button
                  type="button"
                  className={`payment-method ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <span className="payment-method-icon">💳</span>

                  <span>
                    <strong>Credit / Debit Card</strong>

                    <small>Visa, Mastercard, RuPay</small>
                  </span>

                  <span className="method-radio">
                    {paymentMethod === "card" ? "●" : "○"}
                  </span>
                </button>

                {/* CASH */}
                <button
                  type="button"
                  className={`payment-method ${
                    paymentMethod === "cash" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("cash")}
                >
                  <span className="payment-method-icon">💵</span>

                  <span>
                    <strong>Cash on Service</strong>

                    <small>Pay when service is completed</small>
                  </span>

                  <span className="method-radio">
                    {paymentMethod === "cash" ? "●" : "○"}
                  </span>
                </button>
              </div>

              {/* UPI INPUT */}
              {paymentMethod === "upi" && (
                <div className="payment-input-section">
                  <label>UPI ID</label>

                  <input type="text" placeholder="example@upi" />
                </div>
              )}

              {/* CARD INPUT */}
              {paymentMethod === "card" && (
                <div className="card-input-section">
                  <div className="payment-input-section">
                    <label>Card Number</label>

                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="card-input-row">
                    <div className="payment-input-section">
                      <label>Expiry Date</label>

                      <input type="text" placeholder="MM/YY" />
                    </div>

                    <div className="payment-input-section">
                      <label>CVV</label>

                      <input type="password" placeholder="•••" />
                    </div>
                  </div>

                  <div className="payment-input-section">
                    <label>Card Holder Name</label>

                    <input type="text" placeholder="Enter card holder name" />
                  </div>
                </div>
              )}

              {/* CASH */}
              {paymentMethod === "cash" && (
                <div className="cash-info">
                  💡 You can pay the service amount directly after your car
                  service is completed.
                </div>
              )}
            </section>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <aside className="payment-right">
            <div className="price-card">
              <h2>Payment Summary</h2>

              <div className="price-row">
                <span>Service Charge</span>

                <strong>₹{servicePrice}</strong>
              </div>

              <div className="price-row">
                <span>Taxes & Charges</span>

                <strong>₹{tax}</strong>
              </div>

              {discount > 0 && (
                <div className="price-row discount-row">
                  <span>Discount</span>

                  <strong>- ₹{discount}</strong>
                </div>
              )}

              <div className="price-divider"></div>

              <div className="total-row">
                <span>Total Amount</span>

                <strong>₹{finalAmount}</strong>
              </div>

              {/* Coupon */}
              <div className="coupon-section">
                <label>Have a coupon?</label>

                <div className="coupon-input">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                  />

                  <button type="button" onClick={handleCoupon}>
                    Apply
                  </button>
                </div>

                <small>Try code: AUTO100</small>
              </div>

              {/* Pay */}
              <form onSubmit={handlePayment}>
                <button type="submit" className="pay-now-btn">
                  🔒 Pay ₹{finalAmount}
                </button>
              </form>

              <div className="secure-payment">
                🔐 Your payment information is secure
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Payment;
