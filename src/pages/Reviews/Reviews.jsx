import { useState } from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";

function Reviews() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      car: "Hyundai Creta",
      rating: 5,
      date: "20 Sep 2026",
      review:
        "Very smooth service. Booking was easy and the car was delivered on time.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      car: "Maruti Swift",
      rating: 4,
      date: "16 Sep 2026",
      review:
        "Good service and professional staff. The pricing was also reasonable.",
    },
    {
      id: 3,
      name: "Amit Singh",
      car: "Honda City",
      rating: 5,
      date: "12 Sep 2026",
      review:
        "I used the AC service and the cooling improved significantly. Good experience.",
    },
    {
      id: 4,
      name: "Neha Jain",
      car: "Tata Nexon",
      rating: 5,
      date: "08 Sep 2026",
      review:
        "Quick response and very helpful team. I would definitely use the service again.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    car: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !formData.name || !formData.review) {
      alert("Please give a rating, enter your name and write a review.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      car: formData.car || "Customer",
      rating,
      date: "Today",
      review: formData.review,
    };

    setReviews((prev) => [newReview, ...prev]);

    setFormData({
      name: "",
      car: "",
      review: "",
    });

    setRating(0);
    setHoverRating(0);

    alert("Thank you! Your review has been submitted.");
  };

  const renderStars = (value) => {
    return (
      <div className="review-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= value ? "filled" : ""}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-page">
      {/* Hero */}
      <section className="reviews-hero">
        <div className="reviews-hero-content">
          <span className="reviews-badge">⭐ Customer Reviews</span>

          <h1>What Our Customers Say</h1>

          <p>
            See what customers think about their experience with our car service
            and roadside assistance.
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="reviews-summary">
        <div className="rating-card">
          <div className="rating-number">4.8</div>

          <div className="rating-stars">★★★★★</div>

          <p>Based on 250+ customer reviews</p>
        </div>

        <div className="rating-breakdown">
          <div className="rating-row">
            <span>5 ★</span>
            <div className="rating-bar">
              <div className="rating-fill width-90"></div>
            </div>
            <span>90%</span>
          </div>

          <div className="rating-row">
            <span>4 ★</span>
            <div className="rating-bar">
              <div className="rating-fill width-75"></div>
            </div>
            <span>75%</span>
          </div>

          <div className="rating-row">
            <span>3 ★</span>
            <div className="rating-bar">
              <div className="rating-fill width-35"></div>
            </div>
            <span>35%</span>
          </div>

          <div className="rating-row">
            <span>2 ★</span>
            <div className="rating-bar">
              <div className="rating-fill width-15"></div>
            </div>
            <span>15%</span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <main className="reviews-container">
        <div className="reviews-header">
          <div>
            <h2>Recent Reviews</h2>
            <p>Feedback from our customers</p>
          </div>

          <Link to="/booking" className="reviews-book-btn">
            Book a Service
          </Link>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-card-top">
                <div className="review-user">
                  <div className="review-avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.car}</span>
                  </div>
                </div>

                <span className="review-date">{review.date}</span>
              </div>

              {renderStars(review.rating)}

              <p className="review-text">{review.review}</p>

              <div className="verified-review">✓ Verified Customer</div>
            </div>
          ))}
        </div>

        {/* Write Review */}
        <section className="write-review-section">
          <div className="write-review-header">
            <h2>Share Your Experience</h2>
            <p>Recently used our service? Tell us about your experience.</p>
          </div>

          <form className="review-form" onSubmit={handleSubmit}>
            <div className="review-form-grid">
              <div className="review-field">
                <label>Your Name *</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="review-field">
                <label>Car</label>

                <input
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  placeholder="e.g. Hyundai Creta"
                />
              </div>
            </div>

            <div className="review-field rating-field">
              <label>Your Rating *</label>

              <div className="rating-selector">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={
                      star <= (hoverRating || rating)
                        ? "rating-star active"
                        : "rating-star"
                    }
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="review-field">
              <label>Your Review *</label>

              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Tell us about your service experience..."
                required
              />
            </div>

            <button type="submit" className="submit-review-btn">
              Submit Review
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Reviews;
